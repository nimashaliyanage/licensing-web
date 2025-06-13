
import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Subscription from "./components/Subscription"
import ProductManagement from "./components/ProductManagement"
import CustomerManagement from "./components/CustomerManagement"
import Settings from "./components/Settings"
import Invoice from "./components/Invoice"
import AuthContainer from "./components/auth/AuthContainer"
import Profile from "./components/Profile"

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [settingsTab, setSettingsTab] = useState("general")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleViewAllNotifications = () => {
    setActiveTab("settings")
    setSettingsTab("notifications")
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "subscription":
        return <Subscription />
      case "products":
        return <ProductManagement />
      case "customers":
        return <CustomerManagement />
      case "settings":
        return <Settings defaultTab={settingsTab} />
      case "invoice":
        return <Invoice />
      case "profile":
        return <Profile />
      default:
        return <Dashboard />
    }
  }

   useEffect(() => {
    if (typeof window !== "undefined") {
      window.setActiveTab = setActiveTab
      window.setIsAuthenticated = setIsAuthenticated
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.setActiveTab
        delete window.setIsAuthenticated
      }
    }
  }, [])

  if (!isAuthenticated) {
    return <AuthContainer onAuthSuccess={handleAuthSuccess} />
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header
          activeTab={activeTab}
          setSidebarOpen={setSidebarOpen}
          onViewAllNotifications={handleViewAllNotifications}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">{renderContent()}</main>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
