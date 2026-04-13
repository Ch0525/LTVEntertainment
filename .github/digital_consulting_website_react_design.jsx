import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Website() {
  const [page, setPage] = useState("home");

  const Nav = () => (
    <nav className="flex justify-between items-center p-6 shadow-sm">
      <h1 className="font-bold text-xl">Digital Consulting</h1>
      <div className="flex gap-4">
        {['home','about','services','contact'].map((p) => (
          <button key={p} onClick={() => setPage(p)} className="capitalize">
            {p}
          </button>
        ))}
      </div>
    </nav>
  );

  const Home = () => (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
          Launch & Scale Your Digital Business
        </motion.h1>
        <p className="text-xl max-w-2xl mb-6">
          Turn your ideas into profitable online businesses with expert strategy and guidance.
        </p>
        <Button onClick={() => setPage('services')} className="rounded-2xl">Get Started</Button>
      </section>

      <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {["Strategy", "Branding", "Marketing"].map((item, i) => (
          <Card key={i} className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">{item}</h3>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );

  const About = () => (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>
        We help entrepreneurs build and scale profitable digital businesses using proven strategies, systems, and execution plans.
      </p>
    </section>
  );

  const Services = () => (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "$149" },
          { name: "Growth", price: "$399" },
          { name: "Premium", price: "$999" }
        ].map((plan, i) => (
          <Card key={i} className="rounded-2xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold">{plan.price}</p>
              <Button className="mt-4">Choose</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const Contact = () => (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Reach out to start your journey.</p>
      <Button>Contact Us</Button>
    </section>
  );

  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'services' && <Services />}
      {page === 'contact' && <Contact />}

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 Digital Consulting
      </footer>
    </div>
  );
}
