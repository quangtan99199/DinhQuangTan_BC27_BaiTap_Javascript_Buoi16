function baitap5() {
  var n = document.getElementById("bt5-soN").value;
  var soNT = "";
  for (var i = 2; i <= n; i++) {
    if (isPrime(i) === true) {
      soNT += i + " ";
    }
  }
  document.getElementById("ketQua").style = "display:block";
  document.getElementById(
    "showKetQua"
  ).innerHTML = `Dãy số nguyên tố là: ${soNT}`;
}
function isPrime(n) {
  if (n < 2) return false;
  else if (n > 2) {
    if (n % 2 === 0) {
      return false;
    }
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}
