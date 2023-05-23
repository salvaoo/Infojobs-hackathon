import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const code = searchParams.get('code');

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;
   const encodedSecret = encodeURIComponent(SECRET ?? '');
   const authToken = btoa(`${CLIENT}:${SECRET}`);

   const res = await fetch(`${process.env.IJ_AUTH_TOKEN_URL}?grant_type=authorization_code&client_id=${CLIENT}&client_secret=${encodedSecret}&code=${code}&redirect_uri=https%3A%2F%2Finfojobs-hackathon-ebon.vercel.app%2Fapi%2Fauth`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}`
      }
   })
   const AccessToken = await res.json();

   return NextResponse.json({ AccessToken });
}