import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const id = searchParams.get('id');

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   const res = await fetch(`${process.env.IJ_API_URL}/2/curriculum`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}`
      }
   })
   const curriculum = await res.json();

   return NextResponse.json({ curriculum });
}