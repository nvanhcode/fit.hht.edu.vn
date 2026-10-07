import { motion } from "motion/react";
import { GraduationCap, School, FileText, CalendarDays, BadgePercent } from "lucide-react";

export function Admissions() {
  const scrollToForm = () => {
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const levels = [
    {
      icon: GraduationCap,
      title: "Hệ Cao đẳng",
      target: "Học sinh đã tốt nghiệp THPT hoặc tương đương",
      duration: "2,5 năm",
      details: [
        "Xét tuyển bằng học bạ THPT, không thi đầu vào",
        "Tốt nghiệp nhận bằng Cao đẳng chính quy",
        "Có thể học liên thông lên Đại học",
      ],
    },
    {
      icon: School,
      title: "Hệ Trung cấp 9+",
      target: "Học sinh đã tốt nghiệp THCS (hết lớp 9)",
      duration: "3 năm",
      details: [
        "Học song song nghề và văn hóa",
        "Xét tuyển bằng học bạ THCS, không thi đầu vào",
        "Có thể học liên thông lên Cao đẳng",
      ],
    },
  ];

  const periods = [
    { name: "Đợt 1", time: "01/01 – 30/01/2026" },
    { name: "Đợt 2", time: "01/05 – 31/08/2026" },
    { name: "Đợt 3", time: "01/09 – 31/10/2026" },
    { name: "Đợt 4", time: "01/11 – 31/12/2026" },
  ];

  return (
    <section id="tuyen-sinh" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(217, 22, 28, 0.1)', color: 'rgb(217, 22, 28)' }}>
            Thông tin tuyển sinh
          </div>
          <h2 className="mb-4 text-gray-900 text-5xl">
            Tuyển sinh Cao đẳng CNTT <span style={{ color: 'rgb(217, 22, 28)' }}>năm 2026</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khoa Công nghệ Thông tin - Trường Cao đẳng Công nghệ Cao Hà Nội (HHT) tuyển sinh hệ Cao đẳng và Trung cấp 9+ các ngành Ứng dụng phần mềm, Thiết kế web, Trí tuệ nhân tạo (AI), Thiết kế đồ họa và Thiết kế nội thất. Xét tuyển bằng học bạ, nhận hồ sơ quanh năm.
          </p>
        </motion.div>

        {/* Hệ đào tạo */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border"
              style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgb(217, 22, 28)' }}>
                  <level.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">{level.title}</h3>
                  <p className="text-base text-gray-600">Thời gian học: {level.duration}</p>
                </div>
              </div>
              <p className="text-base text-gray-900 mb-3">
                <strong>Đối tượng:</strong> {level.target}
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-base space-y-1">
                {level.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Hình thức & hồ sơ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border"
            style={{ borderColor: 'rgba(217, 22, 28, 0.2)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" style={{ color: 'rgb(217, 22, 28)' }} />
              <h3 className="heading-h4 text-gray-900">Xét tuyển & hồ sơ</h3>
            </div>
            <p className="text-base text-gray-600 mb-3">
              <strong className="text-gray-900">Hình thức:</strong> Xét tuyển học bạ.
            </p>
            <p className="text-base text-gray-900 mb-2"><strong>Hồ sơ gồm:</strong></p>
            <ul className="list-disc pl-5 text-gray-600 text-base space-y-1">
              <li>Học bạ THPT (hệ Cao đẳng) hoặc học bạ THCS (hệ Trung cấp 9+)</li>
              <li>Bản sao công chứng các giấy tờ cá nhân liên quan (CCCD, ...)</li>
            </ul>
          </motion.div>

          {/* Các đợt nhận hồ sơ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border"
            style={{ borderColor: 'rgba(217, 22, 28, 0.2)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays className="w-5 h-5" style={{ color: 'rgb(217, 22, 28)' }} />
              <h3 className="heading-h4 text-gray-900">Thời gian nhận hồ sơ 2026</h3>
            </div>
            <ul className="space-y-2">
              {periods.map((period, idx) => (
                <li key={idx} className="flex justify-between gap-3 text-base">
                  <span className="text-gray-900">{period.name}</span>
                  <span className="text-gray-600">{period.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Học phí */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border"
            style={{ borderColor: 'rgba(217, 22, 28, 0.2)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BadgePercent className="w-5 h-5" style={{ color: 'rgb(217, 22, 28)' }} />
              <h3 className="heading-h4 text-gray-900">Học phí & ưu đãi</h3>
            </div>
            <p className="text-base text-gray-600 mb-3">
              <strong className="text-gray-900">Miễn giảm 100% học phí ngành Thiết kế đồ họa</strong> cho sinh viên có hộ khẩu thường trú tại Hà Nội, theo nghị quyết của thành phố Hà Nội năm 2026 (cho đến khi hết chỉ tiêu).
            </p>
            <p className="text-base text-gray-600 mb-4">
              Học phí các ngành khác vui lòng liên hệ hotline{" "}
              <a href="tel:+84909268246" style={{ color: 'rgb(217, 22, 28)' }}>0909268246</a>{" "}
              để được tư vấn.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="px-6 py-3 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ background: 'rgb(217, 22, 28)' }}
            >
              Đăng ký xét tuyển →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
