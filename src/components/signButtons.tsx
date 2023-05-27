'use client'

import { ButtonHTMLAttributes } from "react"
import { signIn, signOut } from "next-auth/react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const LoginButton = () => {
   return (
      <Button onClick={() => signIn()} size="sm">
         Acceder
      </Button>
   )
}

interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const LogoutButton = ({ className, ...props }: LogoutButtonProps) => {
   return (
      <Button className={cn(className)} onClick={() => signOut()} size="sm" variant="ghost" {...props}>
         Cerrar sesión
      </Button>
   )
}