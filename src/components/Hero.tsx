import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/25777839333ebc60e52f.jpg",
      alt: "Teachers of CNTT"
    },
    {
      src: "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/737fb8566643e91db052.jpg",
      alt: "Manager and students"
    },
    {
      src: "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/999fd4b40aa185ffdcb0.jpg",
      alt: "University IT laboratory"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'rgb(217, 22, 28)' }}>
      {/* School Logo - Desktop only (absolute positioned) */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden min-[920px]:block absolute top-8 right-6 lg:top-8 lg:right-8 z-20 group"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5_NkY9YsUuLK9aBoQbRp7sLJKfRGUzp3Ew&s"
          alt="HHT Logo"
          className="h-20 w-auto max-w-[180px] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 rounded-md"
        />
      </motion.a>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ background: 'rgb(255, 255, 255)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ background: 'rgb(255, 255, 255)' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-5 md:mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-base min-[1000px]:whitespace-nowrap">🎓 Trường Cao Đẳng Công Nghệ Cao Hà Nội - HHT</span>
            </motion.div>
            
            <h1 className="mb-5 md:mb-6 text-white">
              Tuyển sinh Khoa <span style={{ color: 'rgb(255, 255, 255)' }}>Công nghệ Thông tin</span>
            </h1>
            
            <p className="text-xl mb-7 md:mb-8 text-blue-50 max-w-xl mx-auto lg:mx-0">
              Biến đam mê công nghệ của bạn thành sự nghiệp. Tham gia các chương trình đào tạo công nghệ đẳng cấp quốc tế, học hỏi từ những chuyên gia hàng đầu trong môi trường học tập hiện đại.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="px-8 py-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap text-lg"
                style={{ color: 'rgb(217, 22, 28)' }}
              >
                Đăng ký tư vấn
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap text-lg"
              >
                Khám phá ngành học
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl mb-1">98%</div>
                <div className="text-sm text-blue-100">Tỷ lệ có việc làm</div>
              </div>
              <div>
                <div className="text-3xl mb-1">100+</div>
                <div className="text-sm text-blue-100">Doanh nghiệp đối tác</div>
              </div>
              <div>
                <div className="text-3xl mb-1">20+</div>
                <div className="text-sm text-blue-100">Giảng viên chuyên môn</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[234px] md:h-[312px] lg:h-[325px] 2xl:h-[455px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover object-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
              
              {/* Navigation Controls */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgb(217, 22, 28)' }}>
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Mức lương khởi điểm</div>
                  <div className="text-lg text-gray-900">8-15 triệu/tháng</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}