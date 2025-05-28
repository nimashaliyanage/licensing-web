import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function Security() {
  return (
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
}
