let myQuote = '';
const getAdviceBtn = document.getElementById('getAdviceBtn');

// Get quote from API and Slip ID from API

async function getQuote() {
  let quote = await fetch('https://api.adviceslip.com/advice');
  return quote.json();
}

// Fill in ID container and blockquote

async function fillQuote() {
  myQuote = await getQuote();
  document.getElementById('slip-id').innerHTML = myQuote.slip.id;
  document.getElementById('advice').innerHTML = '"'+myQuote.slip.advice+'"';
}

// Advice Button Function
getAdviceBtn.addEventListener('click', fillQuote);
  window.onload = () => {
    fillQuote();
  };