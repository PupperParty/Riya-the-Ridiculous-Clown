noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/2jg5TM0S/RRC.jpg');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("nose x =" + noseX);
      console.log("nose y =" + noseY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
fill(0, 100, 150);
stroke(0, 100, 151);
circle(noseX, noseY, 21);
image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myCLownImage.png')
}