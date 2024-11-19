/**
 * Đầu vào:
 * - Người dùng nhập một chuỗi số
 *
 * Xử lý:
 * - Kiểm tra có phải dữ liệu nhập vào là số và cách nhau bằng dấu , hay không
 * - Chuyển chuỗi thành mảng số.
 * - Lọc ra các số dương và tính tổng.
 *
 * Đầu ra:
 * - Hiển thị tổng các số dương trong mảng.
 */

function sumNumbers() {
  const input = document.getElementById("txtMang1").value.trim();
  if (!input) {
    return "Vui lòng nhập ít nhất một số, cách nhau bằng dấu phẩy (,).";
  }
  if (!input.includes(",")) {
    return "Vui lòng nhập các số cách nhau bằng dấu phẩy (,). Ví dụ: 1,2,3";
  }
  const number = input.split(",").map((num) => parseFloat(num.trim()));
  if (number.some(isNaN)) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,).";
  }
  const sum = number
    .filter((num) => num > 0)
    .reduce((total, num) => total + num, 0);
  return `Tổng các số dương trong mảng là: ${sum}`;
}

document.getElementById("btnDuong").addEventListener("click", function () {
  const result = sumNumbers();
  document.getElementById("ketquaTong").innerText = result;
});
