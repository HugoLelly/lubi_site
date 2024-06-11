const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Verifica se o modo escuro está ativado no armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Define o estado inicial do toggleButton com base no armazenamento local
toggleButton.checked = isDarkMode;
body.classList.toggle('dark_mode', isDarkMode);

// Adiciona um ouvinte de evento para detectar mudanças no toggleButton
toggleButton.addEventListener('change', () => {
    const darkModeEnabled = toggleButton.checked;

    // Atualiza a classe do corpo para alternar entre os modos claro e escuro
    body.classList.toggle('dark_mode', darkModeEnabled);

    // Salva o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', darkModeEnabled);
});

