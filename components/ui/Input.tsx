import { forwardRef } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, className, ...rest }, ref) => {
    return (
      <div className="group w-full rounded-full p-[1px] bg-transparent">
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={className}
          {...rest}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
