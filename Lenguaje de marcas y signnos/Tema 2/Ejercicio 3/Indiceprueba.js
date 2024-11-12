function toggleMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
}

function toggleMenu(id) {
    const submenu = document.getElementById(id);

    // Alternar la clase "open"
    if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
    } else {
        submenu.classList.add('open');
    }
}
