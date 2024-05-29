import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ToastOption } from "../contexts/toast.context";

interface ToastProps {
  option: ToastOption;
}

function Toast({ option }: ToastProps) {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const { title, description } = option;

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const className = clsx(
    "shadow-lg bg-white p-6 border rounded-lg w-[360px] transition translate-x-full flex items-center duration-500 text-sm",
    { "!translate-x-0": isRendered }
  );

  return (
    <div className={className}>
      <div className="grow flex flex-col">
        <h6 className="font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
      <button className="whitespace-nowrap text-xs rounded border px-3 py-1.5 font-medium">
        close
      </button>
    </div>
  );
}

export default Toast;
