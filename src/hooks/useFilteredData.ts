import { useCallback, useEffect, useState } from 'react'

import { DEBOUNCE_DELAY, FAKE_RESPONSE_DELAY, TRANSLATIONS } from '@/constants'

import { useDebounce } from './useDebounce'

export const useFilteredData = <T>(
  filterKey: keyof T,
  filterTerm: string,
  data: T[] | null
) => {
  const [filteredData, setFilteredData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleFiltering = useCallback(
    async (term: string) => {
      const filterData = (inputTerm: string): T[] => {
        if (inputTerm && data) {
          return data.filter((item) => {
            const fieldValue = String(item[filterKey] || '').toLowerCase()
            return fieldValue.includes(inputTerm.toLowerCase())
          })
        }
        return []
      }

      // Simulate API call delay before filtering
      const fakeApiResponseTimeout = setTimeout(() => {
        try {
          const results = filterData(term)
          setFilteredData(results)
        } catch (err) {
          console.error(TRANSLATIONS.FILTER_ERROR_MESSAGE, err)
        } finally {
          setLoading(false)
        }
      }, FAKE_RESPONSE_DELAY)

      return () => clearTimeout(fakeApiResponseTimeout)
    },
    [data, filterKey]
  )

  const debouncedFilter = useDebounce(handleFiltering, DEBOUNCE_DELAY)

  useEffect(() => {
    if (filterTerm) {
      setLoading(true)
      debouncedFilter(filterTerm)
    } else {
      setFilteredData([])
    }
  }, [data, filterKey, filterTerm, debouncedFilter])

  return { filteredData, loading }
}
