import { useEffect, useState } from 'react'

import { TRANSLATIONS } from '@/constants'

interface UseFetchedDataProps {
  url: string
}

export const useFetchedData = <T>({ url }: UseFetchedDataProps) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(TRANSLATIONS.NETWORK_RESPONSE_ERROR_MESSAGE)
        }
        const result = await response.json()
        setData(result.data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err)
          console.error(TRANSLATIONS.FETCH_ERROR_MESSAGE, err.message)
        } else {
          console.error(TRANSLATIONS.UNKNOWN_ERROR_MESSAGE, err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
