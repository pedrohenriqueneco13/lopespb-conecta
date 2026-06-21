const INSTAGRAM_URL = 'https://www.instagram.com/distribuidora_lopespb?igsh=MXNkd29lMTN1Z3Ji';

const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const formContato = document.getElementById('formContato');
const formStatus = document.getElementById('formStatus');

function fecharMenuMobile() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
}

hamburger.addEventListener('click', () => {
  const menuAberto = navLinks.classList.toggle('open');
  hamburger.classList.toggle('is-open', menuAberto);
  hamburger.setAttribute('aria-expanded', String(menuAberto));
  hamburger.setAttribute('aria-label', menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', fecharMenuMobile);
});

formContato.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome) {
    formStatus.textContent = 'Por favor, informe seu nome antes de abrir o Instagram.';
    document.getElementById('nome').focus();
    return;
  }

  let texto = `Mensagem organizada para enviar no Instagram:\n\nOlá, Distribuidora Lopes! Meu nome é ${nome}.`;

  if (categoria) {
    texto += ` Tenho interesse em ${categoria}.`;
  }

  if (mensagem) {
    texto += ` Mensagem: ${mensagem}`;
  }

  formStatus.textContent = 'Mensagem organizada. O Instagram oficial será aberto em uma nova guia.';
  console.log(texto);
  window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar-principal');
  nav.style.borderBottomColor = window.scrollY > 50 ? '#444' : 'var(--cinza-borda)';
});
