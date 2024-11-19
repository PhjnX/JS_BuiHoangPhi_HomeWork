/**
 * Đầu vào:
 * - Người dùng nhập một chuỗi số
 *
 * Xử lý:
 * - Kiểm tra có phải dữ liệu nhập vào là số và cách nhau bằng dấu , hay không
 * - Chuyển chuỗi thành mảng số.
 * - Lọc ra các số dương và tìm số dương nhỏ nhất.
 *
 * Đầu ra:
 * - Hiển thị số dương nhỏ nhất trong mảng.
 */

function findMinPositiveNumber() {
  const input = document.getElementById("txtMang4").value.trim();
  if (!input) {
    return "Vui lòng nhập ít nhất một số, cách nhau bằng dấu phẩy (,).";
  }
  if (!input.includes(",")) {
    return "Vui lòng nhập các số cách nhau bằng dấu phẩy (,). Ví dụ: 1,2,3";
  }
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.some(isNaN)) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,).";
  }
  const positiveNumbers = numbers.filter((num) => num > 0);
  if (positiveNumbers.length === 0) {
    return "Mảng không có số dương.";
  }
  const minPositiveNumber = Math.min(...positiveNumbers);
  return `Số dương nhỏ nhất trong mảng là: ${minPositiveNumber}`;
}

document.getElementById("btnDuongMin").addEventListener("click", function () {
  const result = findMinPositiveNumber();
  document.getElementById("ketquaDuongMin").innerText = result;
});
