import { motion } from "motion/react";
import {
  Code,
  Globe,
  Brain,
  Palette,
  Home,
  TrendingUp,
  DollarSign,
  Briefcase,
  Play,
} from "lucide-react";

interface ProgramData {
  icon: typeof Code;
  title: string;
  description: string;
  whatYouLearn: string[];
  careers: string[];
  trend: string;
  salary: string;
  color: string;
  images: string[];
  videoUrl: string;
}

export function Programs() {
  const scrollToForm = () => {
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string): string | null => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };

  const programs: ProgramData[] = [
    {
      icon: Code,
      title: "Ứng dụng Phần mềm",
      description:
        "Làm chủ nghệ thuật xây dựng ứng dụng phần mềm mạnh mẽ, có khả năng mở rộng cao, phục vụ cho các doanh nghiệp toàn cầu.",
      whatYouLearn: [
        "Nền tảng lập trình (Java, C#, Python)",
        "Thiết kế cơ sở dữ liệu và SQL",
        "Kiến trúc phần mềm và design patterns",
        "Quy trình phát triển ứng dụng",
        "Kiểm thử và đảm bảo chất lượng",
      ],
      careers: [
        "Lập trình viên phần mềm",
        "Kỹ sư kiểm thử phần mềm",
        "Chuyên viên phân tích nghiệp vụ",
      ],
      trend:
        "Nhu cầu cao do chuyển đổi số và tăng trưởng nhu cầu phần mềm trong doanh nghiệp",
      salary: "8–12 triệu VNĐ/tháng",
      color: "from-blue-500 to-cyan-500",
      images: [
        "https://career.gpo.vn/uploads/images/47945710/images/gpo-mobile-developer-nghe-danh-cho-nhung-ban-tre-dam-me-cong-nghe.jpg",
        "https://www.shutterstock.com/image-photo/asian-software-developers-working-on-600nw-2470769829.jpg",
      ],
      videoUrl: "https://youtu.be/MZ4XqhuXhIE",
    },
    {
      icon: Globe,
      title: "Thiết kế Web",
      description:
        "Tạo ra các website và ứng dụng web đẹp mắt, thu hút khách hàng và thúc đẩy thành công cho doanh nghiệp.",
      whatYouLearn: [
        "HTML5, CSS3 và JavaScript hiện đại",
        "Frontend frameworks (React, Vue)",
        "Lập trình Backend (Node.js, PHP)",
        "Nguyên tắc thiết kế responsive",
        "Tối ưu hiệu suất website",
      ],
      careers: [
        "Lập trình viên Frontend",
        "Lập trình viên Backend",
        "Lập trình viên Fullstack",
        "Chuyên viên phân tích nghiệp vụ",
      ],
      trend:
        "Nhu cầu tăng mạnh trong những năm gần đây cho website doanh nghiệp, landing page và website thương mại điện tử",
      salary: "7–11 triệu VNĐ/tháng",
      color: "from-purple-500 to-pink-500",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8_1NJDsDMapA9WBkXL_B08ql4l3DLVVJqQ&s",
        "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/aa500f7fd16a5e34077b.jpg",
      ],
      videoUrl:
        "https://s.tmimgcdn.com/scr/800x500/297700/flex-it--business-services-amp-it-solutions-multipurpose-html5-responsive-website-template_297700-11-original.jpg",
    },
    {
      icon: Brain,
      title: "Trí tuệ Nhân tạo – AI",
      description:
        "Định hình tương lai bằng cách xây dựng hệ thống thông minh có khả năng học hỏi, thích ứng và giải quyết các vấn đề phức tạp.",
      whatYouLearn: [
        "Lập trình Python cho AI/ML",
        "Thuật toán Machine Learning",
        "Xử lý ngôn ngữ tự nhiên",
        "Ứng dụng thị giác máy tính",
      ],
      careers: [
        "Kỹ sư AI Junior",
        "Kỹ sư Machine Learning",
        "Chuyên viên phân tích dữ liệu",
      ],
      trend:
        "Đây là lĩnh vực phát triển nhanh chóng với ứng dụng mọi mặt trong đời sống xã hội",
      salary: "10–15 triệu VNĐ/tháng",
      color: "from-indigo-500 to-purple-500",
      images: [
        "https://media.vneconomy.vn/images/upload/2024/06/04/ai-revolution-with-cloudester.jpg",
        "https://cafefcdn.com/203337114487263232/2025/10/30/98family-friendly-child-humanoid-robot-to-be-part-of-your-home-just-for-s1870-and-it-can-dance-too000000-17617966700211681311275-1761811447816-17618114482021325410848.jpg",
      ],
      videoUrl:
        "https://i.postimg.cc/kg82MhpX/TS-Livetreams.jpg",
    },
    {
      icon: Palette,
      title: "Thiết kế Đồ họa",
      description:
        "Biến ý tưởng của bạn thành trải nghiệm hình ảnh ấn tượng, thu hút khách hàng và truyền tải thông điệp mạnh mẽ.",
      whatYouLearn: [
        "Mỹ thuật – Cơ sở tạo hình",
        "Nguyên tắc thiết kế và lý thuyết màu sắc",
        "Adobe Creative Suite (Photoshop, Illustrator)",
        "Thiết kế thương hiệu nhận diện",
        "Minh họa kỹ thuật số và typography",
        "Thiết kế UI cho web và mobile",
        "Nhiếp ảnh & xử lý ảnh nâng cao",
        "Biên tập kĩ xảo video",
        "Thiết kế 3D",
      ],
      careers: [
        "Nhà thiết kế đồ họa",
        "Nhà thiết kế truyền thông số",
        "Freelance Designer",
      ],
      trend:
        "Nhu cầu tăng cao cho nội dung số, thương hiệu và thiết kế mạng xã hội",
      salary: "7–10 triệu VNĐ/tháng",
      color: "from-pink-500 to-rose-500",
      images: [
        "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/DSC_3046.JPG",
        "https://raw.githubusercontent.com/sonnb-cell/landing-page/refs/heads/main/DSC_3048.JPG",
      ],
      videoUrl: "https://youtu.be/TkrVKzWMfLU",
    },
    {
      icon: Home,
      title: "Thiết kế Nội thất",
      description:
        "Thiết kế và tổ chức không gian sống hài hòa giữa thẩm mỹ và công năng, mang đến môi trường sống tiện nghi, sáng tạo và giàu cảm hứng cho mọi nhà.",
      whatYouLearn: [
        "Quy hoạch không gian và bố trí",
        "Mô hình hóa 3D (SketchUp, 3ds Max)",
        "Lựa chọn vật liệu và phối màu",
        "Thiết kế ánh sáng và nội thất",
        "Quản lý dự án và quan hệ khách hàng",
      ],
      careers: [
        "Nhà thiết kế nội thất",
        "Chuyên viên dựng hình 3D",
        "Trợ lý thiết kế nội thất",
      ],
      trend:
        "Nhu cầu tăng cao cho thiết kế nhà ở, văn phòng và trung tâm thương mại",
      salary: "8–12 triệu VNĐ/tháng",
      color: "from-amber-500 to-orange-500",
      images: [
        "https://github.com/sonnb-cell/landing-page/blob/main/DSC_3057.JPG?raw=true",
        "https://github.com/sonnb-cell/landing-page/blob/main/DSC_3067.JPG?raw=true",
      ],
      videoUrl:
        "https://github.com/sonnb-cell/landing-page/blob/main/DSC_3061.JPG?raw=true",
    },
  ];

  return (
    <section>
      {programs.map((program, index) => {
        const isReversed = index % 2 === 1;
        const isFirst = index === 0;

        return (
          <div
            key={index}
            className="min-h-screen flex items-center bg-white relative"
          >
            {/* Logo Space (First Section Only) */}

            <div
              className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 ${isFirst ? "pt-24 sm:pt-20" : ""}`}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isReversed ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`space-y-8 ${isReversed ? "lg:order-2" : ""}`}
                >
                  {/* Icon and Title */}
                  <div>
                    <div className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6" style={{ background: 'rgb(217, 22, 28)' }}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="mb-4 text-gray-900">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {program.description}
                    </p>
                  </div>

                  {/* What You Will Learn */}
                  <div>
                    <h4 className="mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-1 h-6 rounded-full" style={{ background: 'rgb(217, 22, 28)' }} />
                      Bạn sẽ học gì
                    </h4>
                    <ul className="space-y-2">
                      {program.whatYouLearn.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-600 text-base"
                        >
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'rgb(217, 22, 28)' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Opportunities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5" style={{ color: 'rgb(217, 22, 28)' }} />
                      <h4 className="text-gray-900">
                        Cơ hội nghề nghiệp
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((career, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-lg text-base"
                          style={{ background: 'rgba(217, 22, 28, 0.1)', color: 'rgb(75, 85, 99)' }}
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 2025 Trends & Salary */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600 uppercase tracking-wide">
                          Xu hướng 2026
                        </span>
                      </div>
                      <p className="text-gray-600 text-base">
                        {program.trend}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5" style={{ color: 'rgb(217, 22, 28)' }} />
                        <span className="text-sm uppercase tracking-wide" style={{ color: 'rgb(217, 22, 28)' }}>
                          Mức lương
                        </span>
                      </div>
                      <p className="text-gray-900 text-base">
                        {program.salary} (mới ra trường)
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToForm}
                    className="px-8 py-4 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
                    style={{ background: 'rgb(217, 22, 28)' }}
                  >
                    {isFirst
                      ? "Đăng ký tư vấn"
                      : "Đăng ký tư vấn ngành này"}
                    <span className="text-xl">→</span>
                  </motion.button>
                </motion.div>

                {/* Visual Area */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isReversed ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}
                >
                  {/* Main Media Section - Video or Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {getYouTubeEmbedUrl(program.videoUrl) ? (
                      <iframe
                        src={
                          getYouTubeEmbedUrl(program.videoUrl)!
                        }
                        title={`${program.title} video`}
                        className="w-full h-80"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={program.videoUrl}
                        alt={`${program.title} preview`}
                        className="w-full h-80 object-cover"
                      />
                    )}
                  </div>

                  {/* Two Image Placeholders */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={program.images[0]}
                        alt={`${program.title} visual 1`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={program.images[1]}
                        alt={`${program.title} visual 2`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator (First Section Only) */}
            {isFirst && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
              >
                <span className="text-sm">
                  Cuộn để khám phá
                </span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                  <div className="w-1 h-2 bg-gray-400 rounded-full" />
                </div>
              </motion.div>
            )}
          </div>
        );
      })}
    </section>
  );
}