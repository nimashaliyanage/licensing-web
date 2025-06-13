import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Badge } from "./ui/badge"
import { Camera, Mail, Phone, MapPin, Globe, Building, Calendar, CheckCircle } from "lucide-react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    jobTitle: "Product Manager",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.alexjohnson.com",
    company: "Tech Innovations Inc.",
    joinDate: "January 2022",
    bio: "Product manager with 5+ years of experience in SaaS and enterprise software. Passionate about creating intuitive user experiences and driving product growth.",
    skills: ["Product Strategy", "User Research", "Agile Methodology", "Data Analysis", "Team Leadership"],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Here you would typically save the data to your backend
    console.log("Saving profile data:", profileData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">My Profile</h3>
          <p className="text-sm text-muted-foreground">Manage your personal information</p>
        </div>
        {isEditing ? (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-4">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-medium">
                {profileData.name.charAt(0)}
              </div>
              {isEditing && (
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer">
                  <Camera className="h-5 w-5 text-gray-600" />
                </div>
              )}
            </div>
            <CardTitle>{profileData.name}</CardTitle>
            <CardDescription>{profileData.jobTitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{profileData.website}</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{profileData.company}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Joined {profileData.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input name="name" value={profileData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Job Title</label>
                    <Input name="jobTitle" value={profileData.jobTitle} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input name="email" type="email" value={profileData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input name="phone" value={profileData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <Input name="location" value={profileData.location} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <Input name="website" value={profileData.website} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <Input name="company" value={profileData.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Join Date</label>
                    <Input name="joinDate" value={profileData.joinDate} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <Textarea name="bio" value={profileData.bio} onChange={handleChange} rows={4} />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">About Me</h4>
                  <p className="text-gray-700">{profileData.bio}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Account Status</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700 font-medium">Verified Account</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* License History */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>License History</CardTitle>
            <CardDescription>Your software license purchase history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left p-4 font-medium">License ID</th>
                    <th className="text-left p-4 font-medium">Product</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Purchase Date</th>
                    <th className="text-left p-4 font-medium">Expiry Date</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-mono text-sm">LIC-001-A23</td>
                    <td className="p-4">PhotoEditor Pro</td>
                    <td className="p-4">Subscription</td>
                    <td className="p-4">Jan 15, 2024</td>
                    <td className="p-4">Jan 15, 2025</td>
                    <td className="p-4">
                      <Badge variant="default">Active</Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-mono text-sm">LIC-002-B45</td>
                    <td className="p-4">VideoSuite</td>
                    <td className="p-4">Perpetual</td>
                    <td className="p-4">Nov 10, 2023</td>
                    <td className="p-4">N/A</td>
                    <td className="p-4">
                      <Badge variant="default">Active</Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-mono text-sm">LIC-003-C67</td>
                    <td className="p-4">AudioMaster</td>
                    <td className="p-4">Trial</td>
                    <td className="p-4">Dec 5, 2023</td>
                    <td className="p-4">Jan 5, 2024</td>
                    <td className="p-4">
                      <Badge variant="destructive">Expired</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
