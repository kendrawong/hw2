background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(40, 60), 110, 90);
  ellipse(random(width), random(height), random(20, 40));
}
