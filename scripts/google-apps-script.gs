/**
 * Google Apps Script nhận dữ liệu form "Đăng ký tư vấn" (src/components/RegistrationForm.tsx)
 * và ghi vào Google Sheet.
 *
 * Cách dùng: dán toàn bộ file này vào Apps Script của Sheet (Tiện ích mở rộng → Apps Script),
 * sau đó Triển khai → Quản lý các bản triển khai → sửa → Phiên bản mới → Triển khai.
 * Giữ nguyên "Thực thi bằng tên: Tôi" và "Người có quyền truy cập: Bất kỳ ai".
 *
 * Web chỉ coi là thành công khi nhận được JSON { result: "success" }.
 */

// Tên trang tính cần ghi. Để trống ("") để dùng trang tính đầu tiên.
const SHEET_NAME = "";

function doPost(e) {
  // Khóa để nhiều người gửi cùng lúc không ghi đè lên cùng một dòng
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    const p = (e && e.parameter) || {};
    const fullname = String(p.fullname || "").trim();
    const phone = String(p.phone || "").trim();
    const email = String(p.email || "").trim();
    const major = String(p.major || "").trim();

    if (!fullname || !phone || !email || !major) {
      return jsonResponse({ result: "error", error: "Thiếu thông tin bắt buộc" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
    if (!sheet) {
      return jsonResponse({ result: "error", error: "Không tìm thấy trang tính" });
    }

    // Thứ tự cột: Họ và tên | Số điện thoại | Email | Ngành quan tâm | Thời gian
    // Dấu ' trước SĐT để Sheet không cắt mất số 0 ở đầu.
    sheet.appendRow([fullname, "'" + phone, email, major, new Date()]);

    return jsonResponse({ result: "success" });
  } catch (err) {
    return jsonResponse({ result: "error", error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
