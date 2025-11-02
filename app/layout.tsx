import "./globals.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mayank Kantharia | Data Scientist",
  description:
    "From raw data to actionable intelligence — powered by machine learning and AI.",
  icons: {
    icon: "/1.jpeg",
    shortcut: "/1.jpeg",
    apple: "/1.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/1.jpeg" sizes="any" />
      </head>
      <body className={`antialiased ${inter.className}`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-10"></div>
          <div className="absolute inset-0 bg-linear-to-br from-dark-dark/50 to-dark-dark/80"></div>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
