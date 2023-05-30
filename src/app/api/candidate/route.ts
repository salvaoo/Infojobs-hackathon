import { NextResponse } from "next/server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
   const session = await getServerSession(authOptions)

   if (!session) {
      return NextResponse.json({ error: 'session error' }, { status: 401 })
   }

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const authToken = btoa(`${CLIENT}:${SECRET}`);

   let res = await fetch(`${process.env.IJ_API_URL}/6/candidate`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${session.accessToken}`
      }
   })
   const candidate = await res.json()

   return NextResponse.json({ candidate })
}