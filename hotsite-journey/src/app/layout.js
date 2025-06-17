import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//COMPONENTS
import { Header }from '../components/header'
import { Container } from '../components/container'
import { Footer } from '../components/footer'


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>

        <Header />

        <Container>
          {children}
        </Container>

        <Footer />

      </body>
    </html>
  );
}
