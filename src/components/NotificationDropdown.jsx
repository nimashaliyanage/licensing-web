import { useState } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuFooter,
} from "./ui/DropdownMenu"
import { Bell, AlertTriangle, CheckCircle, Info, X } from "lucide-react"

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "warning",
      title: "License Expiring Soon",
      message: "PhotoEditor Pro license for John Doe expires in 3 days",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Payment Received",
      message: "Payment of $299 received from Jane Smith",
      time: "4 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New Customer Registration",
      message: "Bob Johnson has registered as a new customer",
      time: "6 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "warning",
      title: "Security Alert",
      message: "Multiple login attempts detected for license LIC-001",
      time: "1 day ago",
      read: false,
    },
    {
      id: 5,
      type: "success",
      title: "License Activated",
      message: "VideoSuite license successfully activated for Alice Brown",
      time: "2 days ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <DropdownMenu>
      {({ isOpen, setIsOpen }) => (
        <>
          <DropdownMenuTrigger isOpen={isOpen} setIsOpen={setIsOpen}>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {unreadCount > 9 ? "9+" : unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent isOpen={isOpen}>
            <DropdownMenuHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.stopPropagation()
                      markAllAsRead()
                    }}
                  >
                    Mark all as read
                  </Button>
                )}
              </div>
            </DropdownMenuHeader>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p>No notifications</p>
                </div>
              ) : (
                notifications.slice(0, 5).map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={`relative ${!notification.read ? "bg-blue-50" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      markAsRead(notification.id)
                    }}
                  >
                    <div className="flex items-start space-x-3 w-full">
                      <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 hover:bg-gray-200"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeNotification(notification.id)
                            }}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        {!notification.read && (
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))
              )}
            </div>

            {notifications.length > 0 && (
              <DropdownMenuFooter>
                 <Button
                  variant="ghost"
                  className="w-full text-sm text-blue-600 hover:text-blue-800"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                    onViewAllNotifications()
                  }}
                >
                  View all notifications
                </Button>
              </DropdownMenuFooter>
            )}
          </DropdownMenuContent>
        </>
      )}
    </DropdownMenu>
  )
}
