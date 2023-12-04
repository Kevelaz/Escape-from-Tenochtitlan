function handleChoice1 (){

}
function handleChoice2 () {

}
function handleChoice3 () {

}

function introScreen () {
  document.querySelector('main').style.backgroundImage = 'url(https://th.bing.com/th/id/OIG.ypAWvuLpAbzqPXhfoxAb?w=1024&h=1024&rs=1&pid=ImgDetMain)';
  const startBtnEl = document.getElementById('StartButton')
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const xtraSpace = document.getElementById('extraspace');
  const choiceUno = document.getElementById('choice1');
  const choiceDos = document.getElementById('choice2');
  const choiceTres = document.getElementById('choice3');
  const mainEl = document.querySelector('main');
  topTextEl.textContent = 'YOU ARE BEING HELD AS A PRISONER';
  mainEl.style.backgroundPosition = 'center 73%'
  topTextEl.style.color = '#ECE2DA'
  xtraSpace.textContent = 'You are a prisoner of war, you are due to be sacrificed the next morning. But now the guards are gone and you were able to hide a knife before being captured, free yourself!';
  xtraSpace.style.fontSize = '16px'
  textBoxEl.textContent = 'Press "Tequi" to free yourself'
  choiceDos.textContent = 'Tequi'
  choiceUno.style.opacity = '0.5';
  choiceUno.style.cursor = 'not-allowed';
  choiceTres.style.opacity = '0.5';
  choiceTres.style.cursor = 'not-allowed';
  choiceUno.textContent = '';
  choiceTres.textContent = '';
  startBtnEl.remove();
  choiceDos.addEventListener('click', firstChoices);
}






function firstChoices() {
  const mainEl = document.querySelector('main');
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const xtraSpace = document.getElementById('extraspace')
  const choiceUno = document.getElementById('choice1');
  const choiceDos = document.getElementById('choice2');
  const choiceTres = document.getElementById('choice3');
  document.querySelector('main').style.backgroundImage = 'url(https://lh3.googleusercontent.com/pw/ADCreHcmkCAe2lQRqi10bLUHiSY9BdKHOgEYXo20HNd5o7xksNtFvsyR5b4XjhoHkKelHSlpspyfCZGvs5JRwCjX4YxbkchePjN8tKpwQTsB3UzXF2mKkvNCbAXTQMN9msAYYfPxA_etlRp7ZKjjw9Pue27idKmean5U1q8NDPlj6EZLomtv-UhCSvStfTsMxIEg1ZuoGbmHtGyNAZaQHUaySIV7hLXn6HHJMXwHXwkWXj76K29Fe9_koBfBgDU9s7DIfPtDGR2f1UTVSTSMzyZGHBnacazY0TKFeuU0GoP3O9tcWSuNcNo7v-OA1K4YneRox6Ww3CkrplgpvN0LKm9LtzcgumNimJMm6uWsEJtVegqUJuCHHFyBMvv0Slm4a5sx3x3l3iLskLdRDTEOWFwUwPUby8GIsodu5_VjLxR95zI2HppknhhT8cxxHT3Z_p74YIJSmh5TU4vh49pyfepmVZ_kP7StnTN9THHJma6BmW6Tdh3WbDiI4bjwDvr17N3rYTLr8rs5HggPvFSUjo3sjrzaaVWQA8R1lbP0e9eLQl5hR7WkzWM31OfCsKKgyDOUU-_ZCsQDCEUCD7Smv15_SbPO6nYeriGEbYPJZHk0-lQI1LMywkeS9isoPln7V2tnOryFJlxHntp2neXQbsJa4F5pYIiNdM07uoQP3awcsBM6gi9ssA0CcVXiHTxStNIIXLvFV-hdJmy9Al2aZiFUQhTgxg16fyfSxH8TWPC2UyYrQvwWjU5Xjp01jLxTuRw268YcSNQIdQUq7dmDKayGgiQXmx1hfRcMFc5W_DivuAEqgskFXGu5rhYgUDHhDODXHhzrhvxHwcF07xn9lM6n20UlB70bojUotpet9PJwYTxA0m62PDPSura4A2HIx_cAPcKMHQ=w960-h960-s-no-gm?authuser=0)';
  mainEl.style.backgroundPosition = ' left 73%';
  topTextEl.textContent = 'YOU HAVE ESCAPED'
  topTextEl.style.color = '#F6EEEE'
  textBoxEl.textContent = 'You have escaped! Aztec guards and other parts of the grand Tenochtitlan stand in your way. Where will you go?'
  textBoxEl.style.fontSize = '25px';
  xtraSpace.style.display = 'none';
  choiceUno.style.opacity = '1';
  choiceUno.style.cursor = 'pointer';
  choiceTres.style.opacity = '1';
  choiceTres.style.cursor = 'pointer';
  choiceUno.textContent = 'Opochtli';
  choiceDos.textContent = 'Melauhtiuh';
  choiceTres.textContent = 'Tlayeccampa';
  }
  function revealBtns() {
    let btns = document.querySelectorAll('.Choices');
    btns.forEach(function(btn) {
      btn.style.display = 'inline-block';
    })
  }
  document.getElementById('StartButton').addEventListener('click',revealBtns)