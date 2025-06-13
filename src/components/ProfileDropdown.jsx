import { useState, useRef, useEffect } from "react"
import { ChevronDown, User, Settings, LogOut } from "lucide-react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./ui/modal"
import { Button } from "./ui/button"

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleNavigate = (tab) => {
    setIsOpen(false)
    if (typeof window !== "undefined" && window.setActiveTab) {
      window.setActiveTab(tab) // setActiveTab("profile") etc.
    }
  }

  const handleLogout = () => {
    setIsOpen(false)
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    if (typeof window !== "undefined" && window.setIsAuthenticated) {
      window.setIsAuthenticated(false)
    }
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-200">
            <div
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleNavigate("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              My Profile
            </div>
            <div
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleNavigate("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </div>
            <div className="border-t border-gray-100 my-1"></div>
            <div
              className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </div>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      <Modal isOpen={showLogoutConfirm} onClose={() => setShowLogoutConfirm(false)}>
        <ModalHeader>
          <h3 className="text-lg font-medium">Confirm Logout</h3>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to logout?</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setShowLogoutConfirm(false)}>
            Cancel
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmLogout}>
            Logout
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
