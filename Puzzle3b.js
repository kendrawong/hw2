//beginShape, vertex, endShape challenge

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(40), 110, 90);
  
beginShape(TRIANGLES);
vertex(random(width), random(height));
vertex(random(width), random(height));
vertex(random(width), random(height));
endShape(); 
}
