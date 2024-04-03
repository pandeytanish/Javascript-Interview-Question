function addNewElement() {
    // Create a new paragraph element
    var newElement = document.createElement("p");
    
    // Add some text to the paragraph
    newElement.textContent = "This is a new element";
    
    // Append the new paragraph to the container
    document.getElementById("container").appendChild(newElement);
  }