

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
  event.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  axios.post('https://cofounder-connect-d2057df29b96.herokuapp.com/auth/signin', { email, password })
    .then(response => {
      const token = response.data.token; 
      if (token) {
        localStorage.setItem('token', token);
        window.location.href = `/homepage.html`;
      } else {
        alert('Login failed: No token received');
      }
    })
    .catch(error => console.error('Error:', error));
}