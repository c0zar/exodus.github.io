document.addEventListener("DOMContentLoaded", () => {

    // 1. INITIALISATION DES ICÔNES
    lucide.createIcons();

    // 2. SÉLECTION DES ÉLÉMENTS
    const reveals = document.querySelectorAll(".reveal, .concept-card, .timeline-item");
    const navbar = document.querySelector(".navbar");
    const form = document.getElementById("nexus-form");

    // 3. FONCTION DE SCROLL (APPARITION + EFFET LUMINEUX MOBILE)
    const handleScrollEffects = () => {
        const windowHeight = window.innerHeight;

        // Gestion de la Navbar (fond opaque au scroll)
        navbar.classList.toggle("scrolled", window.scrollY > 50);

        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();

            // Effet d'apparition standard (Reveal)
            if (rect.top < windowHeight - 100) {
                el.classList.add("active");
            }

            // EFFET LUMINEUX MOBILE (S'allume quand le bloc est au centre de l'écran)
            if (window.innerWidth < 900) {
                // Si le bloc est entre 20% et 60% de la hauteur de l'écran
                if (rect.top > windowHeight * 0.2 && rect.top < windowHeight * 0.6) {
                    el.classList.add("glow-active");
                } else {
                    el.classList.remove("glow-active");
                }
            }
        });
    };

    // 4. GESTION DU TOUCHER (MOBILE)
    // Permet d'allumer un bloc instantanément quand on le touche
    document.querySelectorAll('.concept-card, .timeline-item').forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.add('glow-active');
        }, {passive: true});
        
        item.addEventListener('touchend', () => {
            // On laisse l'effet 1 seconde après le retrait du doigt
            setTimeout(() => item.classList.remove('glow-active'), 1000);
        }, {passive: true});
    });

    // 5. GESTION DU FORMULAIRE
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Accès en cours d'initialisation... Analyse algorithmique lancée.");
            form.reset();
        });
    }

    // 6. ÉCOUTEURS D'ÉVÉNEMENTS
    window.addEventListener("scroll", handleScrollEffects);
    
    // Lancer une première fois pour les éléments déjà visibles au chargement
    handleScrollEffects();
});