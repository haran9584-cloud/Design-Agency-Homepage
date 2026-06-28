import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import Services from "@/components/Services.jsx";
import Portfolio from "@/components/Portfolio.jsx";
import Contact from "@/components/Contact.jsx";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
