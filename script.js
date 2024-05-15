function calculateProrata() {
  var totalSales = parseFloat(document.getElementById('totalSales').value);
  var vatSales = parseFloat(document.getElementById('vatSales').value);
  
  if (isNaN(totalSales) || isNaN(vatSales)) {
    alert("Please enter valid numbers.");
    return;
  }

  var prorata = (vatSales / totalSales) * 100;
  document.getElementById('result').innerText = "VAT Prorata: " + prorata.toFixed(2) + "%";
}
