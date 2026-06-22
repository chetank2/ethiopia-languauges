import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { siteMeta } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} | Ethiopian language learning and preservation`,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
