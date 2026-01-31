import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-10 px-4">
      <div className="w-full max-w-lg bg-white p-8 flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-2xl">
        {/* Icon */}
        <FaExclamationTriangle className="text-primaryOrange text-6xl mb-4" />

        {/* Headings */}
        <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-500 text-center mt-3">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
