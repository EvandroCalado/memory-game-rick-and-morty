const form = document.querySelector('.login-form');
const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const handleSubmit = (e) => {
  e.preventDefault()

  localStorage.setItem('player', input.value)
  window.location = 'pages/game.html'
}

const validateInput = ({ target }) => {
  target.value.length > 2
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', '');
};

form.addEventListener('submit', handleSubmit)
input.addEventListener('input', validateInput);
