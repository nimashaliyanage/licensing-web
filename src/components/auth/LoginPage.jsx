import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function LoginPage({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
    if (onLogin) {
      onLogin(formData)
    }
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Geometric Design */}
      <div className="flex-1 relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Top diagonal line */}
          <div className="absolute top-0 left-0 w-32 h-32 transform -rotate-45 translate-x-16 -translate-y-16">
            <div className="w-full h-2 bg-white transform rotate-45"></div>
          </div>

          {/* Bottom diagonal lines */}
          <div className="absolute bottom-0 left-0 w-48 h-48 transform rotate-45 translate-x-24 translate-y-20">
            <div className="w-full h-2 bg-white transform -rotate-45"></div>
            <div className="w-full h-2 bg-white transform -rotate-45 mt-8"></div>
            <div className="w-full h-2 bg-white transform -rotate-45 mt-8"></div>
          </div>
          
        </div>

        {/* Text Content */}
        <div className="absolute left-16 top-1/2 transform -translate-y-[300px] z-10">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Login Into
            <br />
            Your Account
          </h1>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl p-12 w-full max-w-md shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Log In</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            <div className="text-left">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("forgot-password")}
                className="text-sm text-gray-900 underline hover:text-gray-700"
              >
                Forget Password
              </button>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("signup")}
                className="text-sm text-gray-900 underline hover:text-gray-700"
              >
                Don't Have An Account?
              </button>

              <Button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
