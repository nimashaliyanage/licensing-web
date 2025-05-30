import { Card } from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Checkbox } from "./ui/checkbox"

export default function OtherInfo() {
  return (
    <div className="space-y-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SALES Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">SALES</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Salesperson</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select salesperson" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Salesperson 1</SelectItem>
                  <SelectItem value="2">Salesperson 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Sales Team</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sales team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Team 1</SelectItem>
                  <SelectItem value="2">Team 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="online-signature" />
              <label htmlFor="online-signature" className="text-sm font-medium">
                Online signature?
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="online-payment" />
              <label htmlFor="online-payment" className="text-sm font-medium">
                Online payment?
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Customer Reference</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select reference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Reference 1</SelectItem>
                  <SelectItem value="2">Reference 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tags</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Tag 1</SelectItem>
                  <SelectItem value="2">Tag 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* INVOICING Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">INVOICING</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Fiscal Position?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Position 1</SelectItem>
                  <SelectItem value="2">Position 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Project 1</SelectItem>
                  <SelectItem value="2">Project 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* DELIVERY Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">DELIVERY</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Warehouse</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select warehouse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Warehouse 1</SelectItem>
                  <SelectItem value="2">Warehouse 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Incoterm?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select incoterm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Incoterm 1</SelectItem>
                  <SelectItem value="2">Incoterm 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Incoterm Location</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Location 1</SelectItem>
                  <SelectItem value="2">Location 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Shipping Policy?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Policy 1</SelectItem>
                  <SelectItem value="2">Policy 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Delivery Date?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Date 1</SelectItem>
                  <SelectItem value="2">Date 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* TRACKING Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">TRACKING</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Source?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Source 1</SelectItem>
                  <SelectItem value="2">Source 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Medium?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select medium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Medium 1</SelectItem>
                  <SelectItem value="2">Medium 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Source Document?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select document" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Document 1</SelectItem>
                  <SelectItem value="2">Document 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Opportunity</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select opportunity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Opportunity 1</SelectItem>
                  <SelectItem value="2">Opportunity 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Campaign?</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Campaign 1</SelectItem>
                  <SelectItem value="2">Campaign 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 