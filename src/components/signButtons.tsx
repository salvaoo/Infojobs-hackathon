'use client'

import { signIn, signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export const LoginButton = () => {
   return (
      <Button onClick={() => signIn()} size="sm">
         Acceder
      </Button>
   )
}

export const LogoutButton = () => {
   return (
      <Button onClick={() => signOut()} size="sm" variant="ghost">
         Cerrar sesión
      </Button>
   )
}