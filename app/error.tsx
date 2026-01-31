"use client";

import { useEffect } from "react";
import Link from "next/link";

import { FaBomb } from "react-icons/fa";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center mt-20 mb-10 px-4">
      <div className="w-full max-w-lg bg-white p-8 flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-2xl">
        {/* Icon */}
        <FaBomb className="text-red-500 text-6xl mb-4" />

        {/* Headings */}
        <h1 className="text-4xl font-extrabold text-gray-800">
          Something went wrong
        </h1>
        <p className="text-gray-500 text-center mt-3">
          We hit a snag while loading this page. Please try again or go back
          home.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={reset}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
