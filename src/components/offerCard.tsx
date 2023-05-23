import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Category, Item, offersDetailsProps } from "@/types/offers"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const getOfferDetails = async (id: string) => {
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


export async function OfferCard({ key, offer }: {
   key: number,
   offer: Item
}) {
   const offerDetails = await getOfferDetails(offer.id);
   const initial = offer.author.name.charAt(0)

   return (
      <Card className="w-full" key={key}>
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
            <p className="whitespace-pre-line">{}</p>
            <div>
               {offerDetails.skillsList?.map((skill, index) => (
                  <Badge key={index} className="mr-2">{skill.skill}</Badge>
               ))}
            </div>
         </CardContent>
         <CardFooter className="flex justify-between">
            {/* <Button variant="ghost">Cancel</Button> */}
            <Button>Aplicar</Button>
         </CardFooter>
      </Card>
   )
}
