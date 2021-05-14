import { useEffect } from 'react'

export const useBeforeUnload = (value) => {
  const handleBeforeunload = (e) => {
    let returnValue
    if (typeof value === 'function') {
      returnValue = value(e)
    } else {
      returnValue = value
    }
    if (returnValue) {
      e.preventDefault()
      e.returnValue = returnValue
    }
    return returnValue
  }

  useEffect(() => {
    window.addEventListener('unload', handleBeforeunload)
    return () => window.removeEventListener('unload', handleBeforeunload)
  }, [])
}
