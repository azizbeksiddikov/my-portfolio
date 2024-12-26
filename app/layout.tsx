import { ThemeProvider } from "@/components/ThemeProvider";
import { AppSidebar } from "@/components/AppSidebar";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
      <body className="flex bg-main-background text-main-text font-sans overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Sidebar */}
          <AppSidebar />
          {/* Main Content */}
          <main className="flex-1 min-h-screen p-4">{children}</main>
        </ThemeProvider>
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
