import './Dropdown.css'

import cx from 'classnames'
import React from 'react'

import { DropdownItem } from './DropdownItem'

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
              <DropdownItem
                key={`dropdown-item-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                isFocused={index === focusedIndex}
                item={item}
                displayKey={displayKey}
                searchTerm={searchTerm}
                onSelect={onSelect}
              />
            ))
          : // Display message if no items match the filter
            noItemsMessage && (
              <li className={cx('text-center', 'text-white')}>
                {noItemsMessage}
              </li>
            )}
      </ul>
    </div>
  )
}
