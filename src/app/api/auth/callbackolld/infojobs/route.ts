import { SessionType } from "@/stores/session-store";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const code = searchParams.get('code');

   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;
   const encodedSecret = encodeURIComponent(SECRET ?? '');
   const authToken = btoa(`${CLIENT}:${SECRET}`);
   const redirectURL = encodeURIComponent(process.env.IJ_CALLBACK_URL ?? '');

   const res = await fetch(`${process.env.IJ_AUTH_TOKEN_URL}?grant_type=authorization_code&client_id=${CLIENT}&client_secret=${encodedSecret}&code=${code}&redirect_uri=${redirectURL}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         "Authorization": `Basic ${authToken}`
      }
   })
   const accessToken = await res.json() as SessionType;

   // return NextResponse.json(accessToken)

   if (accessToken.access_token) {
      const session = {
         access_token: accessToken.access_token,
         expires_in: accessToken.expires_in,
         refresh_token: accessToken.refresh_token,
         scope: accessToken.scope ? accessToken.scope : '',
         token_type: accessToken.token_type ? accessToken.token_type : ''
      }

      const url = new URL('/', request.url);
      url.searchParams.set('success', 'true');
      return NextResponse.redirect(url, {
         status: 302,
         headers: {
            'Set-Cookie': `session=${JSON.stringify(session)}; Path=/;`
         }
      });
   }

   if (accessToken.error) {
      const url = new URL('/', request.url);
      url.searchParams.set('error', accessToken.error_description ?? accessToken.error);
      return NextResponse.redirect(url);
   }
}