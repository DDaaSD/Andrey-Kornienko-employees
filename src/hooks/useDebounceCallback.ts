import { useEffect } from 'react'

export function useDebounceCallback<T>(value: T, delay: number, callback: (val: T) => void) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay, callback])
}
