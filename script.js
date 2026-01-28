// Simple floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 1000); // One heart every second