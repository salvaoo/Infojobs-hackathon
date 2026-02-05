import { create } from 'zustand'

export interface SessionType {
   access_token: string,
   expires_in: number,
   refresh_token: string,
   scope?: string,
   token_type?: string,
   error?: string,
   error_description?: string,
   timestamp?: string
}

export const defaultSession: SessionType = {
   access_token: "",
   expires_in: 0,
   refresh_token: "",
   scope: "",
   token_type: ""
}

interface SessionStore {
   session: SessionType
   setSession: (session: SessionType) => void
}

export const useSessionStore = create<SessionStore>((set) => ({
   session: defaultSession,
   setSession: (session) => set({ session }),
}))
