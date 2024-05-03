"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockIcon, UserIcon } from "lucide-react";
import PasswordChangeForm from "./form-passwd";
export default function SettingsTab() {
  return (
    <Tabs defaultValue="password" className="lg:max-w-[800px]  mx-auto">
      <div className="grid grid-cols-2 h-full">
        <div>
          <TabsList className="flex-col h-full space-y-2 bg-transparent justify-start">
            <TabsTrigger
              value="password"
              className="space-x-2 focus:border border-muted-foreground"
            >
              <span>Password Setting</span> <LockIcon />
            </TabsTrigger>
            <TabsTrigger
              value="credentials"
              className="space-x-2 focus:border border-muted-foreground"
            >
              <span>Admin Credentials</span> <UserIcon />
            </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <TabsContent value="password">
            <PasswordChangeForm />
          </TabsContent>
          <TabsContent value="credentials">
            <h1 className="text-muted-foreground italic">Features will be added soon...</h1>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
