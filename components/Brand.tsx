import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex-1 ml-2 mt-2">
      <a className="w-fit h-fit btn btn-ghost">
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80} />
      </a>
    </div>
  )
}
