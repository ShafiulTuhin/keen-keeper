import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import FriendsProvider from "@/context/FriendsProvider";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen-Keeper || Home",
  description: "A web application for communication between friends",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* 👇 THIS is the fix */}
        <main className="flex-1 container mx-auto py-20 px-4 lg:px-0">
          <FriendsProvider>{children}</FriendsProvider>
        </main>

        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
