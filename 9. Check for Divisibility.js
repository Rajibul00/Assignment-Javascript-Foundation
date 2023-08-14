function printNumbers(array) {
    for (var i = 0; i < array.length; i++) {
      var number = array[i];
      
      if (number % 3 !== 0) {
        continue;
      }
      
      if (number % 2 === 0) {
        continue;
      }
      
      console.log(number);
    }
  }
  
  // Example usage:
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printNumbers(numbers);
  