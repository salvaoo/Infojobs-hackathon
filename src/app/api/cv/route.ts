import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const id = searchParams.get('id');

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   if (id) {
      const res = await fetch(`${process.env.IJ_API_URL}/1/curriculum/${id}/education`, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authToken}, Bearer ${process.env.IJ_ACCESS_TOKEN}`
         }
      })

      const curriculum = await res.json();

      return NextResponse.json({ curriculum });
   }

   const res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${process.env.IJ_ACCESS_TOKEN}`
      }
   })

   const curriculum = await res.json();

   return NextResponse.json({ curriculum });


}