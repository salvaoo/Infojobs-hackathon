'use client'

import { AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ProfileProps } from "@/types/profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fontSans } from "@/lib/fonts"


// This function fetches the profile data from the server
// const getProfile = async () => {
//    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/curriculum`, {
//       method: 'GET',
//       headers: {
//          'Content-Type': 'application/json',
//       }
//    })
//    const profile = await res.json() as ProfileProps

//    // Returns an object with all the profile data
//    return profile
// }

export const Profile = () => {
   const [profile, setProfile] = useState<ProfileProps>()

   useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/curriculum`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      }).then(res => res.json())
         .then(data => setProfile(data))
   }, [])

   if (!profile) {
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

   return (
      <section className={`${fontSans.className}`}>
         <div className="flex flex-col gap-3 justify-center items-center">
            <Avatar className="w-20 h-20">
               <AvatarImage src={`https://www.infojobs.net/candidato.foto?id_candidato=${profile?.curriculum.code}&CameFrom=perfil`} />
               <AvatarFallback>IJ</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
               <h2 className="text-lg font-semibold leading-none tracking-tight">{profile?.curriculum?.name}</h2>
               <p className="text-sm text-muted-foreground">{profile?.experience[0]?.onCourse && profile?.experience[0]?.job}</p>
            </div>
         </div>
      </section>
   )
}