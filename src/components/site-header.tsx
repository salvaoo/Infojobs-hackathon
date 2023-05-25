'use client'

import { useEffect } from "react"
import Link from "next/link"
import { useRecoilState } from "recoil"
import { getCookie, hasCookie } from 'cookies-next';

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SessionType, sessionState } from "@/atoms/session"


export function SiteHeader() {
  const [session, setSession] = useRecoilState(sessionState)

  useEffect(() => {
    if (hasCookie('session')) {
      const authCookie = getCookie('session') as string

      setSession(JSON.parse(authCookie) as SessionType)

      console.log(session)
    }
  }, [session])

  return (
    <header className="relative w-10/12 mx-auto border-0 mt-5 rounded-xl bg-white shadow-xl max-w-7xl">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            {session.access_token.length === 0 ? (
              <Link href="https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_CVTEXT,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_SKILLS&client_id=912f8125fe094a12a417eabbb3137321&redirect_uri=https://infojobs-hackathon-ebon.vercel.app/api/auth/callback/infojobs&response_type=code">
                <Button size="sm">
                  Login
                </Button>
              </Link>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>IJ</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-fit" align="end" sideOffset={6}>
                  <ul className="">
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Buscar Empresas</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Salarios</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Formación</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Consejos</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Ajustes</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Ayuda</li>
                    <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Cerrar sesión</li>
                  </ul>
                </PopoverContent>
              </Popover>
            )}

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}