import { motion } from "motion/react";
import { Award, Users, Briefcase, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Đội ngũ giảng viên giàu kinh nghiệm",
      description: "Học từ chuyên gia với nhiều năm kinh nghiệm tại các công ty công nghệ hàng đầu.",
    },
    {
      icon: Users,
      title: "Cơ sở vật chất hiện đại",
      description: "Phòng lab công nghệ cao, trung tâm studio sáng tạo và không gian học tập hiện đại dành cho sinh viên công nghệ.",
    },
    {
      icon: Briefcase,
      title: "Đào tạo gắn liền thực tế",
      description: "Chương trình học được thiết kế cùng các doanh nghiệp công nghệ để đáp ứng nhu cầu thực tế của thị trường.",
    },
    {
      icon: Rocket,
      title: "Hỗ trợ nghề nghiệp toàn diện",
      description: "Dịch vụ tư vấn nghề nghiệp, chương trình thực tập và kết nối trực tiếp với doanh nghiệp tuyển dụng.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(217, 22, 28, 0.1)', color: 'rgb(217, 22, 28)' }}>
              Về Khoa Công Nghệ Thông Tin
            </div>
            
            <h2 className="mb-6 text-gray-900 text-5xl">
              Đào tạo những <span style={{ color: 'rgb(217, 22, 28)' }}>nhân tài công nghệ</span> cho tương lai
            </h2>
            
            <p className="text-gray-600 mb-6">
              Khoa Công nghệ Thông tin cam kết mang đến chương trình đào tạo chất lượng quốc tế, chuẩn bị cho sinh viên một nền tảng vững chắc trong thời đại công nghệ đang phát triển mạnh mẽ. Chương trình học đi đôi với hành kết hợp lý thuyết và dự án thực tế sẽ giúp cho sinh viên phát triển kỹ năng làm việc nhanh chóng.
            </p>
            
            <p className="text-gray-600 mb-8">
              Với chương trình giảng dạy tiên tiến, đội ngũ giảng viên có chuyên môn cao và mạng lưới đối tác doanh nghiệp rộng khắp cả nước, chúng tôi đảm bảo sinh viên tốt nghiệp xong có thể sẵn sàng giải quyết ngay các vấn đề thực tế và dẫn dắt sự đổi mới trong lĩnh vực mà họ theo học.
            </p>

            <div className="flex gap-4 mb-8">
              <div className="px-6 py-3 rounded-lg border" style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}>
                <div className="text-2xl mb-1" style={{ color: 'rgb(217, 22, 28)' }}>15+</div>
                <div className="text-sm text-gray-600">Năm đào tạo</div>
              </div>
              <div className="px-6 py-3 rounded-lg border" style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}>
                <div className="text-2xl mb-1" style={{ color: 'rgb(217, 22, 28)' }}>1,000+</div>
                <div className="text-sm text-gray-600">Cựu sinh viên thành công</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300"
                style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgb(217, 22, 28)' }}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-base leading-relaxed text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}