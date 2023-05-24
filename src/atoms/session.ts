import { atom } from 'recoil';

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

const defaultSession: SessionType = {
   access_token: "",
   expires_in: 0,
   refresh_token: "",
   scope: "",
   token_type: ""
}

export const sessionState = atom({
   key: "sessionState",
   default: defaultSession,
})