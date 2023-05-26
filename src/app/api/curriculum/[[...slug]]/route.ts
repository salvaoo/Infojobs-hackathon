import { NextResponse } from "next/server"
import { cookies } from 'next/headers'


export async function GET(
   request: Request,
   {
      params,
   }: {
      params: { slug: string };
   },
) {
   const cookieStore = cookies()
   const session = cookieStore.get('session')

   if (!session) {
      return NextResponse.json({ error: 'session error' }, { status: 401 })
   }

   const slug = params.slug;

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   // If slug is a json empty object, return the curriculum list
   if (slug.length === 0) {
      const res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authToken}, Bearer ${process.env.IJ_ACCESS_TOKEN}`
         }
      })
      const curriculum = await res.json()

      return NextResponse.json({ curriculum })
   }

   // if slug have a 2 length, return the curriculum list
   if (slug.length === 2) {
      const curriculumId = slug[0]
      const action = slug[1]

      return NextResponse.json({ curriculumId, action })
   }


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