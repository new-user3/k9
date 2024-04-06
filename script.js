document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function() {
    navLinks.classList.remove('active');
  });

  // Select all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.product button');

  // Function to handle adding to cart and displaying message
  function addToCartHandler(event) {
    // Prevent default action for touch events
    event.preventDefault();

    // Find the parent product div
    const product = this.parentNode;

    // Check if a message is already displayed for this product
    const existingMessage = product.nextElementSibling;
    if (existingMessage && existingMessage.classList.contains('added-to-cart')) {
      // If a message is already displayed, do nothing
      return;
    }

    // Create a message element
    const message = document.createElement('p');
    message.textContent = 'Added to cart!';
    message.classList.add('added-to-cart');

    // Insert the message after the product
    product.parentNode.insertBefore(message, product.nextSibling);

    // Remove the message after 3 seconds
    setTimeout(function() {
      message.remove();
    }, 3000);
  }

  // Add event listeners for both click and touch events
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCartHandler);
    button.addEventListener('touchstart', addToCartHandler);
  });
});
