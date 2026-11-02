document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');

    const updateActiveLink = () => {
        let current = 'hello';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 180) current = section.id;
        });
        links.forEach(link => {
            link.classList.toggle('active', link.hash === `#${current}`);
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
});
