"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "@/components/ui/Input";
import { contactFormFieldsData } from "@/utils/formFields";
import { getErrorMessage, useFocusOnError } from "@/utils/useFormHelpers";
import {
  contactFormSchema,
  TContactFormSchema,
} from "@/validations/common-schemas";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    setFocus,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  useFocusOnError(errors, setFocus);

  useEffect(() => {
    if (Object.keys(errors).length > 0 || serverError) {
      setSuccessMessage("");
    }
  }, [errors, serverError]);

  const onSubmit = async (data: TContactFormSchema) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // If server sends field-specific errors as { field: "message" }
        if (responseData.errors && typeof responseData.errors === "object") {
          Object.entries(responseData.errors).forEach(([field, message]) => {
            setError(field as keyof TContactFormSchema, {
              type: "server",
              message: String(message),
            });
          });
        }

        // If server sends a general error
        if (responseData.message) {
          setServerError(responseData.message);
        }
        return;
      }

      if (response.status === 201 || response.status === 200) {
        setSuccessMessage(responseData.message || "Message sent successfully!");
        setServerError("");
        reset();
      }
    } catch (error) {
      console.error("Request failed:", error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-custom flex flex-col gap-gap"
    >
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-primary">
        Send us a message
      </h2>

      {/* Input Fields */}
      {contactFormFieldsData.map((field, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <CustomInput
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name as keyof TContactFormSchema)}
            className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-primaryOrange"
          />
          {errors[field.name as keyof TContactFormSchema] && (
            <p className="text-dangerRedText text-sm ml-2">
              {getErrorMessage(errors[field.name as keyof TContactFormSchema])}
            </p>
          )}
        </div>
      ))}

      {/* Message Textarea */}
      <div className="flex flex-col gap-1">
        <textarea
          placeholder="Your Message"
          {...register("message")}
          className="w-full rounded-xl px-4 py-2 border border-gray-300 bg-transparent 
               focus:outline-none focus:border-primaryOrange 
               min-h-[7.5rem]"
        />
        {errors.message && (
          <p className="text-dangerRedText text-sm ml-2">
            {getErrorMessage(errors.message)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-gap text-center">
        {serverError && (
          <p className="text-dangerRedText text-sm">{serverError}</p>
        )}

        {successMessage && (
          <p className="text-successGreen text-sm">{successMessage}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-primary2 to-primary text-white font-semibold py-3 px-6 rounded-full transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
      </div>
    </form>
  );
};

export default ContactForm;
