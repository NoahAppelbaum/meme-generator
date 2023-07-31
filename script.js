

const form = document.querySelector('#meme-form');
const zone = document.querySelector('#meme-zone');
let emptyMessage = document.querySelector('#empty-message');



//make memes from form:

form.addEventListener("submit", e => {
  e.preventDefault();

  //clear empty message, error message
  emptyMessage.classList.add('gone');
  extantError = document.querySelector('.error-message');
  if (extantError) {
    extantError.parentNode.remove();
  }


  //get input values from form

  let imgURL = document.querySelector('#url-input').value;
  let topTextInput = document.querySelector("#top-input").value;
  let botTextInput = document.querySelector("#bot-input").value;
  let textColor = document.querySelector('#text-color-input').value;


  //make meme!

  let newMeme = document.createElement('div');
  newMeme.classList.add("meme");

  let image = document.createElement('img');
  image.src = imgURL;


  let topText = document.createElement('p');
  topText.innerText = topTextInput;
  topText.classList.add("meme-text", "top-text");
  topText.style.color = textColor;

  let botText = document.createElement('p');
  botText.innerText = botTextInput;
  botText.classList.add("meme-text", "bot-text");
  botText.style.color = textColor;

  let closebox = document.createElement('i');
  closebox.innerHTML = '&#x2718;';
  closebox.classList.add("closebox", "hidden");

  //closebox hover visibility
  newMeme.addEventListener('mouseover', function () {
    closebox.classList.toggle('hidden');
  });
  newMeme.addEventListener('mouseout', function () {
    closebox.classList.toggle('hidden');
  });

  //delete memes
  closebox.addEventListener('click', function () {
    this.parentNode.remove();
    //and check for empty to restore message:
    if (zone.children.length < 2) {
      emptyMessage.classList.remove('gone');
    }
  });

  newMeme.appendChild(image);
  newMeme.appendChild(topText);
  newMeme.appendChild(botText);
  newMeme.appendChild(closebox);

  zone.appendChild(newMeme);

  form.reset();

  // I Can Haz Error Handling on image load?
  // Can't try/catch if I don't know where in the process the error comes from
  // Or can I catch errors that occur as events? More research...later
  image.addEventListener('error', function () {
    let errorMessage = document.createElement('p');
    errorMessage.classList.add('zone-text', 'error-message');
    errorMessage.innerText = "Image failed to load. Still hungry :(";

    newMeme.appendChild(errorMessage);
    zone.appendChild(newMeme);

    //Error is apparently happening *after* the page renders?
    //I can't stop these things from being added by returning the parent (meme-creation) fuction early
    //soooo I have to remove them after the fact. Gotta be a better way!
    topText.remove();
    botText.remove();
    image.remove();
  });

});
