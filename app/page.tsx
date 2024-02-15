import { getUser } from "@/lib/session";
import { ParticlesComponent } from "@/components/particles/Particles";
import Image from "next/image";
import { TypeWriter } from "@/components/Typewriter";
import { quotes } from "@/lib/quote";
import Footer from "@/components/Footer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ParticlesComponent />
      <section className="min-h-screen bg-hero ">
        <div className="absolute left-[32%] top-[26%] opacity-100 mr-10">
          <TypeWriter words={quotes} />
        </div>
      </section>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <div className="absolute right-20 top-[3%]">
          <Link
            href="/auth/login"
            className={`bg-transparent text-white hover:bg-transparent hover:border-2 text-md ${cn(buttonVariants({
              variant: "link"
            }))
              }`}>
            Are you an admin?
          </Link>
        </div>
        <div className="p-5">
          <Image width={100} height={100} src="/images/logo.png" alt="greenhouse logo" />
        </div>
        <div className="absolute bottom-[35%] left-[32%]">
          <Link
            href="/about"
            className={`bg-green-600 text-white hover:bg-transparent hover:border-2 text-md ${cn(buttonVariants({
              variant: "link"
            }))
              }`}>
            Get Started with GS-Connect
          </Link>
        </div>
        <Footer className="flex space-x-2 absolute bottom-0 right-0 px-2 text-white" />
      </div>
    </div >
  )
}
