// Initialize game variables
let surferX = 80;
let surferY = 80;
let waveX = 0;
let score = 0;

// Update game state
game.onUpdate(function () {
    // Move the surfer left or right based on input
    if (controller.left.isPressed()) {
        surferX -= 2;
    } else if (controller.right.isPressed()) {
        surferX += 2;
    }

    // Move the wave from right to left
    waveX -= 1;

    // Check for collision with the wave
    if (waveX < surferX + 16 && waveX + 16 > surferX && 80 === surferY) {
        // Collision occurred, game over
        game.over();
    }

    // Increase score as time passes
    score += 1;
});

// Render game graphics
game.onPaint(function () {
    // Clear the screen
    screen.fillRect(0, 0, screen.width, screen.height, 0);

    // Draw the surfer
    screen.fillRect(surferX, surferY, 16, 16, 9);

    // Draw the wave
    screen.fillRect(waveX, 96, 16, 16, 2);

    // Display the score
    screen.print("Score: " + score, 10, 10, 1);
});

// Start the game
game.stats();

