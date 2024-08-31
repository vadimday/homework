function calculateDays() {
  let volume = parseFloat(document.getElementById("volume").value);
  let days = 0;

  while (volume >= 10) {
    days++;
    volume -= volume * 0.1;
  }

  document.getElementById("result").innerText = `khvatit ${days} dney.`;
}
