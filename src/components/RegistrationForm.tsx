import { motion } from "motion/react";
import { useState } from "react";
import { User, Phone, Mail, GraduationCap, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzZleWwpdDOYc5ekcHc45g3dsWHY21haoBSldKyPzgpzHb_fv8UmI8SVrEvOwlpyfcFUw/exec";
const SUBMIT_TIMEOUT_MS = 15000;

// SĐT di động VN: 0xxxxxxxxx hoặc +84xxxxxxxxx (đầu số 3, 5, 7, 8, 9)
const PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "submitting" | "success" | "error";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    programs: [] as string[],
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ phone?: string; email?: string }>({});

  const programs = [
    "Ứng dụng phần mềm",
    "Thiết kế web",
    "Trí tuệ nhân tạo - AI",
    "Thiết kế đồ họa",
    "Thiết kế nội thất",
  ];

  const validate = () => {
    const errors: { phone?: string; email?: string } = {};
    const phone = formData.phone.replace(/[\s.-]/g, "");
    if (!PHONE_REGEX.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ (VD: 0912345678)";
    }
    if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = "Email không hợp lệ (VD: email@example.com)";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || !validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    const formBody = new URLSearchParams();
    formBody.append("fullname", formData.fullName.trim());
    formBody.append("phone", formData.phone.replace(/[\s.-]/g, ""));
    formBody.append("email", formData.email.trim());
    formBody.append("major", formData.programs.join(", ")); // gộp nhiều ngành

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch(SHEET_URL, {
        method: "POST",
        body: formBody,
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Apps Script trả về { result: "success" } khi ghi vào Sheet thành công
      const data = await res.json().catch(() => null);
      if (data?.result !== "success") {
        throw new Error(data?.error || "Phản hồi không hợp lệ từ máy chủ");
      }

      setStatus("success");
      setFormData({ fullName: "", phone: "", email: "", programs: [] });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMessage(
        !navigator.onLine
          ? "Không có kết nối mạng. Vui lòng kiểm tra Internet và thử lại."
          : err instanceof DOMException && err.name === "AbortError"
            ? "Máy chủ phản hồi quá lâu. Vui lòng thử lại."
            : "Gửi đăng ký không thành công. Vui lòng thử lại."
      );
      setStatus("error");
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name in fieldErrors) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: undefined });
    }
  };

  const handleProgramToggle = (program: string) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  const submitDisabled = formData.programs.length === 0 || status === "submitting";

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
            {status !== "success" ? (
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
                      type="tel"
                      inputMode="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(177, 17, 22)' } as React.CSSProperties}
                      placeholder="0912 345 678"
                      aria-invalid={!!fieldErrors.phone}
                    />
                  </div>
                  {fieldErrors.phone && (
                    <p className="text-sm mt-2" style={{ color: 'rgb(217, 22, 28)' }}>{fieldErrors.phone}</p>
                  )}
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
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(177, 17, 22)' } as React.CSSProperties}
                      placeholder="email@example.com"
                      aria-invalid={!!fieldErrors.email}
                    />
                  </div>
                  {fieldErrors.email && (
                    <p className="text-sm mt-2" style={{ color: 'rgb(217, 22, 28)' }}>{fieldErrors.email}</p>
                  )}
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

                {/* Error */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex gap-3 p-4 rounded-lg border"
                    style={{ background: 'rgba(217, 22, 28, 0.08)', borderColor: 'rgba(217, 22, 28, 0.3)' }}
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'rgb(217, 22, 28)' }} />
                    <div className="text-sm text-gray-700">
                      <p>{errorMessage}</p>
                      <p className="mt-1">
                        Hoặc liên hệ trực tiếp hotline{" "}
                        <a href="tel:+84909268246" style={{ color: 'rgb(217, 22, 28)' }}>0909268246</a>{" "}
                        để được tư vấn.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitDisabled}
                  whileHover={{ scale: submitDisabled ? 1 : 1.02 }}
                  whileTap={{ scale: submitDisabled ? 1 : 0.98 }}
                  className={`w-full py-4 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    submitDisabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:shadow-xl'
                  }`}
                  style={{ background: 'rgb(217, 22, 28)' }}
                >
                  {status === "submitting" ? (
                    <>
                      Đang gửi...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      {status === "error" ? "Thử lại" : "Đăng ký ngay"}
                      <Send className={`w-5 h-5 transition-transform ${
                        submitDisabled ? '' : 'group-hover:translate-x-1'
                      }`} />
                    </>
                  )}
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