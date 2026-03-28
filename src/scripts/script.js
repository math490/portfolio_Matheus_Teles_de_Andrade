const themes = ['default', 'light', 'hacker', 'win98'];
let currentThemeIndex = 0;

function setTheme(theme) {
    document.body.className = theme === 'default' ? '' : theme;
    const title = {
    'default': 'Tema atual: padrão do site',
    'light': 'Tema atual: claro',
    'hacker': 'Tema atual: hacker',
    'win98': 'Tema atual: Windows 98'
    };
    document.getElementById('themeToggle').title = title[theme];
}

function detectSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'default';
}

// Inicializa com tema default
const initialTheme = detectSystemTheme();
currentThemeIndex = themes.indexOf(initialTheme);
setTheme(themes[currentThemeIndex]);

document.getElementById('themeToggle').addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[currentThemeIndex]);
});