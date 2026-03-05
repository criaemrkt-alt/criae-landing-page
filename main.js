// Executa quando o DOM é carregado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Effect para Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animações Reveal no Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));


    // 3. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Fecha todos os outros abertos se quiser (accordion estilo 1 por vez)
            /*
            faqQuestions.forEach(q => {
                if(q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });
            */

            // Toggle do question atual
            question.classList.toggle('active');

            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

});
