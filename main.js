input_value="";
status1="";
function disappear(){
document.getElementById("input_thing").style.visibility="hidden";
}
disappear();
function appear(){
if(document.getElementById("please").innerHTML == "Press here to make the input disappear"){
document.getElementById("input_thing").style.visibility="hidden";
document.getElementById("please").innerHTML="Press here to make the input appear";
document.getElementById("please").style.color="red";
}
else{
document.getElementById("input_thing").style.visibility="visible";
document.getElementById("please").innerHTML="Press here to make the input disappear";
document.getElementById("please").style.color="green";
}
}
function preload(){
}
function setup(){
canvas = createCanvas(190, 190);
canvas.position(650, 400);
video= createCapture(VIDEO);
video.hide();
}
function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("statusofmodel").innerHTML = "Status: Detecting objects";
input_value = document.getElementById("input_thing").value;
}
function modelLoaded(){
console.log("Model Loaded!");
status1 = true;
}    
function draw(){
image(video, 0, 0, 190, 190);
}