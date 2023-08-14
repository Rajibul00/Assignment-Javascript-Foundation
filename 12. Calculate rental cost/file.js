function calculateCost() {
    // Get the car type and rental days input values
    var carTypeInput = document.getElementById("car-type");
    var carType = carTypeInput.value;
    var rentalDaysInput = document.getElementById("rental-days");
    var rentalDays = parseInt(rentalDaysInput.value);
  
    // Check if the rental days is a valid number
    if (isNaN(rentalDays) || rentalDays <= 0) {
      document.getElementById("result").innerHTML = "Invalid number of rental days";
      return;
    }
  
    // Calculate the rental cost based on car type
    var rentalCost = 0;
    switch (carType) {
      case "economy":
        rentalCost = 4000;
        break;
      case "midsize":
        rentalCost = 15000;
        break;
      case "luxury":
        rentalCost = 25000;
        break;
      default:
        document.getElementById("result").innerHTML = "Invalid car type";
        return;
    }
  
    // Calculate the total cost
    var totalCost = rentalCost * rentalDays;
  
    // Display the result
    document.getElementById("result").innerHTML = "Total Rental Cost: Rs. " + totalCost + "/-";
  }
  