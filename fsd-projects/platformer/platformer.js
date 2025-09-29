$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
createPlatform (350,550,100,50, "blue");
    createPlatform (1050,650,100,
    50);
    createPlatform (700,550,100,50, "pink");
    createPlatform (150,650,100,50);
    createPlatform (700,550,100,50, "yellow");

    // TODO 3 - Create Collectables
createCollectable ("kennedi", 700,350,0.5,0.7);
createCollectable ("steve", 0,250,0.5,0.7);
createCollectable ("kennedi", 900,500,0.5,0.7);

    // TODO 4 - Create Cannons
createCannon ("right", 600,1400);
createCannon ("right", 780,1400);
createCannon ("bottom", 250,750);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
