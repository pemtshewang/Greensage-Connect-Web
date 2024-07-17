import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ThemeToggler";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-image flex items-center justify-center h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-0 p-5 mr-3 z-10">
            <ModeToggle />
          </div>
        </ThemeProvider>
      {children}
    </div>
  );
}
