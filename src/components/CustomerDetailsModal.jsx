"use client"

import { Modal, ModalBody, ModalFooter } from "./ui/modal"
import { Button } from "./ui/button"

export default function CustomerDetailsModal({ isOpen, onClose, customer, onEdit }) {
  if (!customer) return null

  // Mock data for demonstration - in real app, this would come from the customer object
  const customerDetails = {
    name: customer.name || "TOM HIDDLSTON",
    title: "Prince of Asgard Kingdom",
    email: customer.email || "tomhiddlston@gmail.com",
    phone: customer.phone || "+123-123-123",
    revenue: customer.revenue || "$450",
    website: "www.tomhddlstn.com",
    address: "Main Palace, Realm of Asgard",

    // Contact Details
    contactName: "Tom Hiddlston",
    contactTitle: "Product 01",
    jobPosition: "Product 01",
    contactEmail: "Product 01",
    contactPhone: "12345678",
    mobile: "Product 01",

    // Sales & Purchases
    salesperson: "Salesperson",
    paymentTerms: "Payment Terms",
    paymentMethod: "Payment Method",
    buyer: "Buyer",
    purchasePaymentTerms: "Payment Terms",
    purchasePaymentMethod: "Payment Method",
    receiptReminder: "Receipt Reminder",
    supplierCurrency: "Supplier Currency",

  }

  const handleEdit = () => {
    onClose()
    if (onEdit) {
      onEdit(customer)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-6xl">
      <ModalBody className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Customer Info Card - Black */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{customerDetails.name}</h2>
              <p className="text-lg mb-4">{customerDetails.title}</p>
              <div className="space-y-2">
                <p>{customerDetails.email}</p>
                <p>{customerDetails.phone}</p>
                <p>{customerDetails.website}</p>
                <p><span>Revenue: $</span> {customerDetails.revenue}</p>
                <p className="mt-4">{customerDetails.address}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Contact Name</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.contactName}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Title</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.contactTitle}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Job Position</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.jobPosition}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Email</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.contactEmail}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Phone</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.contactPhone}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Mobile</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.mobile}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sales & Purchases Card */}
        <div className="border border-gray-300 rounded-lg p-6">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">


            <div className="space-y-3">
              <h3 className="text-lg font-semibold mb-4">Sales & Purchases</h3>
              <div className="flex items-center">
                <span className="w-32 text-sm font-medium">Salesperson</span>
                <span className="mx-3">-</span>
                <span className="text-sm">{customerDetails.salesperson}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm font-medium">Payment Terms</span>
                <span className="mx-3">-</span>
                <span className="text-sm">{customerDetails.paymentTerms}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm font-medium">Payment Method</span>
                <span className="mx-3">-</span>
                <span className="text-sm">{customerDetails.paymentMethod}</span>
              </div>

            </div>
            <div className="space-y-3">

              <div className="pt-4">
                <div className="flex items-center">
                  <span className="w-32 text-sm font-medium">Buyer</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.buyer}</span>
                </div>
                <div className="flex items-center mt-3">
                  <span className="w-32 text-sm font-medium">Payment Terms</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.purchasePaymentTerms}</span>
                </div>
                <div className="flex items-center mt-3">
                  <span className="w-32 text-sm font-medium">Payment Method</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.purchasePaymentMethod}</span>
                </div>
                <div className="flex items-center mt-3">
                  <span className="w-32 text-sm font-medium">Receipt Reminder</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.receiptReminder}</span>
                </div>
                <div className="flex items-center mt-3">
                  <span className="w-32 text-sm font-medium">Supplier Currency</span>
                  <span className="mx-3">-</span>
                  <span className="text-sm">{customerDetails.supplierCurrency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={onClose}>
          Discard
        </Button>
        <Button className="bg-black text-white hover:bg-gray-800" onClick={handleEdit}>
          Edit
        </Button>
      </ModalFooter>
    </Modal>
  )
}
