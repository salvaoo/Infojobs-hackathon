import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Item, offersDetailsProps } from "@/types/offers"
import { Badge, BadgeProps } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Level, ProfileProps } from "@/types/profile"
import { BadgeProfile } from "@/components/badge-profile"

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

export const OfferCard = async ({ key, offer, profile }: {
   key: number,
   offer: Item,
   profile: ProfileProps | null
}) => {
   const offerDetails = await getOfferDetails(offer.id);
   const initial = offer.author.name.charAt(0)

   console.log('profile(offerCard): ', profile);
   
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
                     <CardDescription>{offer.author.name}</CardDescription>
                  </div>
               </div>
            </CardHeader>
            <CardContent>
               <p className="whitespace-pre-line line-clamp-4 cursor-pointer">{offerDetails.description}</p>
               {offerDetails.skillsList?.length > 0 && (
                  <div className="space-y-2 mt-3">
                     {offerDetails.skillsList.map((skill, index) => (
                        <BadgeProfile key={index} skill={skill.skill} />
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
