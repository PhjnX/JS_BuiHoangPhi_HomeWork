/**
 * Đầu vào:
 * - Người dùng nhập một chuỗi số
 *
 * Xử lý:
 * - Kiểm tra có phải dữ liệu nhập vào là số và cách nhau bằng dấu , hay không
 * - Chuyển chuỗi thành mảng số.
 * - Tìm số nhỏ nhất trong mảng.
 *
 * Đầu ra:
 * - Hiển thị số nhỏ nhất trong mảng.
 */

function findMinNumber() {
  const input = document.getElementById("txtMang3").value.trim();
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
  const minNumber = Math.min(...numbers);
  return `Số nhỏ nhất trong mảng là: ${minNumber}`;
}

document.getElementById("btnMin").addEventListener("click", function () {
  const result = findMinNumber();
  document.getElementById("ketquaMin").innerText = result;
});
