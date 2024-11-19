/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtMang8)
 *
 * Xử lý:
 * - Kiểm tra tính hợp lệ của chuỗi nhập vào.
 * - Chuyển chuỗi thành mảng số.
 * - Kiểm tra từng số trong mảng xem có phải là số nguyên tố không.
 * - Nếu tìm thấy số nguyên tố đầu tiên, trả về nó, nếu không trả về -1.
 *
 * Đầu ra:
 * - Hiển thị số nguyên tố đầu tiên hoặc -1 nếu không có.
 */

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findFirstPrime() {
  const inputArray = document.getElementById("txtMang8").value.trim();
  if (!inputArray) {
    return "Vui lòng nhập mảng số, cách nhau bằng dấu phẩy (,).";
  }
  const array = inputArray.split(",").map((num) => num.trim());
  if (array.some((num) => isNaN(Number(num)))) {
    return "Vui lòng chỉ nhập các số hợp lệ, cách nhau bằng dấu phẩy (,).";
  }
  for (let i = 0; i < array.length; i++) {
    const num = Number(array[i]);
    if (isPrime(num)) {
      return `Số nguyên tố đầu tiên trong mảng là: ${num}`;
    }
  }
  return "Mảng không có số nguyên tố.";
}
document.getElementById("btnTim").addEventListener("click", function () {
  const result = findFirstPrime();
  document.getElementById("ketquaTim").innerText = result;
});
