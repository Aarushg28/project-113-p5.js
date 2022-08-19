function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    stroke('blue');
    strokeWeight(2.5);
    line(20,10,580,10);
    line(580,10,580,380);
    line(20,10,20,380);
    line(20,380,580,380);
    
    circle(20,13,20);
    circle(580,13,20);
    circle(20,380,20);
    circle(580,380,20);
    image(video, 125, 75, 350, 250);
}

function takesnapshot(){
    save('snapshot.png');

}