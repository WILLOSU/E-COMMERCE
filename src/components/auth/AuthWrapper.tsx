"use client"

import { useEffect, useState } from 'react'
import LoginComponent from './App'  // Ajuste o caminho conforme necessário

interface AuthWrapperProps {
  children: React.ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Verifique se o usuário está logado
    const checkLoginStatus = () => {
      const token = localStorage.getItem('userToken')
      setIsLoggedIn(!!token)
    }

    checkLoginStatus()
  }, [])

  if (!isLoggedIn) {
    return <LoginComponent onLoginSuccess={() => setIsLoggedIn(true)} />
  }

  return <>{children}</>
}