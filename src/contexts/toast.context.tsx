import React, {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import Toast from "../components/Toast";

const DEFAULT_DURATION = 2000;

export type ToastOption = {
  title: string;
  description: string;
  duration: number;
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
    const element = (
      <Toast
        option={{ ...option, duration: option.duration || DEFAULT_DURATION }}
      />
    );

    setToasts((prevToasts) => [...prevToasts, { id, element, option }]);

    setTimeout(
      () => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      },
      option.duration ? option.duration + 500 : DEFAULT_DURATION + 500
    );
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.length > 0 && (
        <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
          {toasts.map((toast) => (
            <li key={toast.id}>{toast.element}</li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
