import cx from 'classnames'
import React from 'react'

interface DropdownItemProps<T> {
  item: T
  isFocused: boolean
  onSelect: (item: T) => void
  displayKey: keyof T
  searchTerm: string
}

export const DropdownItem = React.forwardRef<
  HTMLLIElement,
  DropdownItemProps<any>
>(({ item, isFocused, onSelect, displayKey, searchTerm }, ref) => {
  // Function to highlight searchTerm within a given value
  // doing this in order to avoid dangerouslySetInnerHTML approach
  const splitAndHighlight = (value: string) => {
    // Split value by searchTerm, alternating matched and unmatched segments.
    const parts = value.split(new RegExp(`(${searchTerm})`, 'gi'))

    // Map through parts, highlighting matches.
    return parts.map((part, index) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        // Highlight matched part.
        return (
          <span key={index} className="font-black">
            {part}
          </span>
        )
      }
      // Return unmatched part as it is.
      return part
    })
  }

  return (
    <li
      ref={ref}
      className={cx(
        'border',
        'border-solid',
        'border-transparent',
        'text-white',
        'py-sm',
        'px-md',
        'w-full',
        'hover:border-white',
        isFocused && 'border-white'
      )}
      onClick={() => onSelect(item)}
    >
      {splitAndHighlight(`${item[displayKey]}`)}
    </li>
  )
})

DropdownItem.displayName = 'DropdownItem'
