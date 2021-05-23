const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hour;
var engine, world;
var backgroundImg;
var timeState
var bg ;

function preload() {
    // create getBackgroundImg( ) here
dayNightCycle();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
background(backgroundImg)
    // add condition to check if any background image is there to add
;getTimeState();
    Engine.update(engine);
   
    // write code to display time in correct format here
    stroke("black")
    strokeWeight(4)
    fill("grey")
    textSize(10);
    text("Time:"+hour,300,100 )
 

}

async function dayNightCycle(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var back=await response.json();
var dateTime=back.datetime
console.log(hour);
hour=dateTime.slice(11,13)
backgroundImg=loadImage(bg);
if(hour>=22&&hour==0){
bg="sunset12.png"    
}
else if(hour<=4&&hour>=6){
bg="sunrise1.png"
}
else if(hour>=5&&hour<7){
bg="sunrise2.png"
}
else if(hour==7){
bg="sunrise3.png"    
}
else if(hour>=8){
bg="sunrise4.png"
}
else if(hour>=12){
bg="sunrise5.png"    
}
else if(hour<=14){
bg="sunrise6.png"    
}
else if(hour<=17){
bg="sunset7.png";    
}
else if(hour==18){
 bg="sunset8.png"   
}
else if(hour==19){
bg="sunset10.png"    
}
else if(hour>=20){
bg="sunset11.png"    
}
}
   async function getTimeState(){
 if(hour==0 &&hour<=11){
timeState="a.m"
 }
else{
timeState="p.m"    
}
console.log(timeState);
}