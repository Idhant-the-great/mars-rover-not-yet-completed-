canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var roverwidth = 100;

var roverheight = 100;

var rover_x = 10;

var rover_y = 10;

images=["mars.jpg","pic 1.jfif","pic 2.jfif","pic 3.jpg"];

imagenumber=Math.floor(Math.random()*4);

var background_picture = images[imagenumber];

var rover_picture = "rover.png";

function add() {
    backround_imgTag = new Image();
    backround_imgTag.onload = backgroundUpload;
    backround_imgTag.src = background_picture;

    rover_imgTag = new Image();
    rover_imgTag.onload = roverUpload;
    rover_imgTag.src = rover_picture;
}

function backgroundUpload() {
    ctx.drawImage(backround_imgTag, 0, 0, canvas.width, canvas.height);
}

function roverUpload() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, roverwidth, roverheight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y>=0){
        rover_y = rover_y-10;
        console.log("x="+rover_x+" y="+rover_y);
        roverUpload();
        backgroundUpload();
    }
}

function down() {
    if (rover_y<=400){
        rover_y = rover_y+10;
        console.log("x="+rover_x+" y="+rover_y);
        roverUpload();
        backgroundUpload();
    }
}

function right() {
    if (rover_x<700){
        rover_x = rover_x+10;
        console.log("x="+rover_x+" y="+rover_y);
        roverUpload();
        backgroundUpload();
    }
}

function left() {
    if (rover_x>=0){
        rover_x = rover_x-10;
        console.log("x="+rover_x+" y="+rover_y);
        roverUpload();
        backgroundUpload();
    }
}