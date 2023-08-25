document
  .getElementById('email-form')
  .addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const btn = document.querySelector('button');
    if (!isValidEmail(emailInput.value)) {
      event.preventDefault(); // Impede o envio do formulário
      emailError.textContent =
        'Por favor, insira um endereço de e-mail válido.';
      emailInput.classList.add('error'); // Você pode estilizar o campo de entrada para indicar erro
      btn.classList.add('error');
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('error');
      btn.classList.remove('error');
    }
  });

function isValidEmail(email) {
  // Usando uma expressão regular simples para validar o formato do e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
