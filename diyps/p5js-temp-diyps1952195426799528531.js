var img;
var initials ='tv'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('shiba.png');
}

function setup() {
createCanvas(1920, 1080);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    fill(140, 85, 245, 96);
    circle(mouseX, mouseY, 10, 10);
    
  } else if (toolChoice == '2') { // second tool
    fill(29, 158, 250, 98);
    rect(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool
    stroke(35, 153, 84, 60);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') {
    fill(250, 154, 1, 98);
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
    stroke(100, 56, 218, 96);
    testbox(50, 252, 150);
    testbox(200, 50, 252);
    
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
    stroke(0,0,200);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') {
    fill(245, 191, 243, 96);
    circle(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '8') {
    fill(100, 100, 0, 80);
    arc(mouseX, mouseY, 50, 50,0, HALF_PI);
    
  } else if (toolChoice == '9') {
    fill(150, 200, 0, 80);
    arc(mouseX, mouseY, 70, 40, 0, PI+QUARTER_PI);
    
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    circle(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 121, 100);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  ellipse(x-50, y-50, 50, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
