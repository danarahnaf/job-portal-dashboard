import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="border-t">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden lg:block w-[18%]">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                    <div className="px-6 py-6 lg:px-8">
                      <Header></Header>
                      {children}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
