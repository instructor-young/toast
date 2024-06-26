import clsx from "clsx";
import React, { useEffect, useState } from "react";

function Toast({ option }) {
  const [isRendered, setIsRendered] = useState(false);
  const { title, description, duration } = option;

  useEffect(() => {
    setIsRendered(true);

    setTimeout(() => {
      setIsRendered(false);
    }, duration);
  }, [duration]);

  const className = clsx(
    "shadow-lg bg-white p-6 border rounded-lg w-[320px] transition translate-x-[calc(100%+24px)] flex items-center duration-500 text-sm",
    { "!translate-x-0": isRendered }
  );

  return (
    <div className={className}>
      <div className="grow flex flex-col">
        <h6 className="font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Toast;
