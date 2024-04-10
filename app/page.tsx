import { getUser } from "@/lib/session";
import { ParticlesComponent } from "@/components/particles/Particles";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { quote } from "@/lib/quote";
import { TypewriterEffect } from "@/components/Typewriter";
import Icons from "@/components/Icons";

export default async function Home() {
  const user = await getUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ParticlesComponent />
      <section className="min-h-screen bg-hero w-full">
        <div className="absolute left-[32%] top-[26%] opacity-100 mr-10">
          <div className="min-h-28">
            <TypewriterEffect words={quote} />
          </div>
        </div>
      </section>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="absolute right-0 mr-24 top-[3%]">
          <Link
            href="/about"
            className={cn(
              "bg-green-600 text-white relative min-w-[140px] text-center",
              buttonVariants({
                variant: "link",
              }),
            )}
          >
            Get Started
            <span className="absolute right-2">
              <Icons.rightArrow />
            </span>
          </Link>
          <span className="text-xl mx-4 text-white">or</span>
          <Link
            href="/auth/login"
            className={cn(`bg-transparent underline text-white text-md`)}
          >
            Are you an admin?
          </Link>
        </div>
        <div className="p-5">
          <Image
            width={100}
            height={100}
            src="/images/logo.png"
            alt="greenhouse logo"
          />
        </div>
        <Footer className="flex space-x-2 absolute bottom-0 right-0 px-2 text-white" />
      </div>
    </div>
  );
}
