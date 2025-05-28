"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Key,
  Users,
  Package,
  Shield,
  TrendingUp,
  Activity,
  Plus,
  Search,
  Filter,
  Download,
  Settings,
  Bell,
  Menu,
  X,
} from "lucide-react"

// Mock data
const mockStats = {
  totalLicenses: 15420,
  activeLicenses: 12350,
  revenue: 245680,
  customers: 3420,
}

const mockLicenses = [
  {
    id: "LIC-001",
    product: "PhotoEditor Pro",
    customer: "John Doe",
    type: "Perpetual",
    status: "Active",
    created: "2024-01-15",
  },
  {
    id: "LIC-002",
    product: "VideoSuite",
    customer: "Jane Smith",
    type: "Subscription",
    status: "Active",
    created: "2024-01-14",
  },
  {
    id: "LIC-003",
    product: "AudioMaster",
    customer: "Bob Johnson",
    type: "Trial",
    status: "Expired",
    created: "2024-01-10",
  },
  {
    id: "LIC-004",
    product: "PhotoEditor Pro",
    customer: "Alice Brown",
    type: "Seat-based",
    status: "Active",
    created: "2024-01-12",
  },
]

const mockProducts = [
  { id: "PROD-001", name: "PhotoEditor Pro", version: "2.1.0", licenses: 5420, revenue: 108400 },
  { id: "PROD-002", name: "VideoSuite", version: "1.5.2", licenses: 3200, revenue: 96000 },
  { id: "PROD-003", name: "AudioMaster", version: "3.0.1", licenses: 2800, revenue: 41200 },
]

const mockCustomers = [
  { id: "CUST-001", name: "John Doe", email: "john@example.com", licenses: 3, revenue: 450, status: "Active" },
  { id: "CUST-002", name: "Jane Smith", email: "jane@example.com", licenses: 1, revenue: 299, status: "Active" },
  { id: "CUST-003", name: "Bob Johnson", email: "bob@example.com", licenses: 2, revenue: 0, status: "Trial" },
]

