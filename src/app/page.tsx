import { OffersProps } from "@/types/offers"
import { OfferCard } from "@/components/offerCard"
import { Container } from "@/components/layouts"
import { Profile } from "@/components/profile"
import { Suspense } from "react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ProfileProps } from "@/types/profile"

const getOffers = async () => {
  const CLIENT = process.env.IJ_CLIENT_ID;
  const SECRET = process.env.IJ_CLIENT_SECRET;

  const infoJobsToken = btoa(`${CLIENT}:${SECRET}`);

  const res = await fetch(`${process.env.IJ_API_URL}/9/offer?category=informatica-telecomunicaciones`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${infoJobsToken}`
    },
    next: {
      revalidate: 300 // revalidate every 5 minutes
    }
  })
  const offers = await res.json() as OffersProps;

  return offers;
}

const getProfile = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/curriculum`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const profile = await res.json() as ProfileProps

  // Returns an object with all the profile data
  return profile
}

export default async function IndexPage() {
  const session = await getServerSession(authOptions)
  let profile: ProfileProps | null
  if (session) {
    profile = await getProfile()
  } else {
    profile = null
  }

  const offers = await getOffers();

  return (
    <section className="container py-6 md:py-10">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
        <Container className="md:col-span-2 min-h-screen">
          <div className="space-y-5">
            {offers?.items?.map(async (offer, index) => (
              <Suspense fallback={<p>Cargando ofertas...</p>}>
                {/* @ts-expect-error Async Server Component */}
                <OfferCard key={index} offer={offer} profile={profile} />
              </Suspense>
            ))}
          </div>
        </Container>
        <Container className="sticky top-5 md:col-span-1 h-fit hidden md:block">
          <Profile />
        </Container>
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