
import { useState, useRef, useEffect } from "react"
import { cn } from "../../lib/utils"

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {children({ isOpen, setIsOpen })}
    </div>
  )
}

const DropdownMenuTrigger = ({ children, isOpen, setIsOpen, className, ...props }) => {
  return (
    <div className={cn("cursor-pointer", className)} onClick={() => setIsOpen(!isOpen)} {...props}>
      {children}
    </div>
  )
}

const DropdownMenuContent = ({ children, isOpen, className, ...props }) => {
  if (!isOpen) return null

  return (
    <div
      className={cn("absolute right-0 top-full mt-2 w-80 rounded-md border bg-white shadow-lg z-50", className)}
      {...props}
    >
      {children}
    </div>
  )
}

const DropdownMenuHeader = ({ children, className, ...props }) => {
  return (
    <div className={cn("px-4 py-3 border-b bg-gray-50 rounded-t-md", className)} {...props}>
      {children}
    </div>
  )
}

const DropdownMenuItem = ({ children, className, onClick, ...props }) => {
  return (
    <div
      className={cn("px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

const DropdownMenuFooter = ({ children, className, ...props }) => {
  return (
    <div className={cn("px-4 py-3 border-t bg-gray-50 rounded-b-md", className)} {...props}>
      {children}
    </div>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuFooter,
}
