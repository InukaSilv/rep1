document.addEventListener("DOMContentLoaded", function(event) {
    const container = document.querySelector('.container');
  
    // Click event function
    function flipHeart(event) {
      container.classList.toggle('clicked');
    }
    
    // Add click event listener to the container
    container.addEventListener('click', flipHeart);
  });
  
