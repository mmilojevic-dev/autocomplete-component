import React from 'react'

import { TEAM_NAME_DISPLAY_KEY } from '@/constants'
import { useFilteredData } from '@/hooks/useFilteredData'
import { TeamType } from '@/types'

export const useAutocomplete = (
  data: TeamType[] | null,
  inputFilterRef: HTMLInputElement | null,
  divRef: HTMLDivElement | null
) => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const [selectedItem, setSelectedItem] = React.useState<TeamType | null>(null)
  const [focusedItemIndex, setFocusedItemIndex] = React.useState(0)
  const [isDropdownVisible, setIsDropdownVisible] =
    React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const { filteredData, loading: filterLoading } = useFilteredData<TeamType>(
    TEAM_NAME_DISPLAY_KEY,
    inputValue,
    data
  )

  // Handle keyboard navigation in the dropdown list
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Navigate down
    if (e.key === 'ArrowDown' && focusedItemIndex < filteredData.length - 1) {
      setFocusedItemIndex(focusedItemIndex + 1)
    }
    // Navigate up
    if (e.key === 'ArrowUp' && focusedItemIndex > 0) {
      setFocusedItemIndex(focusedItemIndex - 1)
    }
    // Select the focused item
    if (e.key === 'Enter') {
      setInputValue(
        filteredData[focusedItemIndex][TEAM_NAME_DISPLAY_KEY as keyof TeamType]
      )
      setSelectedItem(filteredData[focusedItemIndex])
      setIsDropdownVisible(false)
    }
    // Close the dropdown
    if (e.key === 'Escape') {
      setIsDropdownVisible(false)
    }

    if (e.key === 'Backspace') {
      setSelectedItem(null)
    }
  }

  React.useEffect(() => {
    setIsDropdownVisible(!!inputValue && !filterLoading && !selectedItem)
    setLoading(filterLoading && !selectedItem)
  }, [inputValue, selectedItem, filterLoading, filteredData])

  React.useEffect(() => {
    if (inputFilterRef) {
      // trap the focus on the input field
      inputFilterRef.focus()
    }
  }, [inputFilterRef])

  React.useEffect(() => {
    if (divRef) {
      // listen for the clicks outside of the autocomplete in order to close the dropdown
      const handleClickOutside = (event: MouseEvent) => {
        if (!divRef.contains(event.target as Node)) {
          setIsDropdownVisible(false)
          setInputValue('')
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [divRef])

  React.useEffect(() => {
    setInputValue(
      selectedItem ? selectedItem[TEAM_NAME_DISPLAY_KEY as keyof TeamType] : ''
    )
  }, [selectedItem])

  return {
    filteredData,
    focusedItemIndex,
    inputValue,
    isDropdownVisible,
    loading,
    handleKeyDown,
    setInputValue,
    setSelectedItem
  }
}
