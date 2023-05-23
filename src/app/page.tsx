import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import StepsComponent from "@/components/steps"
import { OffersProps } from "@/types/offers"
import { OfferCard } from "@/components/offerCard"

const getOffers = async () => {
  const CLIENT = process.env.IJ_CLIENT_ID;
  const SECRET = process.env.IJ_CLIENT_SECRET;

  const infoJobsToken = btoa(`${CLIENT}:${SECRET}`);

  const res = await fetch(`${process.env.IJ_API_URL}/9/offer?category=informatica-telecomunicaciones`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${infoJobsToken}`
    }
  })
  const offers = await res.json() as OffersProps;

  return offers;
}

export default async function IndexPage() {

  const offers = await getOffers();

  console.log(offers);

  return (
    <section className="container py-6 md:py-10">
      <div className="relative grid grid-cols-3 gap-5">
        <div className="col-span-2 bg-white shadow-xl rounded-xl min-h-screen p-8">
          <div className="space-y-5">
            {offers?.items?.map(async (offer, index) => {
              const offerCard = await OfferCard({ key: index, offer: offer });
              return offerCard;
            })}
          </div>
        </div>
        <div className="sticky top-5 col-span-1 bg-white shadow-xl rounded-xl h-96 p-8">
          Profile
        </div>
      </div>


      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.shadcnGithub}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div> */}
    </section>
  )
}