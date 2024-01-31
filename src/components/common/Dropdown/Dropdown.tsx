import './Dropdown.css'

import cx from 'classnames'
import React from 'react'

interface DropdownProps<T> {
  data: T[]
  searchTerm: string
  displayKey: keyof T
  noItemsMessage: string
  focusedIndex: number
  onSelect: (item: T) => void
}

export function Dropdown<T>({
  data,
  searchTerm,
  displayKey,
  noItemsMessage,
  onSelect,
  focusedIndex
}: DropdownProps<T>) {
  const itemRefs = React.useRef<(HTMLLIElement | null)[]>([])

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
          <span key={index} className="dropdown__item--highlight">
            {part}
          </span>
        )
      }
      // Return unmatched part as it is.
      return part
    })
  }

  // Ensure the focused item is visible within the dropdown's viewport
  React.useEffect(() => {
    const focusedItemRef = itemRefs.current[focusedIndex]
    focusedItemRef?.scrollIntoView({
      block: 'nearest'
    })
  }, [focusedIndex])

  return (
    <div
      className={cx(
        'dropdown',
        'bg-white',
        'bg-opacity-10',
        'max-h-8xl',
        'overflow-y-auto'
      )}
    >
      <ul className={cx('m-0', 'p-0')}>
        {data.length
          ? // Render the list items with possible highlighting
            data.map((item, index) => (
              <li
                key={`dropdown-item-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={cx(
                  'border',
                  'border-solid',
                  'border-transparent',
                  'text-white',
                  'py-sm',
                  'px-md',
                  'w-full',
                  'hover:border-white',
                  index === focusedIndex && 'border-white'
                )}
                onClick={() => onSelect(item)}
              >
                {splitAndHighlight(`${item[displayKey]}`)}
              </li>
            ))
          : // Display message if no items match the filter
            noItemsMessage && <li className="text-center">{noItemsMessage}</li>}
      </ul>
    </div>
  )
}
