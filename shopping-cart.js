
class ShoppingCart {
    constructor() {
      this.items = [];
      this.totalAmount = 0;
    }

  
    addItem(itemName, price, quantity = 1) {
      const newItem = { itemName, price, quantity };
      this.items.push(newItem);
      this.calculateTotalAmount();
    }
  
    removeItem(itemName) {
      const index = this.items.findIndex(item => item.itemName === itemName);
      if (index !== -1) {
        this.items.splice(index, 1);
        this.calculateTotalAmount();
      }
    }
  
    updateQuantity(itemName, newQuantity) {
      const item = this.items.find(item => item.itemName === itemName);
      if (item) {
        item.quantity = newQuantity;
        this.calculateTotalAmount();
      }
    }
  
    calculateTotalAmount() {
      this.totalAmount = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
  
  // Example 
  const shoppingCart = new ShoppingCart();
  
  // Adding to the cart
  shoppingCart.addItem("Product A", 30);
  shoppingCart.addItem("Product B", 25, 4);
  
  // Displaying the current items and amount
  console.log("Current Cart:", shoppingCart.items);
  console.log("Total Amount:", shoppingCart.totalAmount);
  
  // Removing an item from the cart
  shoppingCart.removeItem("Product A");
  
  // Displaying the updated cart and total amount
  console.log("Updated Cart:", shoppingCart.items);
  console.log("Total Amount:", shoppingCart.totalAmount);
  
  // Updating quantity of an item in the cart
  shoppingCart.updateQuantity("Product B", 3);
  
  // Displaying the final cart and total amount
  console.log("Final Cart:", shoppingCart.items);
  console.log("Total Amount:", shoppingCart.totalAmount);
  