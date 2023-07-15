import React from 'react'
import useKeydown from '../../hooks/useKeydown'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Oh Snap!',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Success!',
      variant: 'success',
    },
  ])

  const handleEscape = React.useCallback(() => setToasts([]), [])

  useKeydown('Escape', handleEscape)

  function createToast(message, variant) {
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]
    setToasts(newToasts)
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }

  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>{children}</ToastContext.Provider>
}

export default ToastProvider
