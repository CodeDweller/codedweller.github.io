document.getElementById('mode-switch').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    const modeIcon = document.querySelector('#mode-switch i');
    if (document.body.classList.contains('light-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});