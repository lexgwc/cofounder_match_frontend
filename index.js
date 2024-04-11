document.addEventListener('DOMContentLoaded', () => {
  // Select the login button
  const loginButton = document.getElementById('loginBtn');
  loginButton.addEventListener('click', () => {
      // Navigate to the login page
      window.location.href = '/login.html';
  });

  // Select the signup button
  const signupButton = document.getElementById('signupBtn');
  signupButton.addEventListener('click', () => {
      // Navigate to the signup page
      window.location.href = '/signup.html';
  });
})