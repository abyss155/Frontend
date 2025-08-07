const collegeNameHeadingElement = document.getElementById('heading1');

// Change inner text
collegeNameHeadingElement.innerHTML = "KIIT";

// Inline style changes
collegeNameHeadingElement.style.backgroundColor = "blue";
collegeNameHeadingElement.style.color = "white";

// Set property using style.setProperty (overrides the above)
collegeNameHeadingElement.style.setProperty("background-color", "rgb(255, 165, 0)");

// Add class from CSS to apply predefined style
collegeNameHeadingElement.classList.add("college-title");
