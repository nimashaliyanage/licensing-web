import { useState } from "react"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
import ForgotPasswordPage from "./ForgotPasswordPage"

export default function AuthContainer({ onAuthSuccess }) {
  const [currentPage, setCurrentPage] = useState("login") // "login", "signup", "forgot-password"

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleLogin = (formData) => {
    // Handle login logic
    console.log("Login:", formData)
    // Simulate successful login
    if (onAuthSuccess) {
      onAuthSuccess()
    }
  }

  const handleSignup = (formData) => {
    // Handle signup logic
    console.log("Signup:", formData)
    // After successful signup, redirect to login or dashboard
    setCurrentPage("login")
  }

  const handleResetPassword = (formData) => {
    // Handle password reset logic
    console.log("Reset Password:", formData)
    // After successful reset, redirect to login
    setCurrentPage("login")
  }

  switch (currentPage) {
    case "signup":
      return <SignupPage onNavigate={handleNavigation} onSignup={handleSignup} />
    case "forgot-password":
      return <ForgotPasswordPage onNavigate={handleNavigation} onResetPassword={handleResetPassword} />
    default:
      return <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
  }
}
