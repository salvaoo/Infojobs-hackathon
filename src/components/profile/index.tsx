'use client'

import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ProfileProps } from "@/types/profile"
import { useRecoilState } from "recoil"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fontSans } from "@/lib/fonts"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const getProfile = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/curriculum`)
   const { curriculum, cvText, education, experience, futurejob, personaldata, skill } = await res.json() as ProfileProps

   return { curriculum, cvText, education, experience, futurejob, personaldata, skill }
}

export const Profile = async () => {
   const session = await getServerSession(authOptions)
   const { curriculum, cvText, education, experience, futurejob, personaldata, skill } = await getProfile()
   
   // If session is undefined, show the login button
   if (curriculum.id === 0) {
      return (
         <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Información</AlertTitle>
            <AlertDescription>
               Porfavor inicia sesión para poder ver tu perfil
            </AlertDescription>
         </Alert>
      )
   }

   // If session is defined, show the profile information
   return (
      <section className={`${fontSans.className}`}>
         <div className="flex flex-col gap-3 justify-center items-center">
            <Avatar className="w-20 h-20">
               <AvatarImage src={`https://www.infojobs.net/candidato.foto?id_candidato=${curriculum.code}&CameFrom=perfil`} />
               <AvatarFallback>IJ</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
               <h2 className="text-lg font-semibold leading-none tracking-tight">{curriculum.name}</h2>
               <p className="text-sm text-muted-foreground">{experience[0].onCourse && experience[0].job}</p>
            </div>
         </div>
      </section>
   )
}