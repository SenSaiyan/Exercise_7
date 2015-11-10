//dan shiffman youtube
//I guess I'll do weather now like everyone else
//data=[];
var data;
var dis=50;
var map;
//var x;
//var y;

function preload(){
    map=loadImage("data/map.png");
}

function setup(){
    createCanvas(1200,800);
    //data=loadJSON("CardBacks.json");//turns out the hearthstone api doesnt have any real numbers to work with anyway what a great game.
    //loadJSON('data/rats.json',gotData);
    data=loadJSON("http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=2de143494c0b295cca9337e1e96b00e0",gotData);
}

function draw(){
    background(map);
    coord();//circle over location
    thermo(); //red rectngle that has height based on temp
    pressure(); //gray rect that shrinks based on pressure
    humid(); //makes blue rect that has height based on humidity
    name();
}

function gotData(){
    city=data;
}

function coord(){
    fill(255);
    strokeWeight(1);
    ellipse(((width/2)+(data.coord.lon*3)),((height/2)+(data.coord.lat*-4)),50,50);
}

function thermo(){
    fill(255,0,0);
    rectMode(CENTER);
    rect(((width/2)+(data.coord.lon*3)+50),((height/2)+(data.coord.lat*-4)),20,data.main.temp/15);
}

function pressure(){
    fill(100);
    strokeWeight(1);
    rectMode(CENTER);
    rect(((width/2)+(data.coord.lon*3)),((height/2)+(data.coord.lat*-4)-50), 90000/data.main.pressure,20);
}

function humid(){
    fill(0,0,150);
    strokeWeight(1);
    rectMode(CENTER);
    rect(((width/2)+(data.coord.lon*3)-50),((height/2)+(data.coord.lat*-4)),20, data.main.humidity/2);
}

function name(){
    text(data.name,((width/2)+(data.coord.lon*3)-20),((height/2)+(data.coord.lat*-4)+25),800,800);
}

//Below here lies the remains of failed code from the past. May god have mercy on their souls.

/*function ground(){ 
    fill(0,255,0);
    ellipse(width/2,1000,2000,1000); //big green circle
}

function thermo(){
    fill(255,0,0);
    rectMode(CENTER);
    rect(50,height/2,20, data.main.temp);
}

function tree(){
    for(var i=0;i<=data.length; i++){
        for(x=0; x<=data.length; i+10){
            x=x+dis;
            ellipse(x+100,(height/i)+10,20,20);
        }
        
    }
}




//haha this was a pain :^)
/*function gotData(data){
    //console.log(data.length);
    println(data);
}*/
/*
//how can i log the number of times it says a boro name?
function countBronx(){
    var String=data;
    
    fill(0,100,200);
    rectMode(CENTER);
    strokeWeight(1);
    rect(100,height/2,50,console.log((data.match(/BRONX/g)||[]).length));
    //(mainStr.split(",").length - 1) //another way to count~~
}

function countManhattan(){
    var String=data;
    
    fill(100,0,200);
    rectMode(CENTER);
    strokeWeight(1);
    rect(200,height/2,50,console.log((data.match(/MANHATTAN/g)||[]).length));
}

function countQueens(){
    var String=data;
    
    fill(200,100,0);
    rectMode(CENTER);
    strokeWeight(1);
    rect(300,height/2,50,console.log((data.match(/QUEENS/g)||[]).length));
}

function countBrooklyn(){
    var String=data;
    
    fill(200,0,100);
    rectMode(CENTER);
    strokeWeight(1);
    rect(400,height/2,50,console.log((data.match(/BROOKLYN/g)||[]).length));
}

function countSI(){
    var String=data;
    
    fill(0,200,100);
    rectMode(CENTER);
    strokeWeight(1);
    rect(500,height/2,50,console.log((data.match(/STATEN ISLAND/g)||[]).length));
}
*/