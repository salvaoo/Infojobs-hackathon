import { cookies } from 'next/headers';
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Props { }

export const Profile = (props: Props) => {
   const cookieStore = cookies()

   const session = cookieStore.get('session')

   console.log(session)

   // If session is undefined, show the login button
   if (session === undefined) {
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
         <h1>Profile</h1>
      </section>
   )
}