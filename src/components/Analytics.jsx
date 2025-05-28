import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Analytics() {
  return (
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
}
