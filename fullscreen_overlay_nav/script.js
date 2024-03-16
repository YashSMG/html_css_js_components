// Toggle overlay menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
});
