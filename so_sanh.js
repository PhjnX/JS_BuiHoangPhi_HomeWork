/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtMang10), chứa các số cách nhau bằng dấu phẩy (,) hoặc khoảng trắng.
 *
 * Xử lý:
 * - Lấy giá trị từ input người dùng.
 * - Kiểm tra tính hợp lệ của chuỗi nhập vào:
 *   + Chuỗi không được để trống.
 *   + Tất cả các phần tử trong chuỗi phải là số hợp lệ.
 * - Tách chuỗi thành mảng bằng 
 * - Chuyển đổi từng phần tử trong mảng thành số.
 * - Đếm số lượng số dương (num > 0) và số âm (num < 0) trong mảng.
 * - So sánh số lượng số dương và số lượng số âm:
 *   + Nếu số dương nhiều hơn số âm, trả về kết quả tương ứng.
 *   + Nếu số âm nhiều hơn số dương, trả về kết quả tương ứng.
 *   + Nếu số dương bằng số âm, trả về thông báo số lượng bằng nhau.
 *
 * Đầu ra:
 * - Hiển thị:
 *   + Kết quả so sánh giữa số lượng số dương và số lượng số âm.
 *   + Thông báo lỗi nếu chuỗi nhập không hợp lệ hoặc trống.
 */

function comparePositiveAndNegative() {
  const inputArray = document.getElementById("txtMang9").value.trim();
  if (!inputArray) {
    return "Vui lòng nhập mảng số, cách nhau bằng dấu phẩy (,).";
  }
  const array = inputArray.split(/[, ]+/).map((num) => num.trim());
  if (array.some((num) => isNaN(num) || num === "")) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,) hoặc khoảng trắng.";
  }
  const numbers = array.map(Number);
  const positiveCount = numbers.filter((num) => num > 0).length;
  const negativeCount = numbers.filter((num) => num < 0).length;
  if (positiveCount > negativeCount) {
    return `Số lượng số dương (${positiveCount}) nhiều hơn số âm (${negativeCount}).`;
  } else if (negativeCount > positiveCount) {
    return `Số lượng số âm (${negativeCount}) nhiều hơn số dương (${positiveCount}).`;
  } else {
    return `Số lượng số dương (${positiveCount}) và số âm (${negativeCount}) bằng nhau.`;
  }
}

document.getElementById("btnSoSanh").addEventListener("click", function () {
  const result = comparePositiveAndNegative();
  document.getElementById("ketquaSoSanh").innerText = result;
});
