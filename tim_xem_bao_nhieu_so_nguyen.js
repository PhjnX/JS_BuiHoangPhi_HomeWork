/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtMang9), chứa các số cách nhau bằng dấu phẩy (,) hoặc khoảng trắng.
 *
 * Xử lý:
 * - Lấy giá trị từ input người dùng.
 * - Kiểm tra tính hợp lệ của chuỗi nhập vào:
 *   + Chuỗi không được để trống.
 *   + Tất cả các phần tử trong chuỗi phải là số hợp lệ.
 * - Tách chuỗi thành mảng
 * - Chuyển đổi từng phần tử trong mảng thành số.
 * - Kiểm tra và đếm số lượng số nguyên trong mảng:
 *   + Sử dụng `Number.isInteger()` để xác định số nguyên.
 *
 * Đầu ra:
 * - Hiển thị:
 *   + "Số lượng số nguyên trong mảng là: [giá trị]" nếu tìm thấy.
 *   + Thông báo lỗi nếu chuỗi nhập không hợp lệ hoặc trống.
 */

function countIntegersInArray() {
  const inputArray = document.getElementById("txtMang9").value.trim();
  if (!inputArray) {
    return "Vui lòng nhập mảng số, cách nhau bằng dấu phẩy (,).";
  }
  const array = inputArray.split(/[, ]+/).map((num) => num.trim());
  if (array.some((num) => isNaN(num) || num === "")) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,) hoặc khoảng trắng.";
  }
  const numbers = array.map(Number);
  const integerCount = numbers.filter((num) => Number.isInteger(num)).length;
  return `Số lượng số nguyên trong mảng là: ${integerCount}`;
}

document.getElementById("btnDemSo").addEventListener("click", function () {
  const result = countIntegersInArray();
  document.getElementById("ketquaDemSo").innerText = result;
});
