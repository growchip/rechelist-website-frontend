import Link from "next/link";
import React from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "link";
  text: string;
  href?: string;
  target?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className = "px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full text-white transition-all duration-300 bg-primary hover:opacity-80",
  type = "button",
  text,
  href = "#",
  target,
  onClick,
}) => {
  if (type === "link") {
    return (
      <Link href={href} className={className} target={target}>
        {text}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
