"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "@/components/ui/Input";
import {
  enquiryFormSchema,
  TEnquiryFormSchema,
} from "@/validations/common-schemas";
import { enquiryFormFieldsData } from "@/utils/formFields";
import { getErrorMessage, useFocusOnError } from "@/utils/useFormHelpers";

type ProductEnquiryFormProps = {
  productTitle: string;
};

const ProductEnquiryForm: React.FC<ProductEnquiryFormProps> = ({
  productTitle,
}) => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    setFocus,
  } = useForm<TEnquiryFormSchema>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      product: productTitle,
    },
  });

  // Focus on first error input
  useFocusOnError(errors, setFocus);

  useEffect(() => {
    if (Object.keys(errors).length > 0 || serverError) {
      setSuccessMessage("");
    }
  }, [errors, serverError]);

  const onSubmit = async (data: TEnquiryFormSchema) => {
    try {
      const response = await fetch("/api/product-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Handle field-level errors
        if (responseData.errors && typeof responseData.errors === "object") {
          Object.entries(responseData.errors).forEach(([field, message]) => {
            setError(field as keyof TEnquiryFormSchema, {
              type: "server",
              message: String(message),
            });
          });
        }

        // General error
        if (responseData.message) {
          setServerError(responseData.message);
        }
        return;
      }

      // Success
      if (response.status === 201 || response.status === 200) {
        setSuccessMessage(responseData.message || "Enquiry sent successfully!");
        setServerError("");
        reset(undefined, { keepValues: false }); // reset but keep product name
      }
    } catch (error) {
      console.error("Request failed:", error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Inputs in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {enquiryFormFieldsData.map((field) => (
          <div key={field.id} className="flex flex-col gap-1">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-gray-700 mb-1"
            >
              {field.label}
            </label>
            <CustomInput
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.name as keyof TEnquiryFormSchema)}
              disabled={field.name === "product"}
              className={`w-full rounded-xl px-4 py-2 border border-gray-300 bg-transparent
                focus:outline-none focus:border-primary
                ${
                  field.name === "product"
                    ? "bg-gray-100 cursor-not-allowed text-primaryBlue font-semibold lg:font-normal"
                    : ""
                }
              `}
            />
            {errors[field.name as keyof TEnquiryFormSchema] && (
              <p className="text-dangerRedText text-sm ml-2">
                {getErrorMessage(
                  errors[field.name as keyof TEnquiryFormSchema]
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-1 mt-4">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          {...register("message")}
          className="w-full rounded-xl px-4 py-2 border border-gray-300 bg-transparent 
               focus:outline-none focus:border-primary 
               min-h-[7.5rem]"
        />
        {errors.message && (
          <p className="text-dangerRedText text-sm ml-2">
            {getErrorMessage(errors.message)}
          </p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex flex-col gap-3 mt-gapUltra text-center">
        {serverError && (
          <p className="text-dangerRedText text-sm">{serverError}</p>
        )}
        {successMessage && (
          <p className="text-successGreen text-sm">{successMessage}</p>
        )}

        <button
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-primary2 to-primary text-white font-semibold py-2 px-10 rounded-xl transition w-fit mx-auto ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ProductEnquiryForm;
