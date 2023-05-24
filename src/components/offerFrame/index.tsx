import { offersDetailsProps } from "@/types/offers";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
               <p className="text-sm text-muted-foreground">{offer.profile.name}</p>
            </div>
         </div>
         <div className="mt-7">
            <p className="whitespace-pre-line cursor-pointer">{offer.description}</p>
         </div>
      </article>
   );
}