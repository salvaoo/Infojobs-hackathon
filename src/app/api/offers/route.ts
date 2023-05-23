import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const id = searchParams.get('id');

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const infoJobsToken = btoa(`${CLIENT}:${SECRET}`);

   // const infoJobsToken = process.env.INFOJOBS_TOKEN

   const res = await fetch(`${process.env.IJ_API_URL}/7/offer?category=informatica-telecomunicaciones`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${infoJobsToken}`
      }
   })
   const offers = await res.json();

   return NextResponse.json({ offers });
}