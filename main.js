noseX=0;
noseY=0;

function preload(){
    lip=loadImage("snipped lip.png");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(lip, noseX-25, noseY+20, 50, 20);
}
function take_snap(){
    save('filterImage.png')
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x position- " + results[0].pose.nose.x);
        console.log("nose y position- " + results[0].pose.nose.y);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
    }
}