import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Plus, Search, Filter, Download } from "lucide-react"
import { mockLicenses } from "../data/mockData"

export default function LicenseManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Subscription</h3>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida commodo nulla gravida sodales.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate License
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Subscription</TabsTrigger>
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
                      <th className="text-left p-4 font-medium">Number</th>
                      <th className="text-left p-4 font-medium">Sales Person</th>
                      <th className="text-left p-4 font-medium">Customer</th>
                      <th className="text-left p-4 font-medium">Next Invoice</th>
                      <th className="text-left p-4 font-medium">Recurring</th>
                      <th className="text-left p-4 font-medium">Recurring Plan</th>
                      <th className="text-left p-4 font-medium">Subscription Status</th>
                      <th className="text-left p-4 font-medium">Activities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLicenses.map((license) => (
                      <tr key={license.id} className="border-b">
                        <td className="p-4 font-mono text-sm">{license.id}</td>
                        <td className="p-4">{license.salesperson}</td>
                        <td className="p-4">{license.customer}</td>
                        <td className="p-4 text-sm text-muted-foreground">{license.nextinvoice}</td>
                        <td className="p-4">
                          <Badge variant="outline">{license.recurring}</Badge>
                        </td>
                        <td className="p-4">{license.recurringPlan}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              license.status === "Quotation"
                                ? "default"
                                : license.status === "Expired"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {license.status}
                          </Badge>
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
}
