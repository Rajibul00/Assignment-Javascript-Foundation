function convert() {
    // Get the input value
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
  
    // Check if the input is a valid number
    if (isNaN(celsius)) {
      document.getElementById("result").innerHTML = "Invalid input";
      return;
    }
  
    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
  
    // Display the result
    document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";
  }
  