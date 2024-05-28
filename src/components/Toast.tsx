import React from "react";
import { ToastOption } from "../contexts/toast.context";

interface ToastProps {
  option: ToastOption;
}

function Toast({ option }: ToastProps) {
  const { variant, title, description } = option;
  return (
    <div style={{ background: "yellow", border: "1px solid red", padding: 20 }}>
      {title}
    </div>
  );
}

export default Toast;
