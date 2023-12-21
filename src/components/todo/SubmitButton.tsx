import React, { FC } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const SubmitButton: FC<ButtonProps> = ({ children, className }) => {
  const { pending } = useFormStatus();
  console.log(" form submission pending :", pending);
  return (
    <button
      className={`" ${
        pending ? "bg-blue-400/30 border  cursor-wait" : ""
      }  rounded-md text-white px-2 p-2  text-md ${className}`}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {!pending ? children : "..."}
    </button>
  );
};

export default SubmitButton;
