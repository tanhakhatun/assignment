//audio instance
let audio = new Audio();
audio.src='song.mp3'; //add audio file link
audio.controls = true;
audio.loop = true;
audio.autoplay = true;

let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_height, bar_width;

window.addEventListener("load", initmp3player(), false);

function initmp3player() {
    document.getElementById('audio_box').appendChild(audio);
    context =new AudioContext();
    analyser = context.createAnalyser();
    canvas = document.getElementById('f_analyser');
    ctx = canvas. getContext('2d');

    source = context.createMediaElementSource(audio);
    Source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
}
//frameLopper animation
function frameLooper(){
    window.webkitRequestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#03fc7f";
    bars = 50;
    for(var i=0; i<bars; i++) {
        bar_x = i * 3;
        bar_width=2;
        bar_height = -(fbc_array[i] / 2);

        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
}

