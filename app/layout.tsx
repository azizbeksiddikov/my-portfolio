import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppSidebar } from "@/components/AppSidebar";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Azizbek Siddikov",
  description: "Personal portfolio of an AI and Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppSidebar />
          <main className="flex-1 min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
            {children}
          </main>{" "}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
