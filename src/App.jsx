
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Subscription from "./components/Subscription"
import ProductManagement from "./components/ProductManagement"
import CustomerManagement from "./components/CustomerManagement"
import Security from "./components/Security"
import Settings from "./components/Settings"

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [settingsTab, setSettingsTab] = useState("general")

  const handleViewAllNotifications = () => {
    setActiveTab("settings")
    setSettingsTab("notifications")
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
      case "security":
        return <Security />
      case "settings":
        return <Settings defaultTab={settingsTab} />
      default:
        return <Dashboard />
    }
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
