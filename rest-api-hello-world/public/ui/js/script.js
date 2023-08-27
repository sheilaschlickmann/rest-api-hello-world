const helloWorld = document.getElementById('hello-world');

function animateHelloWorld() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    helloWorld.style.color = color;
}

setInterval(animateHelloWorld, 1000);