export default function LicensingPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const Sidebar = () => (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">LicenseHub</h1>
        <Button variant="ghost" size="sm" className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="mt-6">
        <div className="px-6 space-y-2">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("dashboard")}
          >
            <BarChart3 className="mr-3 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "licenses" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("licenses")}
          >
            <Key className="mr-3 h-4 w-4" />
            License Management
          </Button>
          <Button
            variant={activeTab === "products" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("products")}
          >
            <Package className="mr-3 h-4 w-4" />
            Products
          </Button>
          <Button
            variant={activeTab === "customers" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("customers")}
          >
            <Users className="mr-3 h-4 w-4" />
            Customers
          </Button>
          <Button
            variant={activeTab === "analytics" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("analytics")}
          >
            <TrendingUp className="mr-3 h-4 w-4" />
            Analytics
          </Button>
          <Button
            variant={activeTab === "security" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("security")}
          >
            <Shield className="mr-3 h-4 w-4" />
            Security
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className="w-full justify-start text-white hover:bg-gray-700"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </div>
      </nav>
    </div>
  )

  const Header = () => (
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
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
        </div>
      </div>
    </header>
  )

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Licenses</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalLicenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Licenses</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.activeLicenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockStats.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.customers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent License Activity</CardTitle>
            <CardDescription>Latest license activations and validations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLicenses.slice(0, 3).map((license) => (
                <div key={license.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{license.id}</p>
                    <p className="text-sm text-muted-foreground">{license.product}</p>
                  </div>
                  <Badge variant={license.status === "Active" ? "default" : "secondary"}>{license.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best performing products by license count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">v{product.version}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.licenses}</p>
                    <p className="text-sm text-muted-foreground">licenses</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const LicenseManagement = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">License Management</h3>
          <p className="text-sm text-muted-foreground">Generate, activate, and manage software licenses</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate License
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Licenses</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
          <TabsTrigger value="trial">Trial</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search licenses..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left p-4 font-medium">License ID</th>
                      <th className="text-left p-4 font-medium">Product</th>
                      <th className="text-left p-4 font-medium">Customer</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Created</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLicenses.map((license) => (
                      <tr key={license.id} className="border-b">
                        <td className="p-4 font-mono text-sm">{license.id}</td>
                        <td className="p-4">{license.product}</td>
                        <td className="p-4">{license.customer}</td>
                        <td className="p-4">
                          <Badge variant="outline">{license.type}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant={
                              license.status === "Active"
                                ? "default"
                                : license.status === "Expired"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {license.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{license.created}</td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const ProductManagement = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Product Management</h3>
          <p className="text-sm text-muted-foreground">Manage your software products and versions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <Badge variant="outline">v{product.version}</Badge>
              </div>
              <CardDescription>Product ID: {product.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Licenses</span>
                  <span className="font-medium">{product.licenses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-medium">${product.revenue.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Versions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const CustomerManagement = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Customer Management</h3>
          <p className="text-sm text-muted-foreground">Manage customer accounts and license assignments</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left p-4 font-medium">Customer ID</th>
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Email</th>
                  <th className="text-left p-4 font-medium">Licenses</th>
                  <th className="text-left p-4 font-medium">Revenue</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="p-4 font-mono text-sm">{customer.id}</td>
                    <td className="p-4">{customer.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{customer.email}</td>
                    <td className="p-4">{customer.licenses}</td>
                    <td className="p-4">${customer.revenue}</td>
                    <td className="p-4">
                      <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const Analytics = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Analytics & Reporting</h3>
        <p className="text-sm text-muted-foreground">Track license usage, revenue, and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>License Activation Trends</CardTitle>
            <CardDescription>Monthly license activations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-muted-foreground">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Product</CardTitle>
            <CardDescription>Revenue breakdown by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-muted-foreground">Pie chart would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>License usage by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-muted-foreground">World map would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trial Conversion Rate</CardTitle>
            <CardDescription>Trial to paid license conversion metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Trial Licenses</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Converted to Paid</span>
                <span className="font-medium">456</span>
              </div>
              <div className="flex justify-between">
                <span>Conversion Rate</span>
                <span className="font-medium text-green-600">37%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const Security = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security & Anti-Piracy</h3>
        <p className="text-sm text-muted-foreground">Monitor and protect against license violations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Alerts</CardTitle>
            <CardDescription>Recent security events and violations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-red-800">Multiple activation attempts</p>
                  <p className="text-sm text-red-600">License LIC-001 - 5 attempts from different IPs</p>
                </div>
                <Badge variant="destructive">High</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium text-yellow-800">Unusual geographic activity</p>
                  <p className="text-sm text-yellow-600">License LIC-002 - Activated from new country</p>
                </div>
                <Badge variant="secondary">Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Fingerprinting</CardTitle>
            <CardDescription>Hardware-based license validation settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Enable Device Fingerprinting</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Max Devices per License</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hardware Change Tolerance</span>
                <span className="font-medium">Medium</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>IP Restrictions</CardTitle>
            <CardDescription>Geographic and IP-based access control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Blocked Countries</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Allowed IP Ranges</span>
                <span className="font-medium">12</span>
              </div>
              <Button variant="outline" size="sm">
                Manage Rules
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tamper Detection</CardTitle>
            <CardDescription>Monitor for license tampering attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Detection Sensitivity</span>
                <span className="font-medium">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Auto-Revoke on Tamper</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Alerts Sent</span>
                <span className="font-medium">23</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const Settings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Platform Settings</h3>
        <p className="text-sm text-muted-foreground">Configure your licensing platform preferences</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="api">API & SDK</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Basic company details for license generation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <Input defaultValue="Your Software Company" />
                </div>
                <div>
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input defaultValue="support@yourcompany.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>License Defaults</CardTitle>
              <CardDescription>Default settings for new licenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Default License Type</label>
                  <Input defaultValue="Perpetual" />
                </div>
                <div>
                  <label className="text-sm font-medium">Trial Period (days)</label>
                  <Input defaultValue="30" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Manage API keys and integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">API Key</label>
                <div className="flex gap-2">
                  <Input value="sk_live_..." readOnly />
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Webhook URL</label>
                <Input placeholder="https://yourapp.com/webhooks/license" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SDK Downloads</CardTitle>
              <CardDescription>Download SDKs for popular programming languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <span className="font-medium">Python SDK</span>
                  <span className="text-sm text-muted-foreground">v2.1.0</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <span className="font-medium">C# SDK</span>
                  <span className="text-sm text-muted-foreground">v1.8.3</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <span className="font-medium">Java SDK</span>
                  <span className="text-sm text-muted-foreground">v1.5.2</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateway</CardTitle>
              <CardDescription>Configure payment processing for subscriptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Payment Provider</label>
                <Input defaultValue="Stripe" />
              </div>
              <div>
                <label className="text-sm font-medium">Currency</label>
                <Input defaultValue="USD" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure when to send email alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>License Activations</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Security Alerts</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Failures</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "licenses":
        return <LicenseManagement />
      case "products":
        return <ProductManagement />
      case "customers":
        return <CustomerManagement />
      case "analytics":
        return <Analytics />
      case "security":
        return <Security />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">{renderContent()}</main>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
