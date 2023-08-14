let cart = [];

const addToCart = () => {
  // Get the input values
  const unitPrice = parseFloat(document.getElementById("unit-price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  // Check if the input values are valid
  if (isNaN(unitPrice) || isNaN(quantity) || unitPrice <= 0 || quantity <= 0) {
    return;
  }

  // Create an item object and add it to the cart array
  const item = { unitPrice, quantity };
  cart.push(item);

  // Clear the input values
  document.getElementById("unit-price").value = "";
  document.getElementById("quantity").value = "";

  // Update the cart items display
  const cartItems = document.getElementById("cart-items");
  const itemText = `Unit Price: ${unitPrice}, Quantity: ${quantity}`;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(itemText));
  cartItems.appendChild(listItem);

  // Calculate and display the total cost
  const totalCost = calculateTotalCost();
  document.getElementById("cost").textContent = totalCost.toFixed(2);
};

const calculateTotalCost = () => {
  // Initialize the total cost to 0
  let totalCost = 0;

  // Loop through each item in the cart
  cart.forEach((item) => {
    // Calculate the cost of each item (unit price * quantity) and add it to the total cost
    totalCost += item.unitPrice * item.quantity;
  });

  // Return the total cost
  return totalCost;
};
