import React, {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import Toast from "../components/Toast";

const DURATION = 1000;

export type ToastOption = {
  variant?: "info" | "warning" | "danger";
  title: string;
  description: string;
};

type ToastContext = (option: ToastOption) => void;

const initialValue: ToastContext = () => {};

const ToastContext = createContext(initialValue);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<
    Array<{ id: string; element: ReactElement; option: ToastOption }>
  >([]);

  const value = useCallback((option: ToastOption) => {
    const id = crypto.randomUUID();
    const element = <Toast option={option} />;

    setToasts((prevToasts) => [...prevToasts, { id, element, option }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, DURATION);
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.length > 0 && (
        <div style={{ position: "fixed", right: 0, bottom: 0 }}>
          {toasts.map((toast) => (
            <React.Fragment key={toast.id}>{toast.element}</React.Fragment>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
