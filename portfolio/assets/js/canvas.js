import { Renderer } from "./renderer.js";

export let canvas = document.getElementById("header-canvas");
let canvasCtx = canvas.getContext("2d");
let lastTime = 0;
onResize();

let renderer = new Renderer(canvas.width, canvas.height, 50);

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = canvas.width / window.devicePixelRatio + "px";
    canvas.style.height = canvas.height / window.devicePixelRatio + "px";
}


function clearCanvas() {
    //canvasCtx.fillStyle = "#00000055";
    //canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}

function update(deltaTime) {
    deltaTime /= 1000; //DeltaTime is in milliseconds !
    renderer.agents.forEach(a => {
        a.x += a.velocity.x * deltaTime;
        a.y += a.velocity.y * deltaTime;
        if(a.x <= 0)
            a.x = canvas.width;
        else if(a.x >= canvas.width)
            a.x = 0;

        if(a.y <= 0)
            a.y = canvas.height;
        else if(a.y >= canvas.height)
            a.y = 0;
        /*
        if(a.x <= 0)
            a.velocity.x = Math.abs(a.velocity.x);
        else if(a.x >= canvas.width)
            a.velocity.x = -Math.abs(a.velocity.x);

        if(a.y <= 0)
            a.velocity.y = Math.abs(a.velocity.y);
        else if(a.y >= canvas.height)
            a.velocity.y = -Math.abs(a.velocity.y);
        */
    });
}

function tick(timestamp) {
    clearCanvas();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    update(deltaTime);
    renderer.draw(canvasCtx);
    requestAnimationFrame(tick);
}

function main() {
    
    canvasCtx.imageSmoothingEnabled = false;
    window.addEventListener("resize", onResize);
    
    window.requestAnimationFrame(tick);
}

main();
