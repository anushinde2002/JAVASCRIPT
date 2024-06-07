document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var errorMsg = document.getElementById('errorMsg');

  if (password !== confirmPassword) {
      errorMsg.textContent = 'Passwords do not match';
      errorMsg.style.display = 'block';
      return;
  }

  if (username && email && password && confirmPassword) {
      alert('Registration successful!');
      errorMsg.style.display = 'none';
  } else {
      errorMsg.textContent = 'All fields are required';
      errorMsg.style.display = 'block';
  }
});
