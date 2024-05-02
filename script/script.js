const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Verifica se o modo escuro está ativado no armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Define o estado inicial do toggleButton com base no armazenamento local
toggleButton.checked = isDarkMode;
body.classList.toggle('dark_mode', isDarkMode);

toggleButton.addEventListener('change', () => {
    const darkModeEnabled = toggleButton.checked;
    body.classList.toggle('dark_mode', darkModeEnabled);

    // Salva o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', darkModeEnabled);
});


