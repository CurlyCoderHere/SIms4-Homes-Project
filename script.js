function openLightbox(imageSource) {
  // point of this function is to take an image that was clicked and put it inside the modal

  //get html element that has the id of Lightbox and the element that has the id of modal-content
  const modal = document.querySelector("#Lightbox");
  const modalContent = document.querySelector(".modal-content");

  //create a new element that will be the div to hold an image that will be inserted into the browser's representation of the html document
  const imageContainer = document.createElement("div")
  //give the image container (div) a class of slide
  imageContainer.className = "slide";

  //use the innerHTML method from the Document Object Model to dynamically insert an image tag into the div stored in the imageContainer variable
  imageContainer.innerHTML = `<img width = "800px" height = "600px" src = ${imageSource} alt = "" />`

  //add the div stored inside the imageContainer variable the html element with the od of module-content that you stored at the beginning
  modalContent.append(imageContainer);
  
  //change the css display property of the html element with the id of Lightbox from none to block to allow it to be seen on the page
  modal.style.display = "block";
}

function closeLightbox() {
    //switch the html element with the id of Lightbox display property from block back to none so that it will not be seen on the page
    document.getElementById("Lightbox").style.display = "none";

    //get the html element with the class of modal-content and store it into a variable
    const modalContent = document.querySelector(".modal-content")

    //use the .children method provided by the Document Object Model to get the access to the html elements nested inside of it

    //.children method returns an collection of html elements that use the same index position system as an array so you can use index numbers to get access to certain nested html elements

    //Use .children[1] to remove the image that you added into the modal whenever it is closed to avoid the bug of having more than one image inside at once
    modalContent.children[1].remove();
}

