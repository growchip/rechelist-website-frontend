"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/ui/Input";
import {
  careerFormSchema,
  TCareerFormSchema,
} from "@/validations/common-schemas";
import { careerFormFieldsData } from "@/utils/formFields";
import { getErrorMessage, useFocusOnError } from "@/utils/useFormHelpers";

type CareerFormProps = {
  image: string;
};

const CareerForm: React.FC<CareerFormProps> = ({ image }) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    setFocus,
  } = useForm<TCareerFormSchema>({
    resolver: zodResolver(careerFormSchema),
  });

  useFocusOnError(errors, setFocus);

  useEffect(() => {
    if (errors.emailCareer) setSuccessMessage("");
  }, [errors.emailCareer]);

  const onSubmit = async (data: TCareerFormSchema) => {
    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) {
        if (responseData.message) {
          setError("emailCareer", {
            type: "server",
            message: responseData.message,
          });
        }
        return;
      }

      if (res.status === 200 || res.status === 201) {
        setSuccessMessage(responseData.message || "We’ll contact you soon!");
        reset();
      }
    } catch (err) {
      setError("emailCareer", {
        type: "server",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="flex flex-col md:grid md:grid-cols-[0.5fr_1fr] items-center gap-8 p-10 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl shadow-lg">
      {/* Left Image */}
      <div className="relative h-[17rem] lg:h-[25rem] w-full rounded-xl overflow-hidden">
        <Image
          fill
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${image}`}
          alt="HR Team"
          unoptimized
          quality={100}

          // className="object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full">
        <h3 className="text-2xl lg:text-3xl font-bold text-primaryBlue mb-3">
          Have Questions? <br />
          <span className="text-primaryOrange">Talk To Our HR Team Today!</span>
        </h3>
        <p className="text-gray-600 mb-6">
          Our HR team will get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col sm:flex-row gap-4 "
        >
          {careerFormFieldsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-gapSmall w-full whitespace-nowrap"
            >
              <CustomInput
                type={item.type}
                placeholder={item.placeholder}
                {...register(item.name as keyof TCareerFormSchema)}
                className="w-full flex-1 rounded-full bg-white px-4 py-3 shadow-sm focus:border focus:outline-none focus:border-primaryOrange"
              />
              {errors.emailCareer && (
                <p className="text-dangerRedText text-sm">
                  {getErrorMessage(errors.emailCareer)}
                </p>
              )}
              {successMessage && !errors.emailCareer && (
                <p className="text-successGreen text-sm">{successMessage}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="whitespace-nowrap mx-auto px-4 py-3 text-fontDesk lg:text-fontDeskLarge bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition disabled:opacity-50 w-fit h-fit"
          >
            {isSubmitting ? "Sending..." : "Request Call Back"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
