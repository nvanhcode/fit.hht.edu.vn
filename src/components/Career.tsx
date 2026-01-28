import { motion } from "motion/react";
import { TrendingUp, Building2, DollarSign, GraduationCap } from "lucide-react";

export function Career() {
  const opportunities = [
    {
      icon: TrendingUp,
      stat: "85%",
      description: "Tăng trưởng việc làm ngành công nghệ trong thập kỷ tới",
    },
    {
      icon: Building2,
      stat: "500+",
      description: "Doanh nghiệp đang tuyển dụng sinh viên tốt nghiệp công nghệ thông tin",
    },
    {
      icon: DollarSign,
      stat: "15tr+",
      description: "Mức lương trung bình sau 2 năm làm việc",
    },
    {
      icon: GraduationCap,
      stat: "98%",
      description: "Sinh viên có việc làm trong vòng 6 tháng",
    },
  ];

  const careerPaths = [
    "Nhà thiết kế nội thất",
    "Kiểm thử Tester",
    "Kỹ sư Full Stack",
    "Kỹ sư AI/ML",
    "Kỹ sư DevOps",
    "Chuyên viên bảo mật",
    "Chuyên viên dựng hình 3D",
    "Lập trình viên Mobile",
    "Business Analyst",
    "Nhà thiết kế UX/UI",
    "Chuyên viên hệ thống",
    "Khởi nghiệp công nghệ",
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden" style={{ background: 'rgb(217, 22, 28)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4 border border-white/20">
            Cơ hội nghề nghiệp
          </div>
          <h2 className="mb-4 text-5xl">Tương lai của bạn trong <span className="text-white">Thị trường Công nghệ</span></h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Nhu cầu nhân lực công nghệ chưa bao giờ cao như hiện nay. Sinh viên của chúng tôi đang định hình tương lai tại các công ty công nghệ hàng đầu, startup sáng tạo và nhiều lĩnh vực khác.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/20">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl mb-2">{item.stat}</div>
              <p className="text-base leading-relaxed text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Career Paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="mb-6 text-center">Các con đường sự nghiệp phổ biến của sinh viên</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-3 bg-white/10 rounded-lg text-center hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <span className="text-base">{path}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Story Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="text-6xl text-cyan-300 mb-4">"</div>
          <p className="text-xl mb-4 text-blue-50 italic">
            Những kỹ năng thực tế và mạng lưới doanh nghiệp mà tôi có được đã mở ra những cơ hội mà tôi chưa từng nghĩ tới. Chỉ ba tháng sau khi tốt nghiệp, tôi đã có được công việc mơ ước tại một tập đoàn công nghệ lớn trong nước - tập đoàn viễn thông quân đội Viettel.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20" />
            <div className="text-left">
              <div>Nguyễn Minh Anh</div>
              <div className="text-sm text-blue-200">Kỹ sư phần mềm tại Viettel, Khóa 4</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}