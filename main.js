function preload(){
}


function setup() {
    canvas = createCanvas (400, 300);
        canvas.center();
        videos = createCapture (VIDEO);
        videos.size(300, 300);
        videos.hide();
}
function draw(){
    image(videos,0,0,400,300);
}

function snapshot(){
    save("mustacheFilterImage.jpg");
}