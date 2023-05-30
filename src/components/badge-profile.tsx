'use client'

import { useRecoilState } from "recoil"

import { profileState } from "@/atoms/profile"
import { Badge } from "@/components/ui/badge"
import { Level } from "@/types/profile"

export const BadgeProfile = ({ key, skill }: {
   key: number,
   skill: string
}) => {
   const [profile, setProfile] = useRecoilState(profileState)

   let variant: Level | "default" = "default"

   if (profile?.skill) {
      profile?.skill.expertise.forEach((profileSkill) => {
         if (profileSkill.skill === skill) {
            variant = profileSkill.level
         }
      })
   }

   return (
      <Badge key={key} className={`mr-2`} variant={variant}>{skill}</Badge>
   )

   
}