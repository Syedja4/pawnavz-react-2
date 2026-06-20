import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

/**
 * Lightweight custom dropdown that matches the site UI (the native <select>
 * option list can't be themed cross-browser).
 *
 * @param {Object}   props
 * @param {string}   props.value    Currently selected value.
 * @param {Array<{value:string,label:string}>} props.options
 * @param {(value:string)=>void}    props.onChange
 * @param {string}   [props.ariaLabel]
 * @param {string}   [props.className]  Extra classes on the wrapper (e.g. "block" for full width).
 */
export default function Dropdown({ value, options, onChange, ariaLabel, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = options.find((option) => option.value === value)

  useEffect(() => {
    if (!open) return undefined

    const handlePointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false)
    }
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div className={`dropdown${className ? ` ${className}` : ''}`} ref={ref}>
      <button
        type="button"
        className="dropdown-btn"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span>{current ? current.label : ''}</span>
        <FaChevronDown className={`dropdown-caret${open ? ' open' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={`dropdown-item${option.value === value ? ' active' : ''}`}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
