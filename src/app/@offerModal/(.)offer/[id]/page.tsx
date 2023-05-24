import Modal from "@/components/modal";
import { getOfferDetails } from "@/components/offerCard";
import OfferFrame from "@/components/offerFrame";

export default async function OfferModal({ params: { id } }: { params: { id: string } }) {

   const offer = await getOfferDetails(id);

  return (
    <Modal>
      <OfferFrame offer={offer} />
    </Modal>
  );
}