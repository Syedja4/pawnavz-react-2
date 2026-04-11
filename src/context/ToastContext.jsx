import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const ToastStateContext = createContext(undefined)
const ToastActionsContext = createContext(undefined)

function useRequiredContext(Context, name) {
  const value = useContext(Context)

  if (value === undefined) {
    throw new Error(`${name} must be used within ToastProvider`)
  }

  return value
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const hideToast = useCallback(() => setToast(null), [])

  const showToast = useCallback((icon, title, sub) => {
    setToast({ icon, title, sub })
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setToast(null), 3200)
  }, [])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const actionsValue = useMemo(
    () => ({ showToast, hideToast }),
    [hideToast, showToast]
  )

  return (
    <ToastStateContext.Provider value={toast}>
      <ToastActionsContext.Provider value={actionsValue}>
        {children}
      </ToastActionsContext.Provider>
    </ToastStateContext.Provider>
  )
}

export function useToastState() {
  return useRequiredContext(ToastStateContext, 'useToastState')
}

export function useToastActions() {
  return useRequiredContext(ToastActionsContext, 'useToastActions')
}

export function useToast() {
  const toast = useToastState()
  const actions = useToastActions()

  return {
    toast,
    ...actions,
  }
}
