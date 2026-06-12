// Scroll suave para navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(
        this.getAttribute('href')
      );
  
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contadores animados
  const counters = [
    { id: 'counter1', end: 1200 },
    { id: 'counter2', end: 35 },
    { id: 'counter3', end: 500 }
  ];
  
  counters.forEach(counter => {
    const el = document.getElementById(counter.id);
  
    if (!el) return;
  
    let count = 0;
    const duration = 2000;
    const stepTime = duration / counter.end;
  
    const timer = setInterval(() => {
      count++;
      el.textContent = count;
  
      if (count >= counter.end) {
        clearInterval(timer);
        el.textContent = counter.end;
      }
    }, stepTime);
  });
  
  // MODO ESCURO
  const themeToggle = document.getElementById('theme-toggle');
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️ Modo Claro';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙 Modo Escuro';
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Salva preferência do usuário
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
  }