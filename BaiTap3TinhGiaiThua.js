function baitap3(n) {
  var n = +document.getElementById("bt3-soN").value;
  var gt = 1;
  for (i = 1; i <= n; i++) {
    gt = gt * i;
  }
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showKetQua").innerHTML = `Giai thừa: ${gt}`;
}
