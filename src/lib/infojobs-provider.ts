import { OAuthConfig } from "next-auth/providers/oauth"

export interface InfojobsProfile {
  sub: string
  email: string
  name: string
  picture?: string
}

export interface InfojobsProviderOptions {
  clientId: string
  clientSecret: string
  redirect_uri: string
  infojobs_scopes?: string
}

export default function InfojobsProvider(
  options: InfojobsProviderOptions
): OAuthConfig<InfojobsProfile> {
  const authUrl = process.env.IJ_AUTH_URL || "https://www.infojobs.net/oauth/authorize"
  const tokenUrl = process.env.IJ_AUTH_TOKEN_URL || "https://www.infojobs.net/oauth/token"
  const userInfoUrl = process.env.IJ_USER_INFO_URL || "https://www.infojobs.net/api/2/curriculum"

  const scopes = options.infojobs_scopes || "CV,CANDIDATE_PROFILE_WITH_EMAIL"

  return {
    id: "infojobs",
    name: "Infojobs",
    type: "oauth",
    authorization: {
      url: authUrl,
      params: {
        scope: scopes,
        response_type: "code",
        client_id: options.clientId,
        redirect_uri: options.redirect_uri,
      },
    },
    token: {
      url: tokenUrl,
      async request(context) {
        const { provider, params } = context
        const response = await fetch(tokenUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(
              `${options.clientId}:${options.clientSecret}`
            ).toString("base64")}`,
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code: params.code as string,
            redirect_uri: options.redirect_uri,
            client_id: options.clientId,
            client_secret: options.clientSecret,
          }),
        })

        const tokens = await response.json()

        return {
          tokens: {
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            expires_at: tokens.expires_in
              ? Math.floor(Date.now() / 1000) + tokens.expires_in
              : undefined,
            token_type: tokens.token_type || "Bearer",
            scope: tokens.scope,
          },
        }
      },
    },
    userinfo: {
      url: userInfoUrl,
      async request(context) {
        const { tokens } = context
        const response = await fetch(userInfoUrl, {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch user info: ${response.statusText}`)
        }

        const data = await response.json()
        
        // Adaptar la respuesta de Infojobs al formato esperado por NextAuth
        return {
          sub: data.id?.toString() || data.candidate?.id?.toString() || "",
          email: data.email || data.candidate?.email || "",
          name: data.name || data.candidate?.name || "",
          picture: data.picture || data.candidate?.photo,
        }
      },
    },
    client: {
      id: options.clientId,
      secret: options.clientSecret,
    },
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    profile(profile) {
      return {
        id: profile.sub,
        email: profile.email,
        name: profile.name,
        image: profile.picture,
      }
    },
  }
}
