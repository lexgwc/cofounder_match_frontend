// const deployLink = "https://cofounder-match-frontend.vercel.app/"

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  axios.post('https://cofounder-connect-d2057df29b96.herokuapp.com/auth/signin', { email, password })
    .then(response => {
      const token = response.data.token; // Assume the token is in response.data.token
      if (token) {
        // Store the token
        localStorage.setItem('token', token);
        // Redirect to homepage upon successful login
        // window.location.href = `${deployLink}homepage.html`;
        window.location.href = `/homepage.html`;
      } else {
        alert('Login failed: No token received');
      }
    })
    .catch(error => console.error('Error:', error));
}