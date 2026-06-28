import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixelo Studio | Design Agency",
  description: "We craft bold digital experiences through design, development, and strategy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}