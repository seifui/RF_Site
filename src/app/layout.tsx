import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Rangi Fernando | Dance Movement Therapist",
  description:
    "Dance Movement Therapy, workshops, and retreats with Rangi Fernando — healing, connection, and transformation through movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", satoshi.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className={`${satoshi.className} min-h-full`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-full w-full justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <div className="bg-surface text-ink min-h-[calc(100dvh-3rem)] w-full max-w-frame rounded-shell shadow-sm sm:min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
