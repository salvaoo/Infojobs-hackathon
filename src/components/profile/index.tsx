'use client'

// import { cookies } from 'next/headers';
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { profileState } from "@/atoms/profile"
import { useRecoilState } from "recoil"

interface Props { }

export const Profile = (props: Props) => {
   // const cookieStore = cookies()
   // const session = cookieStore.get('session')
   // console.log(session)

   const [profile, setProfile] = useRecoilState(profileState)

   // If session is undefined, show the login button
   if (profile.curriculum.id === 0) {
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
      <section>
         <h1>{profile.curriculum.name}</h1>
      </section>
   )
}