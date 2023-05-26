import { Suspense } from "react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ProfileHeader } from "@/components/header/profile";
import { Pulsar } from '@uiball/loaders'

export function SiteHeader() {
  
  return (
    <header className="relative w-10/12 mx-auto border-0 mt-5 rounded-xl bg-white shadow-xl max-w-7xl">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <Suspense fallback={<Pulsar
          size={40}
          speed={1.75}
          color="black"
        />}>
          {/* @ts-expect-error Async Server Component */}
          <ProfileHeader />
        </Suspense>
      </div>
    </header>
  )
}