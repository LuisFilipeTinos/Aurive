document.addEventListener('DOMContentLoaded', () => {
  
  const iconMission = document.getElementById('icon-mission');
  const iconValues = document.getElementById('icon-values');

  const iconsIntegration = document.getElementsByClassName('icon-contact');

  if (window.screen.width >= 800) {
    iconMission.classList.remove('fa-xl');
    iconMission.classList.add('fa-2xl');

    iconValues.classList.remove('fa-xl');
    iconValues.classList.add('fa-2xl');

    for (const element of iconsIntegration) {
      element.classList.remove('fa-2x');
      element.classList.add('fa-3x');
    }
  }
  else {
    iconMission.classList.remove('fa-2xl');
    iconMission.classList.add('fa-xl');

    iconValues.classList.remove('fa-2xl');
    iconValues.classList.add('fa-xl');

    for (const element of iconsIntegration) {
      element.classList.remove('fa-3x');
      element.classList.add('fa-2x');
    }
  }
      
  
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.2 // porcentagem visível do elemento
  });

  elements.forEach(el => observer.observe(el));

  fetch('images.json')
    .then(res => res.json())
    .then(images => {
      const gallery = document.querySelector('.image-gallery');
      const fragment = document.createDocumentFragment();

      images.forEach(src => {
        const img = document.createElement('img');
        img.classList.add('product-image');
        img.src = src;
        img.loading = 'lazy';
        fragment.appendChild(img);
      })

      gallery.appendChild(fragment);
    });

    //Lógica de contato com o WhatsApp
    const numeroWhatsApp = "5514997958402";
    const mensagemWhatsApp = encodeURIComponent("Olá! Gostaria de ver mais semijoias.");

    const urlWhatsApp = `whatsapp://send?phone=${numeroWhatsApp}&text=${mensagemWhatsApp}`;
    const urlNavegador = `https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`;

    document.getElementById("link-whatsapp").addEventListener("click", function (e) {
        e.preventDefault();

        // Tenta abrir o app
        window.location.href = urlWhatsApp;

        // Se não abrir (WhatsApp não instalado), cai no link web
        setTimeout(() => {
            window.location.href = urlNavegador;
        }, 1500);
    });

    //Lógica de contato com o Instagram
    const username = "aurivesemijoias";

    const urlInstagramApp = `instagram://user?username=${username}`;
    const urlInstagramWeb = `https://www.instagram.com/${username}/`;

    document.getElementById("link-instagram").addEventListener("click", function (e) {
        e.preventDefault();

        // Tenta abrir o app
        window.location.href = urlInstagramApp;

        // Fallback para web se o app não existir
        setTimeout(() => {
            window.location.href = urlInstagramWeb;
        }, 1500);
    });

    //Lógica de contato via E-mail
    const email = "contato@aurivesemijoias.com.br";
    const assunto = encodeURIComponent("Contato");
    const mensagem = encodeURIComponent("Olá! Gostaria de ver mais semijoias.");

    const mailto = `mailto:${email}?subject=${assunto}&body=${mensagem}`;

    document.getElementById("link-email").href = mailto;

    var map = L.map('map').setView([-22.36585377427675, -48.38373421080305], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([-22.36585377427675, -48.38373421080305]).addTo(map);
});