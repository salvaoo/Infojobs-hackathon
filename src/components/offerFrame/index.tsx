import { offersDetailsProps } from "@/types/offers";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import  Link from "next/link"
import { Icons } from "@/components/icons";

export default function OfferFrame(
   { offer }:
      { offer: offersDetailsProps }
) {
   const initial = offer.profile.name.charAt(0)

   return (
      <article>
         <div className="flex justify-start items-center gap-4">
            <div>
               <Avatar className="w-12 h-12">
                  <AvatarImage src={offer.profile.logoUrl} />
                  <AvatarFallback>{initial}</AvatarFallback>
               </Avatar>
            </div>
            <div className="space-y-2">
               <h3 className="text-xl font-semibold leading-none tracking-tight">{offer.title}</h3>
               <div className="text-xs mt-2 text-muted-foreground">
               <div className="flex flex-row flex-wrap gap-3">
                           <span className="flex flex-row justify-center gap-1">
                              <Icons.location className="w-4 h-4" /> {offer.city}
                           </span> 
                           <span>Contrato {offer?.contractType?.value}</span> 
                           <span>Jornada {offer?.journey?.value}</span> 
                           <span>{offer?.experienceMin?.value}</span>
                           {offer?.salaryDescription ? (
                              <span>{offer?.salaryDescription}</span>
                           ) : (
                              <span>Salario no disponible</span>
                           )}
                        </div>
               </div>
            </div>
         </div>
         <div className="my-7">
            <p className="whitespace-pre-line cursor-pointer">{offer.description}</p>
         </div>
         <Link href={offer.link} target="_blank">
            <Button>Aplicar</Button>
         </Link>
      </article>
   );
}