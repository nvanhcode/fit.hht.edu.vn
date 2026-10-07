import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Câu hỏi viết sát cách người dùng tìm kiếm trên Google; cũng dùng để sinh dữ liệu FAQPage (JSON-LD)
const faqs = [
  {
    question: "Học Cao đẳng Công nghệ Thông tin tại HHT mất bao lâu?",
    answer:
      "Hệ Cao đẳng học trong 2,5 năm. Hệ Trung cấp 9+ (dành cho học sinh tốt nghiệp THCS, học cả nghề và văn hóa) học trong 3 năm.",
  },
  {
    question: "Tuyển sinh Cao đẳng CNTT tại HHT xét tuyển như thế nào?",
    answer:
      "Trường xét tuyển bằng học bạ, không tổ chức thi đầu vào. Hệ Cao đẳng xét học bạ THPT, hệ Trung cấp 9+ xét học bạ THCS.",
  },
  {
    question: "Hồ sơ xét tuyển gồm những gì?",
    answer:
      "Hồ sơ gồm học bạ (THPT với hệ Cao đẳng, THCS với hệ Trung cấp 9+) và bản sao công chứng các giấy tờ cá nhân liên quan như CCCD.",
  },
  {
    question: "Khi nào trường nhận hồ sơ tuyển sinh năm 2026?",
    answer:
      "Trường nhận hồ sơ quanh năm theo 4 đợt: Đợt 1 từ 01/01 – 30/01, Đợt 2 từ 01/05 – 31/08, Đợt 3 từ 01/09 – 31/10 và Đợt 4 từ 01/11 – 31/12/2026.",
  },
  {
    question: "Tốt nghiệp THCS (hết lớp 9) có học CNTT được không?",
    answer:
      "Có. Học sinh tốt nghiệp THCS có thể đăng ký hệ Trung cấp 9+, học song song nghề và văn hóa trong 3 năm, sau đó có thể liên thông lên Cao đẳng.",
  },
  {
    question: "Học xong được cấp bằng gì?",
    answer:
      "Sinh viên hệ Cao đẳng khi tốt nghiệp được cấp bằng Cao đẳng chính quy.",
  },
  {
    question: "Học Cao đẳng CNTT xong có liên thông lên Đại học được không?",
    answer:
      "Có. Sinh viên tốt nghiệp hệ Cao đẳng có thể học liên thông lên Đại học để nâng cao bằng cấp.",
  },
  {
    question: "Ngành nào được miễn học phí?",
    answer:
      "Ngành Thiết kế đồ họa được miễn giảm 100% học phí cho sinh viên có hộ khẩu thường trú tại Hà Nội, theo nghị quyết của thành phố Hà Nội năm 2026 (cho đến khi hết chỉ tiêu). Học phí các ngành khác vui lòng liên hệ hotline 0909268246.",
  },
  {
    question: "Khoa CNTT đào tạo những ngành nào?",
    answer:
      "Khoa đào tạo 5 ngành: Ứng dụng phần mềm, Thiết kế web, Trí tuệ nhân tạo (AI), Thiết kế đồ họa và Thiết kế nội thất.",
  },
  {
    question: "Trường Cao đẳng Công nghệ Cao Hà Nội ở đâu?",
    answer:
      "Khoa Công nghệ Thông tin đặt tại Tầng 3, Trường Cao đẳng Công nghệ Cao Hà Nội (CS1 – Trụ sở chính), Phố Nhuệ Giang, Phường Xuân Phương, TP. Hà Nội.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FAQ() {
  return (
    <section id="cau-hoi-thuong-gap" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(217, 22, 28, 0.1)', color: 'rgb(217, 22, 28)' }}>
            Giải đáp thắc mắc
          </div>
          <h2 className="mb-4 text-gray-900 text-5xl">
            Câu hỏi <span style={{ color: 'rgb(217, 22, 28)' }}>thường gặp</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-6 rounded-xl border"
              style={{ background: 'rgba(217, 22, 28, 0.05)', borderColor: 'rgba(217, 22, 28, 0.2)' }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h3 className="heading-h4 text-gray-900">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: 'rgb(217, 22, 28)' }} />
              </summary>
              <p className="text-base text-gray-600 mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
