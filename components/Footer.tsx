import { Separator } from "./ui/separator"
const Footer = ({ className }: {
  className: string
}) => {
  // flex h-5 items-center space-x-4 text-sm absolute bottom-5 right-4
  return (
    <div className={className}>
      <div className="dark:text-white">Greensage Connect</div>
      <Separator orientation="vertical" />
      <div className="dark:text-white">@2024</div>
      <Separator orientation="vertical" />
      <div className="dark:text-white">gsc.bt</div>
    </div>
  )
}
export default Footer;
