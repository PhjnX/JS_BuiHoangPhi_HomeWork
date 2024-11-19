/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtMang7)
 *
 * Xử lý:
 * - Kiểm tra tính hợp lệ của chuỗi nhập vào.
 * - Chuyển chuỗi thành mảng số.
 * - Sắp xếp mảng theo thứ tự tăng dần.
 *
 * Đầu ra:
 * - Hiển thị mảng sau khi sắp xếp hoặc thông báo lỗi nếu có.
 */

function sortArray() {
  const inputArray = document.getElementById("txtMang7").value.trim();
  if (!inputArray) {
    return "Vui lòng nhập mảng số, cách nhau bằng dấu phẩy (,).";
  }
  const array = inputArray.split(",").map((num) => num.trim());
  if (array.some((num) => isNaN(Number(num)))) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,).";
  }
  array.sort((a, b) => Number(a) - Number(b));
  return `Mảng sau khi sắp xếp: [${array.join(", ")}]`;
}
document.getElementById("btnSapXep").addEventListener("click", function () {
  const result = sortArray();
  document.getElementById("ketquaSapXep").innerText = result;
});
