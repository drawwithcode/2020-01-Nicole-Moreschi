function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("black");
  angleMode(DEGREES);
}

function draw() {

//1
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6, width/6);
  rotate(frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
    noLoop();
  }

  //2b
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6 + width/6, width/6 + width/6);
  rotate(frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

//2
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6 + width/6, width/6);
  rotate(-frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //3
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6 + 2*width/6, width/6);
  rotate(frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //4b
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6 + 3*width/6, width/6 + width/6);
  rotate(frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //4
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/180));

  push();
  translate(width/6 + 3*width/6, width/6);
  rotate(-frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //5
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/120));

  push();
  translate(width/6 + 4*width/6, width/6);
  rotate(frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //1b
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/120));

  push();
  translate(width/6, width/6 + width/6);
  rotate(- frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //3b
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/120));

  push();
  translate(width/6 + 2*width/6, width/6 + width/6);
  rotate(-frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

  //5b
  noFill();
  stroke(lerpColor(color("black"),color("#FF3838"),frameCount/120));

  push();
  translate(width/6 + 4*width/6, width/6 + width/6);
  rotate(-frameCount * 2);
  translate(width/12, 0);
  ellipse(0, 0, width/6);
  pop();

  if(frameCount == 180){
  noLoop();
  }

}
