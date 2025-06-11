import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./ui/modal"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function CustomerForm({ isOpen, onClose, onSubmit }) {
    const [customerType, setCustomerType] = useState("person")
    const [activeTab, setActiveTab] = useState("contacts")
    const [formData, setFormData] = useState({
        // Basic info
        name: "",
        email: "",
        phone: "",
        address: "",
        jobPosition: "",
        website: "",

        // Contacts tab
        contactName: "",
        title: "",
        contactJobPosition: "",
        contactEmail: "",
        contactPhone: "",
        contactMobile: "",
        note: "",

        // Sales & Purchases tab
        salesperson: "",
        paymentTerms: "",
        paymentMethod: "",
        barcode: "",
        buyer: "",
        purchasePaymentTerms: "",
        purchasePaymentMethod: "",
        receiptReminder: "",
        supplierCurrency: "",
        fiscalInformation: "",

        // Accounting tab
        banks: "",
        accountReceivable: "",
        accountPayable: "",
        autoPostBills: "",
        followUpStatus: "No action needed",
        reminders: "",
        nextReminder: "",
        responsible: "",
        invoiceSending: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
            <form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div className="grid grid-cols-2 ">
                        <h2 className="text-2xl font-bold">New Customer</h2>
                        <div className="flex items-center gap-8 items-end justify-end">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${customerType === "person" ? "border-black" : "border-gray-300"}`}
                                    onClick={() => setCustomerType("person")}
                                >
                                    {customerType === "person" && <div className="w-3 h-3 rounded-full bg-black"></div>}
                                </div>
                                <span className="font-medium">Person</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${customerType === "company" ? "border-black" : "border-gray-300"}`}
                                    onClick={() => setCustomerType("company")}
                                >
                                    {customerType === "company" && <div className="w-3 h-3 rounded-full bg-black"></div>}
                                </div>
                                <span className="font-medium">Company</span>
                            </div>
                        </div>

                    </div>

                </ModalHeader>

                <ModalBody className="space-y-6">
                    {/* Basic Information Fields */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone
                            </label>
                            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-1">
                                Address
                            </label>
                            <Input id="address" name="address" value={formData.address} onChange={handleChange} className="w-full" />
                        </div>

                        <div>
                            <label htmlFor="jobPosition" className="block text-sm font-medium mb-1">
                                Job Position
                            </label>
                            <Input
                                id="jobPosition"
                                name="jobPosition"
                                value={formData.jobPosition}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="revenue" className="block text-sm font-medium mb-1">
                                Revenue
                            </label>
                            <Input
                                id="revenue"
                                name="revenue"
                                value={formData.revenue}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="website" className="block text-sm font-medium mb-1">
                                Website
                            </label>
                            <Input id="website" name="website" value={formData.website} onChange={handleChange} className="w-full" />
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-4 pt-8">
                        <Button
                            type="button"
                            variant={activeTab === "contacts" ? "default" : "outline"}
                            className={`min-w-[180px] ${activeTab === "contacts" ? "bg-black text-white" : ""}`}
                            onClick={() => setActiveTab("contacts")}
                        >
                            Contacts
                        </Button>
                        <Button
                            type="button"
                            variant={activeTab === "sales" ? "default" : "outline"}
                            className={`min-w-[180px] ${activeTab === "sales" ? "bg-black text-white" : ""}`}
                            onClick={() => setActiveTab("sales")}
                        >
                            Sales & Purchases
                        </Button>
                        <Button
                            type="button"
                            variant={activeTab === "accounting" ? "default" : "outline"}
                            className={`min-w-[180px] ${activeTab === "accounting" ? "bg-black text-white" : ""}`}
                            onClick={() => setActiveTab("accounting")}
                        >
                            Accounting
                        </Button>
                    </div>

                    {/* Tab Content */}
                    <div className="pt-6">
                        {/* Contacts Tab */}
                        {activeTab === "contacts" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="contactName" className="block text-sm font-medium mb-1">
                                        Contact Name
                                    </label>
                                    <Input id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <Input
                                        id="contactEmail"
                                        name="contactEmail"
                                        type="email"
                                        value={formData.contactEmail}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                                        Title
                                    </label>
                                    <Select value={formData.title} onValueChange={(value) => handleSelectChange("title", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select title" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mr">Mr.</SelectItem>
                                            <SelectItem value="mrs">Mrs.</SelectItem>
                                            <SelectItem value="ms">Ms.</SelectItem>
                                            <SelectItem value="dr">Dr.</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label htmlFor="contactPhone" className="block text-sm font-medium mb-1">
                                        Phone
                                    </label>
                                    <Input id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="contactJobPosition" className="block text-sm font-medium mb-1">
                                        Job Position
                                    </label>
                                    <Input
                                        id="contactJobPosition"
                                        name="contactJobPosition"
                                        value={formData.contactJobPosition}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMobile" className="block text-sm font-medium mb-1">
                                        Mobile
                                    </label>
                                    <Input
                                        id="contactMobile"
                                        name="contactMobile"
                                        value={formData.contactMobile}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="note" className="block text-sm font-medium mb-1">
                                        Note
                                    </label>
                                    <Textarea id="note" name="note" value={formData.note} onChange={handleChange} rows={5} />
                                </div>
                            </div>
                        )}

                        {/* Sales & Purchases Tab */}
                        {activeTab === "sales" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div>
                                    <h3 className="font-medium text-lg mb-4">Sales</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="salesperson" className="block text-sm font-medium mb-1">
                                                Salesperson
                                            </label>
                                            <Input id="salesperson" name="salesperson" value={formData.salesperson} onChange={handleChange} />
                                        </div>

                                        <div>
                                            <label htmlFor="paymentTerms" className="block text-sm font-medium mb-1">
                                                Payment Terms
                                            </label>
                                            <Select
                                                value={formData.paymentTerms}
                                                onValueChange={(value) => handleSelectChange("paymentTerms", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select payment terms" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="immediate">Immediate Payment</SelectItem>
                                                    <SelectItem value="15days">15 Days</SelectItem>
                                                    <SelectItem value="30days">30 Days</SelectItem>
                                                    <SelectItem value="60days">60 Days</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="paymentMethod" className="block text-sm font-medium mb-1">
                                                Payment Method
                                            </label>
                                            <Select
                                                value={formData.paymentMethod}
                                                onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select payment method" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="bank">Bank Transfer</SelectItem>
                                                    <SelectItem value="cash">Cash</SelectItem>
                                                    <SelectItem value="check">Check</SelectItem>
                                                    <SelectItem value="card">Credit Card</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium text-lg mb-4">Purchase</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="buyer" className="block text-sm font-medium mb-1">
                                                Buyer
                                            </label>
                                            <Select value={formData.buyer} onValueChange={(value) => handleSelectChange("buyer", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select buyer" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="john">John Doe</SelectItem>
                                                    <SelectItem value="jane">Jane Smith</SelectItem>
                                                    <SelectItem value="bob">Bob Johnson</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="purchasePaymentTerms" className="block text-sm font-medium mb-1">
                                                Payment Terms
                                            </label>
                                            <Select
                                                value={formData.purchasePaymentTerms}
                                                onValueChange={(value) => handleSelectChange("purchasePaymentTerms", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select payment terms" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="immediate">Immediate Payment</SelectItem>
                                                    <SelectItem value="15days">15 Days</SelectItem>
                                                    <SelectItem value="30days">30 Days</SelectItem>
                                                    <SelectItem value="60days">60 Days</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="purchasePaymentMethod" className="block text-sm font-medium mb-1">
                                                Payment Method
                                            </label>
                                            <Select
                                                value={formData.purchasePaymentMethod}
                                                onValueChange={(value) => handleSelectChange("purchasePaymentMethod", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select payment method" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="bank">Bank Transfer</SelectItem>
                                                    <SelectItem value="cash">Cash</SelectItem>
                                                    <SelectItem value="check">Check</SelectItem>
                                                    <SelectItem value="card">Credit Card</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="receiptReminder" className="block text-sm font-medium mb-1">
                                                Receipt Reminder
                                            </label>
                                            <Select
                                                value={formData.receiptReminder}
                                                onValueChange={(value) => handleSelectChange("receiptReminder", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select reminder" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">None</SelectItem>
                                                    <SelectItem value="1day">1 Day Before</SelectItem>
                                                    <SelectItem value="3days">3 Days Before</SelectItem>
                                                    <SelectItem value="1week">1 Week Before</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="supplierCurrency" className="block text-sm font-medium mb-1">
                                                Supplier Currency
                                            </label>
                                            <Select
                                                value={formData.supplierCurrency}
                                                onValueChange={(value) => handleSelectChange("supplierCurrency", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usd">USD</SelectItem>
                                                    <SelectItem value="eur">EUR</SelectItem>
                                                    <SelectItem value="gbp">GBP</SelectItem>
                                                    <SelectItem value="jpy">JPY</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Accounting Tab */}
                        {activeTab === "accounting" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div>
                                    <h3 className="font-medium text-lg mb-4">General</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="banks" className="block text-sm font-medium mb-1">
                                                Banks
                                            </label>
                                            <Select value={formData.banks} onValueChange={(value) => handleSelectChange("banks", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select bank" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="bank1">Bank of America</SelectItem>
                                                    <SelectItem value="bank2">Chase</SelectItem>
                                                    <SelectItem value="bank3">Wells Fargo</SelectItem>
                                                    <SelectItem value="bank4">Citibank</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="accountReceivable" className="block text-sm font-medium mb-1">
                                                Account Receivable
                                            </label>
                                            <Select
                                                value={formData.accountReceivable}
                                                onValueChange={(value) => handleSelectChange("accountReceivable", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select account" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="acc1">Account 1</SelectItem>
                                                    <SelectItem value="acc2">Account 2</SelectItem>
                                                    <SelectItem value="acc3">Account 3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="accountPayable" className="block text-sm font-medium mb-1">
                                                Account Payable
                                            </label>
                                            <Select
                                                value={formData.accountPayable}
                                                onValueChange={(value) => handleSelectChange("accountPayable", value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select account" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="acc1">Account 1</SelectItem>
                                                    <SelectItem value="acc2">Account 2</SelectItem>
                                                    <SelectItem value="acc3">Account 3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label htmlFor="autoPostBills" className="block text-sm font-medium mb-1">
                                                Auto-post bills?
                                            </label>
                                            <Input
                                                id="autoPostBills"
                                                name="autoPostBills"
                                                value={formData.autoPostBills}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-medium text-lg mt-8 mb-4">Customer Invoices</h3>

                                    <div>
                                        <label htmlFor="invoiceSending" className="block text-sm font-medium mb-1">
                                            Invoice sending
                                        </label>
                                        <Select
                                            value={formData.invoiceSending}
                                            onValueChange={(value) => handleSelectChange("invoiceSending", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="email">Email</SelectItem>
                                                <SelectItem value="paper">Paper</SelectItem>
                                                <SelectItem value="both">Both</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium text-lg mb-4">Invoice Follow-ups</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="followUpStatus" className="block text-sm font-medium mb-1">
                                                Follow-up Status
                                            </label>
                                            <Input
                                                id="followUpStatus"
                                                name="followUpStatus"
                                                value={formData.followUpStatus}
                                                onChange={handleChange}
                                                placeholder="No action needed"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="reminders" className="block text-sm font-medium mb-1">
                                                Reminders
                                            </label>
                                            <Input id="reminders" name="reminders" value={formData.reminders} onChange={handleChange} />
                                        </div>

                                        <div>
                                            <label htmlFor="nextReminder" className="block text-sm font-medium mb-1">
                                                Next reminder
                                            </label>
                                            <Input
                                                id="nextReminder"
                                                name="nextReminder"
                                                value={formData.nextReminder}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="responsible" className="block text-sm font-medium mb-1">
                                                Responsible
                                            </label>
                                            <Input id="responsible" name="responsible" value={formData.responsible} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button type="button" variant="outline" onClick={onClose}>
                        Discard
                    </Button>
                    <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                        Save
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}
