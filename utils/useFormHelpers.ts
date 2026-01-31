import { useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormSetFocus,
} from "react-hook-form";

// Function to handle setting focus on the first invalid field
export function useFocusOnError<T extends FieldValues>(
  errors: FieldErrors<T>,
  setFocus: UseFormSetFocus<T>
) {
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstError = Object.keys(errors).find(
        (key) => errors[key as keyof T]
      ) as Path<T> | undefined;
      if (firstError) {
        setTimeout(() => setFocus(firstError), 0);
      }
    }
  }, [errors, setFocus]);
}

// Function to extract error messages
export function getErrorMessage<T extends FieldValues>(
  error: FieldErrors<T>[keyof T]
): string | null {
  if (!error) return null;

  if (typeof error === "object") {
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }
    if (
      "label" in error &&
      typeof error.label === "object" &&
      "message" in error.label
    ) {
      return error.label.message as string;
    }
  }

  return null;
}
