document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMsg = document.getElementById('errorMsg');

  if (username === 'user' && password === 'pass') {
      alert('Login successful!');
      errorMsg.style.display = 'none';
  } else {
      errorMsg.textContent = 'Invalid username or password';
      errorMsg.style.display = 'block';
  }
});
