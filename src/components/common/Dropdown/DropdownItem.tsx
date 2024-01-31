import React from 'react'

interface DropdownItemProps<T> {
  item: T
  isFocused: boolean
  onSelect: () => void
  displayKey: keyof T
  searchTerm: string
}

export const DropdownItem = React.forwardRef<
  HTMLLIElement,
  DropdownItemProps<any>
>(({ item, isFocused, onSelect, displayKey, searchTerm }, ref) => {
  const splitAndHighlight = (value: string) => {
    const parts = value.split(new RegExp(`(${searchTerm})`, 'gi'))
    return parts.map((part, index) => {
      return part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="dropdown__item--highlight">
          {part}
        </span>
      ) : (
        part
      )
    })
  }

  return (
    <li
      ref={ref}
      className={`dropdown__item ${isFocused ? 'dropdown__item--focused' : ''}`}
      onClick={onSelect}
    >
      {splitAndHighlight(`${item[displayKey]}`)}
    </li>
  )
})

DropdownItem.displayName = 'DropdownItem'
