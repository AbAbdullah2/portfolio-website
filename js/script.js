document.getElementById('welcome').addEventListener('click', function() {
    var intro = document.getElementById('d');
    intro.classList.remove('animation-bigger');
    void intro.offsetWidth;
    intro.classList.add('animation-bigger');
});
