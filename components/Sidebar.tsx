import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserLabel from "./UserLabel";
import Icons from "./Icons";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="ml-[-12px] fixed top-1/2 z-10 transform -translate-y-1/2">
        <Button>
          <Icons.drawer />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px] dark:bg-gray-300">
        <div className="flex py-5">
          <Avatar>
            <AvatarImage src="https://source.boringavatars.com/beam/50/" alt="@logo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <UserLabel />
        </div>
        <div className="w-full bg-black h-1"></div>
        {/* Sidebar content here */}
        <section className="space-y-3 py-5">
          <a
            href="/NewsFeed"
            className="flex justify-between prose no-underline hover:underline "
          >
            News Feeds
            <Icons.newspaper />
          </a>
          <a href="/users" className="flex justify-between prose no-underline hover:underline">
            Manage Users
            <Icons.usersGroup />
          </a>
          <a href="settings" className="flex justify-between prose no-underline hover:underline">
            Settings
            <Icons.settings />
          </a>
          <div className="divider"></div>
          <a
            href="/api/auth/signout"
            className="flex justify-between prose no-underline hover:underline"
          >
            Logout
            <Icons.logout />
          </a>
        </section>
      </SheetContent>
    </Sheet>
  );
}
