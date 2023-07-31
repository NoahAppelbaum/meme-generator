

const form = document.querySelector('#meme-form');
const zone = document.querySelector('#meme-zone');

//counter for textcolor class assignment
textNumber = 0;


//make memes from form:

form.addEventListener("submit", e => {
  e.preventDefault();

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
  // newMeme.style.width = image.naturalWidth;

  let topText = document.createElement('p');
  topText.innerText = topTextInput;
  topText.classList.add("meme-text", "top-text", `text-num-${textNumber}`);

  let botText = document.createElement('p');
  botText.innerText = botTextInput;
  botText.classList.add("meme-text", "bot-text", `text-num-${textNumber}`);

  //set text color
  let texts = document.querySelectorAll(`.text-num-${textNumber}`);
  for (let el of texts) {
    el.style.color = textColor;
  }

  textNumber++;

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
  });

  newMeme.appendChild(image);
  newMeme.appendChild(topText);
  newMeme.appendChild(botText);
  newMeme.appendChild(closebox);


  zone.appendChild(newMeme);

  form.reset();

});
