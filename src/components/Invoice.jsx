import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Plus, Trash2, Send, CreditCard, Mail, DollarSign, FileText, CheckCircle, Users, Key } from "lucide-react"
import { mockCustomers, mockProducts } from "../data/mockData"

export default function Invoice() {
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [invoiceItems, setInvoiceItems] = useState([
    {
      id: 1,
      product: "",
      licenseType: "",
      licenseDuration: "",
      users: 1,
      price: 0,
      total: 0,
    },
  ])
  const [paymentMethod, setPaymentMethod] = useState("")
  const [bankDetails, setBankDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  })
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    invoiceDate: new Date().toISOString().split("T")[0],
    dueDate: "",
    notes: "",
    terms: "Software license activation within 24 hours of payment confirmation",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const selectedCustomerData = mockCustomers.find((c) => c.id === selectedCustomer)

  const addInvoiceItem = () => {
    const newItem = {
      id: Date.now(),
      product: "",
      licenseType: "",
      licenseDuration: "",
      users: 1,
      price: 0,
      total: 0,
    }
    setInvoiceItems([...invoiceItems, newItem])
  }

  const removeInvoiceItem = (id) => {
    setInvoiceItems(invoiceItems.filter((item) => item.id !== id))
  }

  const updateInvoiceItem = (id, field, value) => {
    setInvoiceItems(
      invoiceItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === "users" || field === "price") {
            updatedItem.total = updatedItem.users * updatedItem.price
          }
          return updatedItem
        }
        return item
      }),
    )
  }

  const calculateSubtotal = () => {
    return invoiceItems.reduce((sum, item) => sum + item.total, 0)
  }

  const calculateDigitalTax = () => {
    return calculateSubtotal() * 0.15 // 15% digital tax/VAT
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDigitalTax()
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)

      // Simulate email sending with license keys
      setTimeout(() => {
        setEmailSent(true)
      }, 1000)
    }, 3000)
  }

  const resetForm = () => {
    setSelectedCustomer("")
    setInvoiceItems([
      {
        id: 1,
        product: "",
        licenseType: "",
        licenseDuration: "",
        users: 1,
        price: 0,
        total: 0,
      },
    ])
    setPaymentMethod("")
    setBankDetails({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
    })
    setPaymentSuccess(false)
    setEmailSent(false)
  }

  if (paymentSuccess) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Invoice #{invoiceDetails.invoiceNumber} has been processed successfully.</p>

          {emailSent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Key className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-800 font-medium">License Keys Generated</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-800">Invoice & license keys sent to {selectedCustomerData?.email}</span>
              </div>
            </div>
          )}

          <div className="space-x-4">
            <Button onClick={resetForm} className="bg-black text-white hover:bg-gray-800">
              Create New Invoice
            </Button>
            <Button variant="outline">Download PDF</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Software License Invoice</h3>
          <p className="text-sm text-muted-foreground">Create invoices for software licenses and process payments</p>
        </div>
        <Button onClick={resetForm} variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invoice Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Customer</label>
                <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a customer" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCustomers.map((customer) => (
                      <SelectItem key={customer.id} value={customer.id}>
                        {customer.name} - {customer.email}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCustomerData && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">{selectedCustomerData.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {selectedCustomerData.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{selectedCustomerData.status}</Badge>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Invoice Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Invoice Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Invoice Number</label>
                  <Input
                    value={invoiceDetails.invoiceNumber}
                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceNumber: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Invoice Date</label>
                  <Input
                    type="date"
                    value={invoiceDetails.invoiceDate}
                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Due Date</label>
                  <Input
                    type="date"
                    value={invoiceDetails.dueDate}
                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, dueDate: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Software License Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Software Licenses
              </CardTitle>
              <CardDescription>Add software products and configure license details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {invoiceItems.map((item, index) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Software Product</label>
                        <Select
                          value={item.product}
                          onValueChange={(value) => {
                            const product = mockProducts.find((p) => p.id === value)
                            updateInvoiceItem(item.id, "product", value)
                            if (product) {
                              updateInvoiceItem(item.id, "price", 99) // Default price per user
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select software" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockProducts.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name} - v{product.version}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">License Type</label>
                        <Select
                          value={item.licenseType}
                          onValueChange={(value) => updateInvoiceItem(item.id, "licenseType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select license type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="subscription">Subscription</SelectItem>
                            <SelectItem value="perpetual">Perpetual</SelectItem>
                            <SelectItem value="trial">Trial</SelectItem>
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">License Duration</label>
                        <Select
                          value={item.licenseDuration}
                          onValueChange={(value) => updateInvoiceItem(item.id, "licenseDuration", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="6-months">6 Months</SelectItem>
                            <SelectItem value="1-year">1 Year</SelectItem>
                            <SelectItem value="2-years">2 Years</SelectItem>
                            <SelectItem value="lifetime">Lifetime</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Number of Users</label>
                        <Input
                          type="number"
                          min="1"
                          value={item.users}
                          onChange={(e) => updateInvoiceItem(item.id, "users", Number.parseInt(e.target.value) || 1)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Price per User</label>
                        <Input
                          type="number"
                          step="0.01"
                          value={item.price}
                          onChange={(e) => updateInvoiceItem(item.id, "price", Number.parseFloat(e.target.value) || 0)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Total Amount</label>
                        <div className="flex items-center gap-2">
                          <Input value={`$${item.total.toFixed(2)}`} readOnly />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeInvoiceItem(item.id)}
                            disabled={invoiceItems.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* License Details Preview */}
                    {item.product && item.licenseType && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-2">License Details:</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                          <div>License Key: Will be generated</div>
                          <div>Activation ID: Auto-assigned</div>
                          <div>
                            Platform: {item.licenseType === "enterprise" ? "Multi-platform" : "Single platform"}
                          </div>
                          <div>Support: {item.licenseType === "trial" ? "Community" : "Priority"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <Button variant="outline" onClick={addInvoiceItem} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Software License
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notes and Terms */}
          <Card>
            <CardHeader>
              <CardTitle>License Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <Textarea
                  placeholder="Add any additional notes about the software licenses..."
                  value={invoiceDetails.notes}
                  onChange={(e) => setInvoiceDetails({ ...invoiceDetails, notes: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">License Terms</label>
                <Textarea
                  value={invoiceDetails.terms}
                  onChange={(e) => setInvoiceDetails({ ...invoiceDetails, terms: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Section */}
        <div className="space-y-6">
          {/* Invoice Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Invoice Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Digital Tax/VAT (15%):</span>
                  <span>${calculateDigitalTax().toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* License Summary */}
              <div className="bg-gray-50 p-3 rounded-lg mt-4">
                <h5 className="font-medium mb-2">License Summary:</h5>
                <div className="space-y-1 text-sm">
                  <div>Total Users: {invoiceItems.reduce((sum, item) => sum + item.users, 0)}</div>
                  <div>Software Products: {invoiceItems.filter((item) => item.product).length}</div>
                  <div>License Keys: Will be generated upon payment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>

              {paymentMethod === "credit-card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <Input
                      value={bankDetails.cardholderName}
                      onChange={(e) => setBankDetails({ ...bankDetails, cardholderName: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <Input
                      value={bankDetails.cardNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, cardNumber: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <Input
                        value={bankDetails.expiryDate}
                        onChange={(e) => setBankDetails({ ...bankDetails, expiryDate: e.target.value })}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <Input
                        value={bankDetails.cvv}
                        onChange={(e) => setBankDetails({ ...bankDetails, cvv: e.target.value })}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "bank-transfer" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Bank Name</label>
                    <Input
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                      placeholder="Bank of America"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Number</label>
                    <Input
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                      placeholder="1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Routing Number</label>
                    <Input
                      value={bankDetails.routingNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, routingNumber: e.target.value })}
                      placeholder="021000021"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-blue-800">You will be redirected to PayPal to complete the payment.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handlePayment}
              disabled={!selectedCustomer || !paymentMethod || calculateTotal() === 0 || isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ${calculateTotal().toFixed(2)} & Generate Licenses
                </>
              )}
            </Button>

            <Button variant="outline" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Invoice Only
            </Button>

            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
