function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    // Increase the number of stars to 1000
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();




// /**
//  * Function to create and add stars to the background
//  */
// function createStars() {
//   // Select the body as the container for the stars
//   const container = document.querySelector("body");

//   // Loop to generate 1000 stars
//   for (let i = 0; i < 1000; i++) { 
//     const star = document.createElement("div"); // Create a new star element
//     star.className = "star"; // Assign the "star" class for styling

//     // Set the size of the star (very small to resemble distant stars)
//     star.style.width = ".1px";
//     star.style.height = ".1px";

//     // Randomly position the star across the entire screen
//     star.style.top = Math.random() * 100 + "%";
//     star.style.left = Math.random() * 100 + "%";

//     // Append the star to the body
//     container.appendChild(star);
//   }
// }

// // Call the function to generate stars when the script runs
// createStars();



