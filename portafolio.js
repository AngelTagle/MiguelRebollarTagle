const lightThemeButton = document.getElementById('light-theme');
const darkThemeButton = document.getElementById('dark-theme');
const body = document.body;

lightThemeButton.addEventListener('click', () => {
    body.classList.remove('dark');
    body.classList.add('light');
});

darkThemeButton.addEventListener('click', () => {
    body.classList.remove('light');
    body.classList.add('dark');
});