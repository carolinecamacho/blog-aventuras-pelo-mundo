window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('submitSuccessMessage');

    // Se não encontrar o formulário, não faz nada
    if (!contactForm) return;

    // Garante que a mensagem de sucesso comece escondida
    if (successMessage) {
        successMessage.style.display = 'none';
    }

    contactForm.addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();
        
        // Limpa erros e esconde a mensagem de sucesso de envios anteriores
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        let hasError = false;

        if (name === '') {
            showError('name', 'Por favor, preencha seu nome.');
            hasError = true;
        }

        if (email === '') {
            showError('email', 'Por favor, preencha seu e-mail.');
            hasError = true;
        } else if (!isValidEmail(email)) {
            showError('email', 'Por favor, insira um e-mail válido.');
            hasError = true;
        }

        if (phone === '') {
            showError('phone', 'Por favor, preencha seu telefone.');
            hasError = true;
        }

        if (message === '') {
            showError('message', 'Por favor, digite sua mensagem.');
            hasError = true;
        }

        // Se não houver erros, mostra a mensagem de sucesso e limpa o formulário
        if (!hasError) {
            showSuccessMessage();
            contactForm.reset();
        }
    });

    function showError(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback-custom';
        errorDiv.innerText = errorMessage;
        
        const oldError = field.parentNode.querySelector('.invalid-feedback-custom');
        if (oldError) oldError.remove();

        field.parentNode.insertBefore(errorDiv, field.nextSibling);
        field.classList.add('is-invalid');
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.invalid-feedback-custom');
        errorMessages.forEach(error => error.remove());

        const invalidFields = document.querySelectorAll('.is-invalid');
        invalidFields.forEach(field => field.classList.remove('is-invalid'));
        
        if (successMessage) {
            successMessage.style.display = 'none';
        }
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function showSuccessMessage() {
        if (successMessage) {
            successMessage.style.display = 'block';
        }
    }
});