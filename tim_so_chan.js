/**
 * Đầu vào:
 * - Chuỗi nhập từ người dùng (txtNumber)
 *
 * Xử lý:
 * - Kiểm tra có phải dữ liệu nhập vào là số và cách nhau bằng dấu , hay không
 * - Chuyển chuỗi thành mảng số.
 * - Lọc ra các số chẵn trong mảng và tìm số chẵn cuối cùng.
 *
 * Đầu ra:
 * - Hiển thị số chẵn cuối cùng trong mảng hoặc -1 nếu không có số chẵn.
 */

function findLastEvenNumber() {
  const input = document.getElementById("txtMang5").value.trim();
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
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  if (evenNumbers.length === 0) {
    return "Mảng không có số chẵn.";
  }
  const lastEvenNumber = evenNumbers[evenNumbers.length - 1];
  return `Số chẵn cuối cùng trong mảng là: ${lastEvenNumber}`;
}


document.getElementById("btnFinalChan").addEventListener("click", function () {
  const result = findLastEvenNumber();

  document.getElementById("ketquaFinalChan").innerText = result;
});
