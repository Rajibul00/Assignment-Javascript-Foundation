function calculateBill() {
    // Get the input values
    var costPerDish = parseFloat(document.getElementById("cost-per-dish").value);
    var numPeople = parseInt(document.getElementById("num-people").value);
  
    // Check if the input values are valid
    if (isNaN(costPerDish) || isNaN(numPeople) || costPerDish <= 0 || numPeople <= 0) {
      document.getElementById("total-bill").textContent = "Invalid input";
      document.getElementById("bill-per-person").textContent = "";
      return;
    }
  
    // Calculate the total bill and bill per person
    var totalBill = costPerDish * numPeople;
    var billPerPerson = totalBill / numPeople;
  
    // Update the result in the HTML
    document.getElementById("total-bill").textContent = totalBill.toFixed(2);
    document.getElementById("bill-per-person").textContent = billPerPerson.toFixed(2);
  }

