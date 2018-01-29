function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), random(width), random(height));

//orange
if (random(width) <= 100 ){
  stroke(255, 178, 102);
  }

//green
if (random(width) > 100 && random(width) <= 200){
  stroke(178, 255, 102);
  }

//purple
if (random(width) > 200 && random(width) <= 340){
  stroke(178, 102, 255);
  }
}
