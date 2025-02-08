// Show popup after form submission
document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const testimonialText = document.querySelector('#testimonial-form textarea').value;
  
    if (testimonialText.trim() === '') {
      alert('Please enter a testimonial.');
      return;
    }
  
    // Display popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  
    // Close popup when clicking the close button
    document.querySelector('.close').addEventListener('click', function () {
      popup.style.display = 'none';
    });
  
    // Clear the form
    document.querySelector('#testimonial-form textarea').value = '';
  });