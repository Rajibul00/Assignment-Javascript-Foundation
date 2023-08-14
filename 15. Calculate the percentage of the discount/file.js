const calculateDiscount = () => {
    // Get the input values
    const originalPrice = parseFloat(document.getElementById("original-price").value);
    const discountedPrice = parseFloat(document.getElementById("discounted-price").value);
  
    // Check if the input values are valid
    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
      document.getElementById("discount-percentage").textContent = "Invalid input";
      return;
    }
  
    // Calculate the discount percentage
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
  
    // Display the discount percentage
    document.getElementById("discount-percentage").textContent = `You save ${discountPercentage.toFixed(2)}%`;
  };
  