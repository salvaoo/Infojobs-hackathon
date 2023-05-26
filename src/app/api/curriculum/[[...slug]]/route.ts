import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { SessionType } from "@/atoms/session";

export async function GET(
   request: Request,
   {
      params,
   }: {
      params: { slug: string };
   },
) {
   const cookieStore = cookies()

   if (cookieStore.has('session')) {
      return NextResponse.json({ error: 'session error' }, { status: 401 })
   }

   const session = JSON.parse(cookieStore.get('session')?.value as string) as SessionType

   const slug = params.slug;

   return NextResponse.json({ slug, session })

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   if (slug?.length === 2) {
      const curriculumId = slug[0]
      const action = slug[1]

      return NextResponse.json({ curriculumId, action })
   }

   const res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.access_token}`
      }
   })
   const curriculum = await res.json()

   return NextResponse.json({ curriculum })


   // if (id) {
   //    const res = await fetch(`${process.env.IJ_API_URL}/1/curriculum/${id}/education`, {
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Basic ${authToken}, Bearer ${process.env.IJ_ACCESS_TOKEN}`
   //       }
   //    })

   //    const curriculum = await res.json();

   //    return NextResponse.json({ curriculum });
   // }

   // const res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
   //    headers: {
   //       'Content-Type': 'application/json',
   //       'Authorization': `Basic ${authToken}, Bearer ${process.env.IJ_ACCESS_TOKEN}`
   //    }
   // })

   // const curriculum = await res.json();

   // return NextResponse.json({ curriculum });


}