import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { LoginButton } from "@/components/loginButton"

const getCandidate = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/candidate`)
   const candidate = await res.json()

   return candidate
}

export const ProfileHeader = async () => {

   const session = await getServerSession(authOptions)
   console.log("session nextauth: ", session);

   const candidate = await getCandidate()

   console.log("candidate: ", candidate);
   

   return (
      <div className="flex flex-1 items-center justify-end space-x-4">
         <nav className="flex items-center space-x-2">
            {!session ? (
               <LoginButton />
            ) : (
               <p>{JSON.stringify(candidate)}</p>

               // <Popover>
               //    <PopoverTrigger>
               //       <Avatar className="w-8 h-8">
               //          <AvatarImage className="object-cover" src={``} />
               //          <AvatarFallback>IJ</AvatarFallback>
               //       </Avatar>
               //    </PopoverTrigger>
               //    <PopoverContent className="w-fit" align="end" sideOffset={6}>
               //       <ul className="">
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Buscar Empresas</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Salarios</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Formación</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Consejos</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Ajustes</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Ayuda</li>
               //          <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">Cerrar sesión</li>
               //       </ul>
               //    </PopoverContent>
               // </Popover>
            )}

            {/* <ThemeToggle /> */}
         </nav>
      </div>
   )
}