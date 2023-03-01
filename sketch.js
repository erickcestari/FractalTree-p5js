function setup() {
  createCanvas(1600, 1600);
  slider = createSlider(-TWO_PI, TWO_PI, PI/4, 0.0001)
  x = random(0.01, 2)
  y = random(0.01, 2)
  z = random(1, 1.4)
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
}

function draw() {
  background(255);
  angle = slider.value()
  translate(width/2,height/2 )
  branch(100 * z)
}

function branch(len){
  stroke(r  /2,g /2 ,b / 2)
  if(len < 12){
    stroke(r,g,b)
  }
  line(0,0,0,-len)
  translate(0, -len)
  
  if(len > 4){
    push()
    rotate(angle * y)
    branch(len * 0.71)
    pop()
    push()
    rotate(-angle * x)
    branch(len * 0.71)
    pop()
  }
  
}