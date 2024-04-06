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

  // Add event listener to each button
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Find the parent product div
      const product = this.parentNode;
      
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
    });
  });
});
