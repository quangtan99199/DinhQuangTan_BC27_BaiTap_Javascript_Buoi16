function baitap2(x, n) {
  var S = 0;
  var x = document.getElementById("bt2-soX").value;
  var n = document.getElementById("bt2-soN").value;
  for (var i = 1; i <= n; i++) {
    S += x ** i;
  }
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showKetQua").innerHTML = `Tổng: ${S}`;
}
