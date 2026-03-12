const btnMobile = document.querySelector('#btn-mobile');
const nav = document.getElementById('nav');

if (btnMobile) {
  btnMobile.addEventListener('click', function toggleMenu() {
    nav.classList.toggle('active');
  });
}

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

let darkmode = localStorage.getItem('darkmode');
const trocaTema = document.getElementById('trocatema');

// Função para ativar o Dark Mode
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

// Função para desativar o Dark Mode
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive'); 
};

if (darkmode === 'active') {
  enableDarkmode();
}

// Evento de clique no botão de troca de tema
if (trocaTema) {
  trocaTema.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'active') {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });
}

document.querySelectorAll('.scroll-interno').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = anchor.getAttribute('href');
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
