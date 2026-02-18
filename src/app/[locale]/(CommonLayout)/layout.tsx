import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TopBar from "@/components/shared/TopBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col antialiased`}
      >
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
