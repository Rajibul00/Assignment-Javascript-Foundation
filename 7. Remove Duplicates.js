function removeDuplicates(cart) {
    var uniqueCart = [];
    
    for (var i = 0; i < cart.length; i++) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
    
    return uniqueCart;
  }
  
  // Example usage:
  var cart = ['item1', 'item2', 'item3', 'item2', 'item4', 'item1'];
  var uniqueCart = removeDuplicates(cart);
  console.log("Unique items in the cart:", uniqueCart);
  