import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import OtherInfo from "./OtherInfo"
import { X } from "lucide-react"

export default function NewSubscription() {
  const [orderLines, setOrderLines] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")
  const [selectedPaymentTerms, setSelectedPaymentTerms] = useState("")
  const [selectedExpiration, setSelectedExpiration] = useState("")
  const [selectedPriceList, setSelectedPriceList] = useState("")
  const [optionalProducts, setOptionalProducts] = useState([])
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
  })

  const addProduct = () => {
    setOrderLines([
      ...orderLines,
      {
        id: Date.now(),
        product: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        taxes: "",
        discount: "",
        amount: "",
      },
    ])
  }

  const addOptionalProduct = () => {
    setOptionalProducts([
      ...optionalProducts,
      {
        id: Date.now(),
        product: "",
        description: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        discount: "",
      },
    ])
  }

  const handleSendEmail = () => {
    // Handle sending email here
    console.log("Sending email:", emailData)
    setShowEmailDialog(false)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">New Subscription</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium mb-2">Customer</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Customer 1</SelectItem>
                <SelectItem value="2">Customer 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium mb-2">Recurring Plan</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly" onClick={() => setSelectedPlan("monthly")}>Monthly</SelectItem>
                <SelectItem value="quarterly" onClick={() => setSelectedPlan("Quarterly")}>quarterly</SelectItem>
                <SelectItem value="yearly" onClick={() => setSelectedPlan("Yearly")}>yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium mb-2">Payment Terms</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select payment terms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate" onClick={() => setSelectedPaymentTerms("immediate")}>Immediate</SelectItem>
                <SelectItem value="net15" onClick={() => setSelectedPaymentTerms("net15")}>Net 15</SelectItem>
                <SelectItem value="net30" onClick={() => setSelectedPaymentTerms("net30")}>Net 30</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium mb-2">Expiration</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select expiration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month" onClick={() => setSelectedExpiration("1month")}>1 Month</SelectItem>
                <SelectItem value="3months" onClick={() => setSelectedExpiration("3months")}>3 Months</SelectItem>
                <SelectItem value="6months" onClick={() => setSelectedExpiration("6months")}>6 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium mb-2">Price List</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select price list" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard" onClick={() => setSelectedPriceList("standard")}>Standard</SelectItem>
                <SelectItem value="premium" onClick={() => setSelectedPriceList("premium")}>Premium</SelectItem>
                <SelectItem value="enterprise" onClick={() => setSelectedPriceList("enterprise")}>Enterprise</SelectItem>
                </SelectContent>              
            </Select>
          </div>
        </div>
      </div>

      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send</DialogTitle>
            <DialogDescription>
              Send this quotation to the customer.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <Select
                value={emailData.to}
                onValueChange={(value) => setEmailData({ ...emailData, to: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select recipient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer1@example.com">Customer 1</SelectItem>
                  <SelectItem value="customer2@example.com">Customer 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input
                value={emailData.subject}
                onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                placeholder="Enter email subject"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <div className="space-y-4 rounded-md border p-4">
                <p>Hello,</p>
                <p>Your quotation S0002 amounting in 0.00 Rs is ready for review.</p>
                <p>Mike</p>
                <div className="mt-4 flex items-center space-x-2 rounded-md bg-muted p-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Quotation S0002.pdf</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEmailDialog(false)}>
              Discard
            </Button>
            <Button onClick={handleSendEmail}>Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="orderLines" className="w-full">
        <TabsList>
          <TabsTrigger value="orderLines">Order Lines</TabsTrigger>
          <TabsTrigger value="otherInfo">Other Info</TabsTrigger>
        </TabsList>

        <TabsContent value="orderLines" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-black text-white">
                    <tr>
                      <th className="text-left p-4 font-medium">Product</th>
                      <th className="text-left p-4 font-medium">Price</th>
                      <th className="text-left p-4 font-medium">Disc. %</th>
                      <th className="text-left p-4 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderLines.map((line) => (
                      <tr key={line.id} className="border-b">
                        <td className="p-4">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="product1" onClick={() => setSelectedProduct("product1")}>Product 1</SelectItem>
                              <SelectItem value="product2" onClick={() => setSelectedProduct("product2")}>Product 2</SelectItem>
                              <SelectItem value="product3" onClick={() => setSelectedProduct("product3")}>Product 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="p-4">
                          <Input type="number" className="w-20" />
                        </td>
                        <td className="p-4">
                          <Input type="number" className="w-28" />
                        </td>
                        <td className="p-4">
                          <Input type="number" className="w-20" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <Button onClick={addProduct}>+ Add Product</Button>
        </TabsContent>


        <TabsContent value="otherInfo">
          <Card>
            <CardContent>
              <OtherInfo />
              <div className="mt-4 justify-end flex">
                <Button variant="default" onClick={() => setShowEmailDialog(true)}>Send</Button>
                <Button variant="outline" onClick={() => window.print()} className="ml-2">Print</Button>
                <Button variant="outline" className="ml-2">Confirm</Button>
                <Button variant="destructive" className="ml-2">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 