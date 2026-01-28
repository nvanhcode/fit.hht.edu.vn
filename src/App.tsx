import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Career } from "./components/Career";
import { RegistrationForm } from "./components/RegistrationForm";
import { Footer } from "./components/Footer";
import { Pen } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Career />
      <RegistrationForm />
      <Footer />

      {/* Floating Action Button */}
      <motion.button
        onClick={scrollToForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 px-4 py-3 md:px-5 md:py-4 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 z-50"
        style={{ color: 'rgb(217, 22, 28)' }}
        aria-label="Đăng ký tư vấn"
      >
        <Pen className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-sm md:text-base whitespace-nowrap">Đăng ký ngay</span>
      </motion.button>
    </div>
  );
}