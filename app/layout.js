import { Inter } from "next/font/google";
import "./globals.css";
import '@/public/styles/loading.css'
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import ChildLayout from "./components/layout/ChildLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personify - Discover Your Personality",
  description: "Discover Your Personality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChildLayout>
          {children}
        </ChildLayout>
        </body>
    </html>
  );
}
