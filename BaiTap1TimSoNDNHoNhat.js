function baitap1() {
  var n = 1,
  sum = 0;
  while (sum <= 10000) {
    sum += n;
    n++;
  }
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showKetQua").style.color = "blue";
  document.getElementById("showKetQua").innerHTML = `Số nguyên dương nhỏ nhất theo đề là: ${n}`;
}
