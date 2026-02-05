"use client"

import { RecoilRoot as NextRecoilRoot } from "recoil"
import type { RecoilRootProps } from "recoil"
import { ReactNode } from "react"

interface Props extends RecoilRootProps {
  children: ReactNode
}

export function RecoilRoot({ children, ...props }: Props) {
  return <NextRecoilRoot {...props}>{children}</NextRecoilRoot>
}