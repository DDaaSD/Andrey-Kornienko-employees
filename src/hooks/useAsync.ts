import { useState, useCallback } from 'react'

type AsyncState<T, G> = {
    data: T | undefined
    isLoading: boolean
    error: any
    refetch: (params: G) => Promise<void>
}

export function useAsync<T, G>(asyncFn: (params:G) => Promise<T>): AsyncState<T, G> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const fetchData = useCallback(async (params:G) => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await asyncFn(params)
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [asyncFn])

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  }
}
