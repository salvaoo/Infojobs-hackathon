import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { LoginButton, LogoutButton } from "@/components/signButtons"

const getCandidate = async (accessToken: string) => {
   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;
   const authToken = btoa(`${CLIENT}:${SECRET}`);

   const res = await fetch(`${process.env.IJ_API_URL}/6/candidate`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${authToken}, Bearer ${accessToken}`
      }
   })
   const candidate = await res.json()

   return candidate
}

export const ProfileHeader = async () => {
   const session = await getServerSession(authOptions)
   const candidate = await getCandidate(session?.accessToken as string)

   return (
      <div className="flex flex-1 items-center justify-end space-x-4">
         <nav className="flex items-center space-x-2">
            {!session ? (
               <LoginButton />
            ) : (
               <Popover>
                  <PopoverTrigger>
                     <Avatar className="w-8 h-8">
                        <AvatarImage className="object-cover" src={`${candidate.photo}&CameFrom=perfil`} />
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
                        <li className="text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2 rounded cursor-pointer">
                           <LogoutButton className="p-0 text-gray-600 hover:text-primary transition-colors hover:bg-primary/10 cursor-pointer" />
                        </li>
                     </ul>
                  </PopoverContent>
               </Popover>
            )}

            {/* <ThemeToggle /> */}
         </nav>
      </div>
   )
}