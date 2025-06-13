import { Button } from "./ui/button"
import { Bell, Menu } from "lucide-react"
import NotificationDropdown from "./NotificationDropdown"
import ProfileDropdown from "./ProfileDropdown"

export default function Header({ activeTab, setSidebarOpen, onViewAllNotifications }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {activeTab === "dashboard" ? "Dashboard" : activeTab.replace(/([A-Z])/g, " $1")}
          </h2>
        </div>
        <div className="flex items-center space-x-4">
           <NotificationDropdown onViewAllNotifications={onViewAllNotifications} />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}
