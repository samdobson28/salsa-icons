// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageModalProvider from "../components/ImageModalProvider"; // Import the new provider

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Salsa Icons - Artist Analysis",
  description:
    "Explore the journeys of iconic female artists and their triumphs over cultural and structural obstacles.",
  openGraph: {
    title: "Salsa Icons - Artist Analysis",
    description:
      "Delve into the stories of legendary female artists and their impact on the music industry.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Salsa Icons",
  },
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* Wrap children in the ImageModalProvider */}
        <ImageModalProvider>
          <main className="flex-grow">{children}</main>
        </ImageModalProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
