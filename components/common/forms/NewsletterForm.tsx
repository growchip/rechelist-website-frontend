"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import CustomInput from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSubscriptionFieldsData } from "@/utils/formFields";
import { getErrorMessage, useFocusOnError } from "@/utils/useFormHelpers";
import {
  newsSubscriptionSchema,
  TNewsSubscriptionSchema,
} from "@/validations/common-schemas";
import mailBtn from "@/icons/newsletter-btn.svg";

const NewsletterForm = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    setFocus,
  } = useForm<TNewsSubscriptionSchema>({
    resolver: zodResolver(newsSubscriptionSchema),
  });

  useFocusOnError(errors, setFocus);

  useEffect(() => {
    if (errors.email) setSuccessMessage("");
  }, [errors.email]);

  const onSubmit = async (data: TNewsSubscriptionSchema) => {
    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.message) {
          setError("email", {
            type: "server",
            message: responseData.message,
          });
        }
        return;
      }

      if (response.status === 201 || response.status === 200) {
        setSuccessMessage(responseData.message || "Successfully subscribed!");
        reset();
      }
    } catch (error) {
      console.error("Request failed:", error);
      setError("email", {
        type: "server",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-gapSmall lg:gap-gap w-full lg:w-3/4">
      <h6 className="text-white font-normal text-xl">Newsletter</h6>
      <div className="flex flex-col gap-gapSmall">
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
          {newsSubscriptionFieldsData.map((item, index) => (
            <CustomInput
              key={index}
              type={item.type}
              placeholder={item.placeholder}
              {...register(item.name as keyof TNewsSubscriptionSchema)}
              className={`w-full rounded-full bg-white px-4 py-3 pr-12 text-fontDesk shadow-sm focus:border focus:outline-none focus:border-primaryOrange`}
            />
          ))}

          <button
            className={`absolute top-1/2 right-2 -translate-y-1/2 transition-opacity duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            disabled={isSubmitting}
          >
            <Image
              src={mailBtn}
              alt="newsletter-button"
              width={32}
              height={32}
              unoptimized
              quality={100}
              className="size-[2rem]"
            />
          </button>
        </form>

        {errors.email && (
          <p className="text-dangerRedText text-fontDeskSmall ml-gap">
            {getErrorMessage(errors.email)}
          </p>
        )}

        {successMessage.length > 0 && !errors.email && (
          <div className="text-successGreen text-fontDeskSmall ml-gap">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
