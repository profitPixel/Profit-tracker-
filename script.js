
function calculateProfit() {
  const buy = parseFloat(document.getElementById('buyPrice').value);
  const sell = parseFloat(document.getElementById('sellPrice').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(buy) || isNaN(sell)) {
    resultDiv.textContent = "Please enter valid numbers.";
    resultDiv.style.color = "black";
    return;
  }

  const profitPercent = ((sell - buy) / buy * 100).toFixed(2);
  const message = profitPercent >= 0 
    ? `Profit: +${profitPercent}%` 
    : `Loss: ${profitPercent}%`;

  resultDiv.textContent = message;
  resultDiv.style.color = profitPercent >= 0 ? "green" : "red";
}