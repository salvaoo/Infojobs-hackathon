import { Container } from "@/components/layouts";
import { getOfferDetails } from "@/components/offerCard";
import OfferFrame from "@/components/offerFrame";

export default async function OfferPage({ params: { id } }: { params: { id: string } }) {

   const offer = await getOfferDetails(id);

   return (
      <section className="container py-6 md:py-10">
         <div className="relative">
            <Container>
               <OfferFrame offer={offer} />
            </Container>
         </div>
      </section>
   );
}