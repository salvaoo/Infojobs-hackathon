import { Suspense } from "react"

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Item, offersDetailsProps } from "@/types/offers"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeProfile } from "@/components/badge-profile"
import { Icons } from "@/components/icons"

export const getOfferDetails = async (id: string) => {
   const CLIENT = process.env.IJ_CLIENT_ID;
   const SECRET = process.env.IJ_CLIENT_SECRET;

   const infoJobsToken = btoa(`${CLIENT}:${SECRET}`);

   const res = await fetch(`${process.env.IJ_API_URL}/7/offer/${id}`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Basic ${infoJobsToken}`
      }
   })
   const offerDetails = await res.json() as offersDetailsProps;

   return offerDetails;
}

export const OfferCard = async ({ key, offer }: {
   key: number,
   offer: Item
}) => {
   const offerDetails = await getOfferDetails(offer.id);
   const initial = offer.author.name.charAt(0)

   return (
      <Link key={key} href={`/offer/${offer.id}`}>
         <Card className="w-full hover:scale-105 duration-300 ease-in-out transition-transform" key={key}>
            <CardHeader>
               <div className="flex flex-row justify-start gap-5">
                  <Avatar className="w-12 h-12">
                     <AvatarImage src={offer.author.logoUrl} />
                     <AvatarFallback>{initial}</AvatarFallback>
                  </Avatar>
                  <div>
                     <CardTitle>{offerDetails.title}</CardTitle>
                     <CardDescription className="mt-2 text-xs">
                        <div className="flex flex-row flex-wrap gap-3">
                           <span className="flex flex-row justify-center gap-1">
                              <Icons.location className="w-4 h-4" /> {offerDetails.city}
                           </span> 
                           <span>Contrato {offerDetails?.contractType?.value}</span> 
                           <span>Jornada {offerDetails?.journey?.value}</span> 
                           <span>{offerDetails?.experienceMin?.value}</span>
                           {offer.salaryMin.value ? (
                              <span>{offer.salaryMin.value.replace(/ /g, "")} - {offer.salaryMax.value.replace(/ /g, "")}</span>
                           ) : (
                              <span>Salario no disponible</span>
                           )}
                        </div>
                     </CardDescription>
                  </div>
               </div>
            </CardHeader>
            <CardContent>
               <p className="whitespace-pre-line line-clamp-4 cursor-pointer">{offerDetails.description}</p>
               {offerDetails.skillsList.length > 0 && (
                  <div className="space-y-2 mt-3">
                     {offerDetails.skillsList.map((skill, index) => (
                        <Suspense fallback={<div>badges...</div>}>
                           <BadgeProfile key={index} skill={skill.skill} />
                        </Suspense>
                     ))}
                  </div>
               )}
            </CardContent>
            {/* <CardFooter className="flex justify-between">
               <Button>Aplicar</Button>
            </CardFooter> */}
         </Card>
      </Link>
   )
}
