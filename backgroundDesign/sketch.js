//3 Tuning the window using more variables

function setup() {
  createCanvas(displayWidth, displayWidth);
  noFill();
  noStroke();
  frameRate(1);
}

function draw() {
  background(255);

  var windowPane = 20; // padding around box array
  var num = 20; //number of boxes in an array
  var shift =random(-10, 10); //degree of shift in quad
  var space = 10; //space between squares

  translate(windowPane + space / 2, windowPane + space / 2); //padding (x,y) start point

  var sideLen = (displayWidth - 2 * windowPane) / num //length of  side of a box

  
  for (var x = 0; x < num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {

      fill(random(150, 255), random(150,255), random(150, 255));
      
      triangle(x + random(-shift, shift), y + random(-shift, shift), x + sideLen - space + random(-shift, shift), y + random(-shift, shift), x + sideLen - space + random(-shift, shift), y + sideLen - space + random(-shift, shift), x + random(-shift, shift), y + sideLen - space + random(-shift, shift));

    }
  }

}
