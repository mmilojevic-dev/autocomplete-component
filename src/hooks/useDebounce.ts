import { useCallback, useEffect, useRef } from 'react'

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay: number
) {
  const timer = useRef<Timer>()

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => func(...args), delay)
    },
    [func, delay]
  )

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  return debouncedFunction
}
