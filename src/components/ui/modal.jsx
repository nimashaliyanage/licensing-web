import { useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

export function Modal({ isOpen, onClose, children, className }) {
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Check if the click is on a select dropdown (which renders in a portal)
        const isSelectDropdown =
          event.target.closest("[data-radix-select-content]") ||
          event.target.closest("[data-radix-popper-content-wrapper]") ||
          event.target.closest("[data-radix-select-viewport]")

        if (!isSelectDropdown) {
          onClose()
        }
      }
    }

    // Close modal on Escape key
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        ref={modalRef}
        className={cn(
          "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function ModalHeader({ children, className }) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function ModalBody({ children, className }) {
  return <div className={cn("space-y-4", className)}>{children}</div>
}

export function ModalFooter({ children, className }) {
  return <div className={cn("mt-6 flex justify-end gap-2", className)}>{children}</div>
}
