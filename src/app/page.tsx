import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import StepsComponent from "@/components/steps"

export default function IndexPage() {
  return (
    <section className="container py-6 md:py-10">
      <div className="relative grid grid-cols-3 gap-5">
        <div className="col-span-2 bg-white shadow-xl rounded-xl min-h-screen p-8">left</div>
        <div className="sticky top-5 col-span-1 bg-white shadow-xl rounded-xl h-96 p-8">right</div>
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