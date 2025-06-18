import * as React from "react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(
    ({ title, description, variant = "default", duration = 3000 }) => {
      const id = Math.random().toString(36).substr(2, 9)
      setToasts((prevToasts) => [...prevToasts, { id, title, description, variant }])
      setTimeout(() => {
        removeToast(id)
      }, duration)
    },
    []
  )

  const removeToast = React.useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "p-4 rounded-md shadow-lg transform transition-all duration-300 max-w-sm",
              {
                "bg-white text-gray-900": toast.variant === "default",
                "bg-red-500 text-white": toast.variant === "destructive",
                "bg-green-500 text-white": toast.variant === "success",
              }
            )}
          >
            {toast.title && (
              <div className="font-semibold">{toast.title}</div>
            )}
            {toast.description && (
              <div className="text-sm">{toast.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = ({ title, description, variant, duration }) => {
  const { addToast } = useToast()
  addToast({ title, description, variant, duration })
} 