/**
 * Đầu vào:
 * - Người dùng nhập một chuỗi số
 *
 * Xử lý:
 * - Kiểm tra chuỗi người dùng nhập
 * - Chuyển chuỗi thành mảng số.
 * - Lọc ra các số dương trong mảng và đếm số lượng.
 *
 * Đầu ra:
 * - Hiển thị số lượng các số dương trong mảng.
 */

function countNumbers() {
  const input = document.getElementById("txtMang2").value.trim();
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
  const count = numbers.filter((num) => num > 0).length;
  return `Số lượng các số dương trong mảng là: ${count}`;
}

document.getElementById("btnDem").addEventListener("click", function () {
  const result = countNumbers();
  document.getElementById("ketquaDem").innerText = result;
});
