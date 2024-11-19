/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtMang6)
 * - Vị trí đầu (txtNum1)
 * - Vị trí thứ hai (txtNum2)
 *
 * Xử lý:
 * - Kiểm tra tính hợp lệ của chuỗi nhập vào.
 * - Chuyển chuỗi thành mảng.
 * - Đảm bảo các vị trí nằm trong khoảng hợp lệ.
 * - Đổi chỗ hai phần tử tại các vị trí chỉ định.
 *
 * Đầu ra:
 * - Hiển thị mảng sau khi đổi vị trí hoặc thông báo lỗi nếu có.
 */

function swapNumbers() {
  const inputArray = document.getElementById("txtMang6").value.trim();
  const index1 = parseInt(document.getElementById("txtNum1").value.trim());
  const index2 = parseInt(document.getElementById("txtNum2").value.trim());
  if (!inputArray) {
    return "Vui lòng nhập mảng số, cách nhau bằng dấu phẩy (,).";
  }
  const array = inputArray.split(",").map((num) => num.trim());
  if (array.some((num) => isNaN(Number(num)))) {
    return "Vui lòng chỉ nhập các số hợp lệ.";
  }
  if (
    isNaN(index1) ||
    isNaN(index2) ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= array.length ||
    index2 >= array.length
  ) {
    return `Vị trí không hợp lệ! Chỉ số phải nằm trong khoảng từ 0 đến ${
      array.length - 1
    }.`;
  }
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return `Mảng sau khi đổi vị trí: [${array.join(", ")}]`;
}

document.getElementById("btnChange").addEventListener("click", function () {
  const result = swapNumbers();
  document.getElementById("ketquaChange").innerText = result;
});
