function doubleCartItemQuantities(cart) {
    // Create a new array to store the updated quantities
    var updatedCart = [];
  
    // Loop through each item in the cart
    for (var i = 0; i < cart.length; i++) {
      // Double the quantity and add it to the updatedCart array
      updatedCart.push(cart[i] * 2);
    }
  
    // Return the updated cart array
    return updatedCart;
  }
  
  // Example usage
  var cart = [1, 2, 3, 4]; // Example cart array with incorrect quantities
  
  var updatedCart = doubleCartItemQuantities(cart);
  console.log(updatedCart);
  