function handleOrderButtonClick() {
    // Add your logic here to handle the order
    console.log("Order placed!");
    // You can redirect to the order page or perform any other actions as needed
  }
  
  // Add an event listener to the order button
  var orderButton = document.getElementById('order-btn');
  orderButton.addEventListener('click', handleOrderButtonClick);