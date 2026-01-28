import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(to bottom right, rgb(17, 24, 39), rgb(217, 22, 28), rgb(127, 29, 29))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5_NkY9YsUuLK9aBoQbRp7sLJKfRGUzp3Ew&s"
                alt="HHT Logo"
                className="h-10 w-auto object-contain rounded-md"
              />
              {/* Mobile: Full text */}
              <span className="text-xl md:hidden">Khoa Công nghệ Thông tin</span>
              {/* Tablet/Desktop: Abbreviated text */}
              <span className="hidden md:inline text-base">Khoa CNTT</span>
            </div>
            <p className="text-blue-100 mb-4">
              Định hướng và phát triển năng lực công nghệ cho sinh viên thông qua đào tạo gắn liền với thực tiễn doanh nghiệp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Giới thiệu</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Chương trình đào tạo</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Tuyển sinh</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Đời sống sinh viên</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Hỗ trợ nghề nghiệp</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4">Ngành học</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Ứng dụng Phần mềm</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Thiết kế Web</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Trí tuệ Nhân tạo</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Thiết kế Đồ họa</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Thiết kế Nội thất</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  Trường Cao Đẳng Công Nghệ Cao Hà Nội<br />
                  Nhuệ Giang, Tây Mỗ, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="mailto:tuyensinh@khoait.edu.vn" className="text-blue-100 hover:text-white transition-colors">
                  cntt@hht.edu.vn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="tel:+84123456789" className="text-blue-100 hover:text-white transition-colors">
                  +84 (012) 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-blue-100">
            © 2025 Khoa Công nghệ Thông tin HHT. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}