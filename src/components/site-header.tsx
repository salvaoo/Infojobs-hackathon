import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export function SiteHeader() {
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

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}