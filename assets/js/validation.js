const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // validate the name input
    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      return;
    }

    // validate the phone input
    const phoneRegex = /^[0-9]{8}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      alert('Please enter a valid phone number');
      return;
    }

    // validate the email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
    }

    // if all inputs are valid, submit the form
    form.submit();
});