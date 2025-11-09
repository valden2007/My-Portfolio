// Получаем элементы
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Функция для переключения темы
function toggleTheme() {
  body.classList.toggle('dark-theme');
  
  // Сохраняем состояние темы
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Обработчик клика
themeToggle.addEventListener('click', toggleTheme);

// Загружаем сохранённую тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
});