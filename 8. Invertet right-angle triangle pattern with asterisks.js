function printInvertedTriangle(rows) {
    for (var i = rows; i >= 1; i--) {
      var pattern = '';
      
      for (var j = 1; j <= i; j++) {
        pattern += '* ';
      }
      
      console.log(pattern);
    }
  }
  
  // Example usage:
  var numRows = 6;
  printInvertedTriangle(numRows);
  