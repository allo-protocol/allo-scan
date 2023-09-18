import { NetworkContextProvider } from "@/Context/NetworkContext";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlloScan",
  description: "Dashboard for all things Allo v2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <NetworkContextProvider>
        <body>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Navbar />
            <div className={inter.className}>{children}</div>
          </div>
        </body>
      </NetworkContextProvider>
    </html>
  );
}
