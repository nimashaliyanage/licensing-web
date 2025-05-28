import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Plus } from "lucide-react"
import { mockCustomers } from "../data/mockData"

export default function CustomerManagement() {
  return (
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
}
