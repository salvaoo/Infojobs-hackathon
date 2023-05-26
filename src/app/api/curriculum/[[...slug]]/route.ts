import { NextResponse } from "next/server"
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export async function GET(
   request: Request,
   {
      params,
   }: {
      params: { slug: string };
   },
) {
   const session = await getServerSession(authOptions)

   if (!session) {
      return NextResponse.json({ error: 'session error' }, { status: 401 })
   }
   const slug = params.slug;

   // return NextResponse.json({ slug, session })

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   let profile: any = {}

   let res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const curriculum = await res.json()

   profile.curriculum = curriculum[0]


   // Get cvText
   res = await fetch(`${process.env.IJ_API_URL}/1/curriculum/${curriculum[0].code}/cvtext`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const cvText = await res.json()
   profile.cvText = cvText.cvtext

   // Get education
   res = await fetch(`${process.env.IJ_API_URL}/1/curriculum/${curriculum[0].code}/education`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const education = await res.json()
   profile.education = education.education


   // Get experience
   res = await fetch(`${process.env.IJ_API_URL}/2/curriculum/${curriculum[0].code}/experience`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const experience = await res.json()
   profile.experience = experience.experience


   // Get future job
   res = await fetch(`${process.env.IJ_API_URL}/4/curriculum/${curriculum[0].code}/futurejob`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const futurejob = await res.json()
   profile.futurejob = futurejob


   // Get personal data
   res = await fetch(`${process.env.IJ_API_URL}/2/curriculum/${curriculum[0].code}/personaldata`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const personaldata = await res.json()
   profile.personaldata = personaldata

   // Get skills
   res = await fetch(`${process.env.IJ_API_URL}/2/curriculum/${curriculum[0].code}/skill`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const skill = await res.json()
   profile.skill = skill

   return NextResponse.json({ 
      curriculum: profile.curriculum,
      cvText: profile.cvText,
      education: profile.education,
      experience: profile.experience,
      futurejob: profile.futurejob,
      personaldata: profile.personaldata,
      skill: profile.skill,
    })
}