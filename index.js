
document.addEventListener('DOMContentLoaded', () => {

  const loginButton = document.getElementById('loginBtn');
  loginButton.addEventListener('click', () => {

      window.location.href = `/login.html`;
  });


  const signupButton = document.getElementById('signupBtn');
  signupButton.addEventListener('click', () => {

      window.location.href = `/signup.html`;
  });
})