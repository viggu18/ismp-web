import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: "Influencer Hub",
  description: "Next.js Web Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, outfit.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

