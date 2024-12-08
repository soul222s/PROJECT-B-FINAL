let base, tops, bottom, shoes, hat, backgroundImg, sock, startImage;
//initializes the clothing items
let currentTop = -1, currentBottom = -1, currentShoes = -1, currentHat = -1, currentSock = -1;
//buttons for each category
let hatButtonImage, topButtonImage, bottomButtonImage, sockButtonImage, shoesButtonImage;
//initialize buttons
let buttonWidth = 1200, buttonHeight = 400;
let buttonX = 3150, buttonY = 100;  
//starting position for all buttons

//finish button
let finishButtonImage;
//home button (custom image)
let homeButtonImage;
//outfit state
let outfitReady = false;

let isHatButtonPressed = false;
let isTopButtonPressed = false;
let isBottomButtonPressed = false;
let isSockButtonPressed = false;
let isShoesButtonPressed = false;
//makes sure the buttons don't aimlessly scroll through

let currentScene = "start";  // Variable to track the current scene

function preload() {
  base = loadImage("assets/base.PNG");
  hat = [loadImage("assets/hat1.PNG"), loadImage("assets/hat2.PNG")];
  tops = [loadImage("assets/top1.PNG"), loadImage("assets/top2.PNG"), loadImage("assets/top3.PNG"), loadImage("assets/top3(1).PNG"), loadImage("assets/top4.PNG")];
  bottom = [loadImage("assets/bot1.PNG"), loadImage("assets/bot2.PNG"), loadImage("assets/bot3.PNG"), loadImage("assets/bot3(1).PNG"), loadImage("assets/bot4.PNG")];
  shoes = [loadImage("assets/shoe1.PNG"), loadImage("assets/shoe2.PNG"), loadImage("assets/shoe3.PNG"), loadImage("assets/shoe4.PNG"), loadImage("assets/shoe5.PNG")];
  sock = [loadImage("assets/sock1.PNG"), loadImage("assets/sock2.PNG"), loadImage("assets/sock3.PNG"), loadImage("assets/sock4.PNG"), loadImage("assets/sock5.PNG")];
  backgroundImg = loadImage("assets/background.PNG"); 
  hatButtonImage = loadImage("assets/hatarrow.PNG");
  topButtonImage = loadImage("assets/toparrow.PNG");
  bottomButtonImage = loadImage("assets/bottomarrow.PNG");
  sockButtonImage = loadImage("assets/sockarrow.PNG");
  shoesButtonImage = loadImage("assets/shoearrow.PNG");
  finishButtonImage = loadImage("assets/finishButton.jpg");
  homeButtonImage = loadImage("assets/home.png"); // Custom home button image
  startImage = loadImage("assets/startscreen.PNG");
  //preloads all of the custom images
  //As of December 3rd I have split off from my group to finish this project on my own.
}

function setup() {
  createCanvas(4776, 2388);
}

function draw() {
  if (currentScene === "start") {
    //show start screen image
    image(startImage, 0, 0, width, height);
    
    //detect click to transition to the dress-up game scene
    if (mouseIsPressed) {
      currentScene = "game";  
      //switch to the game scene when the screen is clicked
    }
  } else if (currentScene === "game") {
    //show background and character base
    image(backgroundImg, 0, 0, width, height);  
    if (base) {
      image(base, 1554, 100); 
    }

    //make the buttons for each category
    if (!outfitReady) {
      image(hatButtonImage, buttonX, buttonY, buttonWidth, buttonHeight); 
      if (mouseIsPressed && mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY && mouseY <= buttonY + buttonHeight && !isHatButtonPressed) {
        currentHat = (currentHat + 1) % hat.length;  
        isHatButtonPressed = true;
      }

      image(topButtonImage, buttonX, buttonY + 470, buttonWidth, buttonHeight); // Top button
      if (mouseIsPressed && mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY + 470 && mouseY <= buttonY + 470 + buttonHeight && !isTopButtonPressed) {
        currentTop = (currentTop + 1) % tops.length; 
        isTopButtonPressed = true;
      }

      image(bottomButtonImage, buttonX, buttonY + 940, buttonWidth, buttonHeight); 
      if (mouseIsPressed && mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY + 940 && mouseY <= buttonY + 940 + buttonHeight && !isBottomButtonPressed) {
        currentBottom = (currentBottom + 1) % bottom.length;  
        isBottomButtonPressed = true;
      }

      image(sockButtonImage, buttonX, buttonY + 1410, buttonWidth, buttonHeight); 
      if (mouseIsPressed && mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY + 1410 && mouseY <= buttonY + 1410 + buttonHeight && !isSockButtonPressed) {
        currentSock = (currentSock + 1) % sock.length;  
        isSockButtonPressed = true;
      }

      image(shoesButtonImage, buttonX, buttonY + 1880, buttonWidth, buttonHeight);
      if (mouseIsPressed && mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY + 1880 && mouseY <= buttonY + 1880 + buttonHeight && !isShoesButtonPressed) {
        currentShoes = (currentShoes + 1) % shoes.length;  
        isShoesButtonPressed = true;
      }
    }

    //show selected items on the character
    if (currentBottom !== -1) {
      image(bottom[currentBottom], 1554, 100);  
    }
    
    if (currentSock !== -1) {
      image(sock[currentSock], 1554, 100);  
    }
    
    if (currentShoes !== -1) {
      image(shoes[currentShoes], 1554, 100);  
    }
    
    if (currentTop !== -1) {
      image(tops[currentTop], 1554, 100);  
    }
    
    if (currentHat !== -1) {
      image(hat[currentHat], 1554, 100);  
    }

    //draw and register click on the finish button
    image(finishButtonImage, 200, height - 150, 300, 100);  
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 200 + 300 && mouseY >= height - 150 && mouseY <= height - 150 + 100) {
      finishOutfit(); 
    }

    //draw and register click on the home button (custom image)
    image(homeButtonImage, width - 350, height - 350, 300, 300);  // Increased the height to 300 pixels
    if (mouseIsPressed && mouseX >= width - 350 && mouseX <= width - 350 + 300 && mouseY >= height - 350 && mouseY <= height - 350 + 300) {
      resetOutfit();  // Reset the outfit when home button is clicked
    }

    if (outfitReady) {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text('Outfit Complete!', width / 2, height - 50);
    }
  }
}

function mouseReleased() {
  isHatButtonPressed = false;
  isTopButtonPressed = false;
  isBottomButtonPressed = false;
  isSockButtonPressed = false;
  isShoesButtonPressed = false;
  //makes sure the buttons don't aimlessly scroll when you click them
}

function finishOutfit() {
  console.log("Finish button clicked!");
  outfitReady = true;  //let you finish the outfit
}

function resetOutfit() {
  console.log("Home button clicked!");
  //reset all items to -1 so you can start over
  currentTop = -1;
  currentBottom = -1;
  currentShoes = -1;
  currentHat = -1;
  currentSock = -1;
  outfitReady = false;  
  //home button  resets the game
}
