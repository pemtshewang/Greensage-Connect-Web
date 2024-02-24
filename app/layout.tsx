import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { ModeToggle } from "@/components/ThemeToggler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GS-Connect",
  description: "Greensage-Connect Web Admin Panel",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-0 p-5 mr-3 z-10">
            <ModeToggle />
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
