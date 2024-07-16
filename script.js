document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.bars').addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        document.querySelector('aside').classList.toggle('collapsed');
        const sideIcons = document.querySelectorAll('.side-icons p');
        sideIcons.forEach(icon => {
            icon.classList.toggle('hidden');
        });
    }

    const searchInput = document.querySelector('.search input');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector('.content h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
