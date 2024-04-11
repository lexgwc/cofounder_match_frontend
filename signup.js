document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSignup);
});


function handleSignup(event) {
  event.preventDefault(); // Prevent the default form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  axios.post('https://cofounder-connect-d2057df29b96.herokuapp.com/auth/signup', { email, password })
    .then(response => {
      // Redirect to login page upon successful signup
      window.location.href = `/login.html`;
    })
    .catch(error => {
      console.error('Error:', error);
      // You might want to notify the user of the signup failure more gracefully
      alert('Signup failed. Please try again.');
    });
}
