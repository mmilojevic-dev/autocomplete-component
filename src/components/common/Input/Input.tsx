import cx from 'classnames'
import { ChangeEvent, forwardRef } from 'react'

interface InputProps {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, placeholder, onChange, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(
          'bg-transparent',
          'border-gray',
          'border-solid',
          'border',
          'mb-md',
          'outline-gray',
          'outline-solid',
          'outline',
          'p-sm',
          'text-base',
          'w-full',
          'text-white',
          'hover:border-white',
          'hover:outline-white',
          'focus:border-white',
          'focus:outline-white',
          'placeholder:text-white',
          'placeholder:text-opacity-30'
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    )
  }
)

Input.displayName = 'Input'
