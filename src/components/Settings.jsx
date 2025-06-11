"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Bell, AlertTriangle, CheckCircle, Info, X, Search } from "lucide-react"
import { useState } from "react"

export default function Settings({ defaultTab = "general" }) {
  const [allNotifications] = useState([
    {
      id: 1,
      type: "warning",
      title: "License Expiring Soon",
      message: "PhotoEditor Pro license for John Doe expires in 3 days",
      time: "2 hours ago",
      date: "2024-01-15",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Payment Received",
      message: "Payment of $299 received from Jane Smith",
      time: "4 hours ago",
      date: "2024-01-15",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New Customer Registration",
      message: "Bob Johnson has registered as a new customer",
      time: "6 hours ago",
      date: "2024-01-15",
      read: true,
    },
    {
      id: 4,
      type: "warning",
      title: "Security Alert",
      message: "Multiple login attempts detected for license LIC-001",
      time: "1 day ago",
      date: "2024-01-14",
      read: false,
    },
    {
      id: 5,
      type: "success",
      title: "License Activated",
      message: "VideoSuite license successfully activated for Alice Brown",
      time: "2 days ago",
      date: "2024-01-13",
      read: true,
    },
    {
      id: 6,
      type: "warning",
      title: "License Violation Detected",
      message: "Unauthorized usage detected for AudioMaster license",
      time: "3 days ago",
      date: "2024-01-12",
      read: true,
    },
    {
      id: 7,
      type: "info",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur on January 20th",
      time: "1 week ago",
      date: "2024-01-08",
      read: true,
    },
    {
      id: 8,
      type: "success",
      title: "Bulk License Generation",
      message: "Successfully generated 50 licenses for Enterprise customer",
      time: "1 week ago",
      date: "2024-01-08",
      read: true,
    },
  ])

  const [filterType, setFilterType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  const filteredNotifications = allNotifications.filter((notification) => {
    const matchesType = filterType === "all" || notification.type === filterType
    const matchesSearch =
      searchTerm === "" ||
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Platform Settings</h3>
        <p className="text-sm text-muted-foreground">Configure your licensing platform preferences</p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
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
          {/* Notification Settings */}

          {/* All Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                All Notifications
              </CardTitle>
              <CardDescription>View and manage all your notifications</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search notifications..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filterType === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={filterType === "warning" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("warning")}
                  >
                    Warnings
                  </Button>
                  <Button
                    variant={filterType === "success" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("success")}
                  >
                    Success
                  </Button>
                  <Button
                    variant={filterType === "info" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("info")}
                  >
                    Info
                  </Button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p>No notifications found</p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border ${
                        !notification.read ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              {!notification.read && (
                                <Badge variant="destructive" className="text-xs">
                                  New
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <p className="text-xs text-gray-400">{notification.time}</p>
                              <p className="text-xs text-gray-400">{notification.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-xs">
                                Mark as read
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-200">
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bulk Actions */}
              {filteredNotifications.length > 0 && (
                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    {filteredNotifications.filter((n) => !n.read).length} unread notifications
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Mark all as read
                    </Button>
                    <Button variant="outline" size="sm">
                      Clear all
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
