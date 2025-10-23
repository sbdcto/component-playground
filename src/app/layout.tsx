import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playground",
  description: "A playground for testing components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="relative flex h-screen w-full flex-col gap-3 py-4 pr-4">
            <Header />
            <Card className="h-full overflow-hidden rounded-4xl bg-primary-foreground px-5 py-7 shadow-xs">
              <main
                className="h-full overflow-y-scroll"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#d7d7d7 #ffffff",
                }}
              >
                {children}
              </main>
            </Card>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
