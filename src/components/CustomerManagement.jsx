import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Plus } from "lucide-react"
import { mockCustomers } from "../data/mockData"
import CustomerForm from "./CustomerForm"
import CustomerDetailsModal from "./CustomerDetailsModal"

export default function CustomerManagement() {

  const [customers, setCustomers] = useState(mockCustomers)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState(null)

  const handleAddCustomer = (newCustomer) => {
    // Generate a new customer ID
    const newId = `CUST-${String(customers.length + 1).padStart(3, "0")}`

    // Create the new customer object with default values for missing fields
    const customerToAdd = {
      id: newId,
      name: newCustomer.name,
      email: newCustomer.email,
      phone: 0,
      revenue: 0,
      status: "Active",
    }

    // Add the new customer to the list
    setCustomers([...customers, customerToAdd])
  }

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer)
    setIsDetailsOpen(true)
  }

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer)
    setIsFormOpen(true)
  }

  const handleEditFromDetails = () => {
    // Use the currently selected customer for editing
    if (selectedCustomer) {
      setEditingCustomer(selectedCustomer)
      setIsDetailsOpen(false) // Close details modal
      setIsFormOpen(true) // Open edit form
    }
  }

  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? { ...customer, ...updatedCustomer } : customer,
      ),
    )
  }

  const handleCustomerSubmit = (customerData) => {
    if (editingCustomer) {
      handleUpdateCustomer({ ...editingCustomer, ...customerData })
    } else {
      handleAddCustomer(customerData)
    }
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingCustomer(null)
  }



  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Customer Management</h3>
          <p className="text-sm text-muted-foreground">Manage customer accounts and license assignments</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
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
                  <th className="text-left p-4 font-medium">Phone</th>
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
                    <td className="p-4">{customer.phone}</td>
                    <td className="p-4">${customer.revenue}</td>
                    <td className="p-4">
                      <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="secondary" size="sm" onClick={() => handleViewCustomer(customer)}>
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
      <CustomerForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddCustomer}
      />
      <CustomerDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        customer={selectedCustomer}
        onEdit={handleEditFromDetails}
      />
    </div>
  )
}
