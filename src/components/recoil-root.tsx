"use client"

import { RecoilRoot as NextRecoilRoot } from "recoil"
import { RecoilRootProps } from "recoil"

export function RecoilRoot({ children, ...props }: RecoilRootProps) {
  return <NextRecoilRoot {...props}>{children}</NextRecoilRoot>
}