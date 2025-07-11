window.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu que encolhe/aparece ao rolar a página
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Rolando para Cima
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Rolando para Baixo
            mainNav.classList.remove('is-visible');
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    // --- NOVA LÓGICA PARA O MENU MOBILE ---
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            if (navbarMenu) {
                navbarMenu.classList.toggle('is-open');
            }
        });
    }
});