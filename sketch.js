function setup() {
    createCanvas(450, 450);
     background("black"); 
  }
  
  function draw() {
      
     
  
    fill ("red");  stroke ("black");
    
    //console.log (mouseIsPressed);
    
    if (mouseIsPressed) {
    rect( mouseX, mouseY, 20, 35);
    }
  }