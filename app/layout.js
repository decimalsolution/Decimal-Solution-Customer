import MainNav from "@/components/generic/header/main-nav";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/generic/footer";
import { AOSInit } from "./aos";
import HowCanWeHelpYou from "./how-can-we-help-you";
import GoogleTag from "./google-tag";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Decimal Solution",
  description:
    "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation",
};

export default async function RootLayout({ children }) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: {
      revalidate: 300,
    },
  });

  const response = await data.json();
  const contactInfo = response.data[0];

  return (
    <html lang="en">
      <AOSInit />
      <body className={poppins.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleTag ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <MainNav contactInfo={contactInfo} />
        {children}
        <Footer contactInfo={contactInfo} />
        <HowCanWeHelpYou contactInfo={contactInfo} />
      </body>
    </html>
  );
}
