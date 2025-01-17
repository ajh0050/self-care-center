function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

var messageContainer = document.querySelector('.message-flex-container')
var receiveMessageButton = document.querySelector('.receive-message-button')
var affirmationRadio = document.querySelector('.affirmation-radio')
var mantraRadio = document.querySelector('.mantra-radio')
var clearMessageButton = document.querySelector('.clear-message-button')

receiveMessageButton.addEventListener('click', addMessage)
mantraRadio.addEventListener('click', unselectAffirmation)
affirmationRadio.addEventListener('click', unselectMantra)
clearMessageButton.addEventListemer('click', clearMessage)

function clearMessage(event){
  event.preventDefault();
  messageContainer.innerHTML =`<img src='assets/meditate.svg'/>`
}

function unselectMantra() {
  mantraRadio.checked = false;
}

function unselectAffirmation(){
  affirmationRadio.checked = false
}

function addMessage (event) {
  event.preventDefault();
  if (affirmationRadio.checked === true) {
    clearMessageButton.hidden = false;
    var randomAffirmation = getRandomIndex(affirmations)
    messageContainer.innerHTML = `<h4>${affirmations[randomAffirmation]}</h4>`
  } else if (mantraRadio.checked === true){
    clearMessageButton.hidden = false;
    var randomMantra = getRandomIndex(mantras)
    messageContainer.innerHTML = `<h4>${mantras[randomMantra]}</h4>`
  } else {
    alert('You need to select either affirmation or mantra')
  }
}
