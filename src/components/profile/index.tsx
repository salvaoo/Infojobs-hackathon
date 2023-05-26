'use client'

import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { profileState } from "@/atoms/profile"
import { useRecoilState } from "recoil"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fontSans } from "@/lib/fonts"

interface Props { }

export const Profile = (props: Props) => {
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
      <section className={`${fontSans.className}`}>
         <div className="flex flex-col gap-3 justify-center items-center">
            <Avatar className="w-20 h-20">
               <AvatarImage src={`https://www.infojobs.net/candidato.foto?id_candidato=${profile.curriculum.code}`} />
               <AvatarFallback>IJ</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
               <h2 className="text-lg font-semibold leading-none tracking-tight">{profile.curriculum.name}</h2>
               <p className="text-sm text-muted-foreground">{profile.experience[0].onCourse && profile.experience[0].job}</p>
            </div>
         </div>
      </section>
   )
}