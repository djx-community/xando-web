import React from 'react'

// Define the type for an alert item
interface AlertItem {
  message?: string
  accept?: string
  denied?: string
  open: boolean
  action: () => void
  exit: () => void
}

// Define the type for the context
interface AlertContextType {
  addAlert: (alert: AlertItem) => void
}

// Create the AlertContext
const AlertContext = React.createContext<AlertContextType | undefined>(undefined)

export default AlertContext

// Define the props for the AlertContextProvider component
interface AlertContextProviderProps {
  children: React.ReactNode
}

export const AlertContextProvider: React.FC<AlertContextProviderProps> = ({ children }) => {
  const [alert, setAlert] = React.useState<AlertItem>({ open: false, action: () => { }, exit: () => { } })
  const modalElement: HTMLElement | null = document.getElementById('popup-modal')

  // Callback function to set alert
  const addAlert = React.useCallback((alert: AlertItem) => {
    setAlert(alert)
    if (alert.open) {
      if (modalElement) {
        modalElement.classList.remove('hidden')
        modalElement.classList.add('flex')
      }
    }
  }, [])

  const closeAlert = () => {
    if (modalElement) {
      modalElement.classList.remove('flex')
      modalElement.classList.add('hidden')
    }
  }

  // Accepts an alert object and performs the action
  const handleAccept = () => {
    closeAlert()
    alert.action()
  }

  // Closes the alert and performs the exit action
  const handleDenied = () => {
    alert.exit()
    closeAlert()
  }

  React.useEffect(() => {
    if (alert.open) {
      const timer = setTimeout(closeAlert, 3000)
      return () => clearTimeout(timer)
    }
  }, [alert.open])

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div
        id="popup-modal"
        tabIndex={-2}
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="popup-modal"
              onClick={closeAlert}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className="sr-only"
                onClick={() => {
                  if (modalElement) {
                    modalElement
                      .classList.add('hidden')
                  }
                }}
              >
                Close modal
              </span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {alert.message
                  ? alert.message
                  : 'Are you sure you want to do this action?'}
              </h3>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={handleAccept}
              >
                {alert.accept ? alert.accept : "Yes, I'm sure"}
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleDenied}
              >
                {alert.denied ? alert.denied : 'No, cancel'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AlertContext.Provider>
  )
}
