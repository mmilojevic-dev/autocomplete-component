import React from 'react'

import { Dropdown } from '@/components/common/Dropdown'
import { Input } from '@/components/common/Input'
import { Loading } from '@/components/common/Loading'
import { TEAM_NAME_DISPLAY_KEY, TRANSLATIONS } from '@/constants'
import { TeamType } from '@/types'

import { useAutocomplete } from './useAutocomplete'

interface AutocompleteProps {
  data: TeamType[] | null
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ data }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const divRef = React.useRef<HTMLDivElement>(null)

  const {
    filteredData,
    focusedItemIndex,
    inputValue,
    isDropdownVisible,
    loading,
    handleKeyDown,
    setInputValue,
    setSelectedItem
  } = useAutocomplete(data, inputRef.current, divRef.current)

  return (
    <div>
      <Input
        value={inputValue}
        placeholder={TRANSLATIONS.AUTOCOMPLETE_INPUT_PLACEHOLDER_MESSAGE}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {isDropdownVisible && (
        <Dropdown<TeamType>
          data={filteredData}
          searchTerm={inputValue}
          onSelect={(item) => setSelectedItem(item)}
          displayKey={TEAM_NAME_DISPLAY_KEY}
          noItemsMessage={
            !loading ? TRANSLATIONS.NO_ITEMS_DROPDOWN_MESSAGE : ''
          }
          focusedIndex={focusedItemIndex}
        />
      )}
      {loading && <Loading />}
    </div>
  )
}
