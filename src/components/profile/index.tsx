'use client'

import { AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { DotPulse } from '@uiball/loaders'
import { useRecoilState } from "recoil"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CandidateType, ProfileProps } from "@/types/profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fontSans } from "@/lib/fonts"
import { Badge } from "@/components/ui/badge"
import { profileState } from "@/atoms/profile"
// import { candidate as candidateData, curriculum } from "@/lib/data"

export const Profile = () => {
   const { data: session } = useSession();
   // const [profile, setProfile] = useState<ProfileProps>()
   const [profile, setProfile] = useRecoilState(profileState)
   const [candidate, setCandidate] = useState<CandidateType>()

   useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/curriculum`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      }).then(res => res.json())
         .then(data => setProfile(data))

      fetch(`${process.env.NEXT_PUBLIC_URL}/api/candidate`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      }).then(res => res.json())
         .then(data => setCandidate(data))
   }, [setProfile])

   if (!session) {
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

   if (profile?.curriculum.id === 0 && !candidate) {
      return (
         <div className="w-full h-full flex items-center justify-center">
            <DotPulse
               size={40}
               speed={1.3}
               color="black"
            />
         </div>
      )
   }

   return (
      <section className={`${fontSans.className}`}>
         {/* Photo and details */}
         <div className="flex flex-row gap-4 justify-center items-start">
            <Avatar className="w-16 h-16">
               <AvatarImage className="object-cover" src={`${candidate?.candidate.photo}&CameFrom=perfil`} />
               <AvatarFallback>IJ</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
               <h2 className="text-lg font-semibold leading-none tracking-tight">{profile?.curriculum?.name}</h2>
               <p className="text-sm text-muted-foreground">{profile?.experience[0]?.onCourse && profile?.experience[0]?.job}</p>
            </div>
         </div>
         {/* Personal data */}
         <div className="mt-5">
            <h3 className="text-base font-semibold text-foreground mb-1">Datos personales:</h3>
            <div className="flex flex-col gap-1">
               <p className="text-sm text-muted-foreground"><span className="text-foreground">Email: </span>{profile?.personaldata?.email}</p>
               <p className="text-sm text-muted-foreground"><span className="text-foreground">Residencia: </span>{`${candidate?.candidate.city}, ${profile?.personaldata?.country.charAt(0).toUpperCase()}${profile?.personaldata?.country.slice(1).toLowerCase()}`}</p>
               <p className="text-sm text-muted-foreground"></p>
            </div>
         </div>
         {/* About */}
         <div className="mt-5">
            <h3 className="text-base font-semibold text-foreground mb-1">Descripción:</h3>
            <p className="text-sm text-foreground leading-relaxed">{profile?.cvText}</p>
         </div>
         {/* Skills */}
         <div className="mt-5 space-y-1">
            <h3 className="text-base font-semibold text-foreground mb-1">Habilidades:</h3>
            {profile?.skill.expertise.map((skill, index) => {
               const variant = skill.level || 'default'
               return (
                  <Badge key={index} className={`mr-2`} variant={variant}>{skill.skill}</Badge>
               )
            })}
         </div>
      </section>
   )
}