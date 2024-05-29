import React, { useId } from "react";

function Input({ label, ...props }) {
  const id = useId();

  return (
    <div className="flex flex-col gap-y-1.5 items-start">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className="border px-4 py-2.5 rounded-md w-80"
        {...props}
      />
    </div>
  );
}

export default Input;
