import React from 'react'

// Define the type for a toast item
interface ToastItem {
  name: string
  message: string
  request?: boolean
}

// Define the type for the context
interface ToastContextType {
  addToast: (toast: ToastItem) => void
}

// Create the ToastContext
const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export default ToastContext

// Define the props for the ToastContextProvider component
interface ToastContextProviderProps {
  children: React.ReactNode
}

export const ToastContextProvider: React.FC<ToastContextProviderProps> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  // UseEffect to remove the toast after 3 seconds
  React.useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts((toasts) => toasts.slice(1)), 3000)
      return () => clearTimeout(timer)
    }
  }, [toasts])

  // Function to add a new toast
  const addToast = React.useCallback((toast: ToastItem) => {
    setToasts((toasts) => [...toasts, toast])
  }, [setToasts])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <div
        key= {toast.name}
          id="toast-undo"
          className="flex absolute bottom-14 right-5 items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="text-sm font-normal">
            {toast.name} {toast.message}
          </div>
          <div className="flex items-center ml-auto space-x-2">
            {toast.request
              ? (
              <a
                className="text-sm font-medium text-green-600 p-1.5 hover:bg-green-100 rounded-lg dark:text-green-500 dark:hover:bg-gray-700"
                href="#"
              >
                Accept
              </a>
                )
              : (
                  ''
                )}

            <a
              className="text-sm font-medium text-red-600 p-1.5 hover:bg-green-100 rounded-lg dark:text-red-500 dark:hover:bg-gray-700"
              href="#"
            >
              Decline
            </a>
            {/* <button
                type="button"
                class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-undo"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button> */}
          </div>
        </div>
      ))}
    </ToastContext.Provider>
  )
}
