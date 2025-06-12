import { Button } from "./ui/button"
import { BarChart3, Key, Users, Package, Shield, TrendingUp, Settings, X, FileText } from "lucide-react"

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
        <h1 className="text-[25px] text-[#ffffff] font-bold">License<span className="text-[#2563eb]">H</span>ub</h1>
        <Button variant="ghost" size="sm" className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="mt-6 justify-start items-start flex flex-col h-full">
        <div className="px-6 space-y-4">
          <Button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "dashboard"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <BarChart3 className="mr-3 h-4 w-4" />
            Dashboard
          </Button>

          <Button
            onClick={() => setActiveTab("subscription")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "subscription"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <Key className="mr-3 h-4 w-4" />
            Subscription
          </Button>


          <Button
            onClick={() => setActiveTab("products")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "products"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <Package className="mr-3 h-4 w-4" />
            Products
          </Button>

          <Button
            onClick={() => setActiveTab("customers")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "customers"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <Users className="mr-3 h-4 w-4" />
            Customers
          </Button>

          <Button
           onClick={() => setActiveTab("invoice")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "invoice"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <FileText className="mr-3 h-4 w-4" />
            Invoice
          </Button>

          <Button
            onClick={() => setActiveTab("settings")}
            className={`w-full justify-start hover:bg-[#606060] ${activeTab === "settings"
              ? "bg-blue-600 text-white"
              : "text-white hover:bg-[#505050]"
              }`}
          >
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </div>
      </nav>
    </div>
  )
}
