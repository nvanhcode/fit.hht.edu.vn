import { motion } from "motion/react";
import { useState } from "react";
import { User, Phone, Mail, GraduationCap, Send, CheckCircle } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    programs: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const programs = [
    "Ứng dụng phần mềm",
    "Thiết kế web",
    "Trí tuệ nhân tạo - AI",
    "Thiết kế đồ họa",
    "Thiết kế nội thất",
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  
  setSubmitted(true);

  
  const formBody = new URLSearchParams();
  formBody.append("fullname", formData.fullName);
  formBody.append("phone", formData.phone);
  formBody.append("email", formData.email);
  formBody.append("major", formData.programs.join(", ")); // gộp nhiều ngành

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzZleWwpdDOYc5ekcHc45g3dsWHY21haoBSldKyPzgpzHb_fv8UmI8SVrEvOwlpyfcFUw/exec", // URL SHEET
      {
        method: "POST",
        body: formBody,
      }
    );
  } catch (err) {
    console.error("Submit error:", err);
  }

  // 3. Reset UI
  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      programs: [],
    });
  }, 3000);
};




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProgramToggle = (program: string) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  return (
    <section id="registration-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(217, 22, 28, 0.1)', color: 'rgb(217, 22, 28)' }}>
              Bắt đầu hành trình của bạn
            </div>
            <h2 className="mb-4 text-gray-900 text-5xl">
              Đăng ký <span style={{ color: 'rgb(217, 22, 28)' }}>Tư vấn miễn phí</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bắt đầu hành trình học tập của bạn ngay hôm nay. Điền form bên dưới để được đội ngũ tuyển sinh liên hệ tư vấn và hướng dẫn nhập học trong vòng 24 giờ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 shadow-xl border"
            style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(177, 17, 22)' } as React.CSSProperties}
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(177, 17, 22)' } as React.CSSProperties}
                      placeholder="0912 345 678"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(177, 17, 22)' } as React.CSSProperties}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-gray-700 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                      <span>Ngành quan tâm * (có thể chọn nhiều)</span>
                    </div>
                  </label>
                  <div className="space-y-3">
                    {programs.map((program, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={formData.programs.includes(program)}
                          onChange={() => handleProgramToggle(program)}
                          className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-0"
                          style={{ 
                            accentColor: 'rgb(217, 22, 28)',
                            '--tw-ring-color': 'rgb(177, 17, 22)' 
                          } as React.CSSProperties}
                        />
                        <span className="text-gray-700">{program}</span>
                      </label>
                    ))}
                  </div>
                  {formData.programs.length === 0 && (
                    <p className="text-sm text-gray-500 mt-2">Vui lòng chọn ít nhất một ngành quan tâm</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formData.programs.length === 0}
                  whileHover={{ scale: formData.programs.length > 0 ? 1.02 : 1 }}
                  whileTap={{ scale: formData.programs.length > 0 ? 0.98 : 1 }}
                  className={`w-full py-4 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    formData.programs.length === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-xl'
                  }`}
                  style={{ background: 'rgb(217, 22, 28)' }}
                >
                  Đăng ký ngay
                  <Send className={`w-5 h-5 transition-transform ${
                    formData.programs.length > 0 ? 'group-hover:translate-x-1' : ''
                  }`} />
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Bằng việc gửi form này, bạn đã đồng ý để đội ngũ tuyển sinh của khoa CNTT liên hệ với mình. Chúng tôi tôn trọng quyền riêng tư cá nhân và sẽ không chia sẻ bất kì thông tin nào của bạn.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgb(217, 22, 28)' }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-4 text-gray-900">Cảm ơn bạn đã đăng ký!</h3>
                <p className="text-gray-600 mb-6">
                  Chúng tôi đã nhận được thông tin và đội ngũ tuyển sinh sẽ liên hệ với bạn trong vòng 24 giờ để sắp xếp buổi tư vấn.
                </p>
                <p className="text-sm text-gray-500">
                  Vui lòng kiểm tra email để nhận thông tin xác nhận.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'rgb(217, 22, 28)' }} />
              <span>Không yêu cầu cam kết</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'rgb(217, 22, 28)' }} />
              <span>Tư vấn miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'rgb(217, 22, 28)' }} />
              <span>Phản hồi trong 24h</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}