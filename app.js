class Choice {
  constructor(text,action) {
    this.text = text;
    this.action = action;
  }
}
function genChoices(backgroundImage, topText,textBox,textBoxFontSize,choices) {
  return {
    backgroundImage,
    topText,
    textBox,
    textBoxFontSize,
    choices,
  };
}

function showChoices(opciones) {
  const mainEl = document.querySelector('main');
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const choiceUno = document.getElementById('choice1');
  const choiceDos = document.getElementById('choice2');
  const choiceTres = document.getElementById('choice3');


  mainEl.style.backgroundImage = opciones.backgroundImage;
  mainEl.style.backgroundPosition = opciones.backgroundPosition;
  topTextEl.style.color = opciones.topTextColor;
  topTextEl.textContent = opciones.topText;
  textBoxEl.textContent = opciones.textBox;
  textBoxEl.style.fontSize = opciones.textBoxFontSize;


  choiceUno.style.display = 'inline-block';
  choiceDos.style.display = 'inline-block';
  choiceTres.style.display = 'inline-block';

    opciones.choices.forEach((choice, index) => {
    const choiceBtn = document.getElementById(`choice${index + 1}`);
    choiceBtn.textContent = choice.text;
    choiceBtn.addEventListener('click', choice.action);
  });
}


function revealBtns() {
  let btns = document.querySelectorAll('.Choices');
  btns.forEach(function(btn) {
    btn.style.display = 'inline-block';
  })
}
document.getElementById('StartButton').addEventListener('click',revealBtns)




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


  //document.querySelector('main').style.backgroundImage = 'url(https://i.imgur.com/GXejKL3.png)';
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
  
  const opoChoice = new Choice('Opochtli', goOpochtli);
  const melaChoice = new Choice('Melauhtiuh', goMelauhtiuh);
  const tlayeChoice = new Choice('Tlayeccampa', goTlayeccampa);
  

  const firstChoicesOutcome = genChoices (
    'url(https://i.imgur.com/GXejKL3.png)',
    'YOU HAVE ESCAPED',
    'You have escaped! Aztec guards and other parts of the grand Tenochtitlan stand in your way. Where will you go?',
    '25px',
    [opoChoice,melaChoice,tlayeChoice]
  );
  showChoices(firstChoicesOutcome)
  }


function goOpochtli () {
  const opoOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.6a7CVwStK3DebFr2HcOm?pid=ImgGn)',
    'YOU HAVE FOUND A SAFE AREA,FOR NOW',
    'You have found a safe area, guards are in pursuit. Where to now?',
    '24px',
    [
      new Choice('Opochtli', goOpo1),
      new Choice('Melauhtiuh', goOpo2),
      new Choice('Tlayeccampa', goOpo3),
    ]
);
showChoices(opoOutcome);
}
function goOpo1 () {
  const opoUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.Rkw.q06D7G9cY9golSFT?pid=ImgGn)',
    'YOU ARE AT THE DOCK',
    'As you arrive to the dock, its empty. Do you continue to go straight or go in a different direction?',
    '24px',
    [
      new Choice('Opochtli', goDock1),
      new Choice('Melauhtiuh', goDock2),
      new Choice('Tlayeccampa',goDock3),
    ]
  );
  showChoices(opoUno);
}
function goOpo2 () { // continue straight
  const opoDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.cA3vjQrucNYzQKh8E0My?pid=ImgGn)',
    'YOU MADE IT TO THE MARSH',
    'The marshes lay just beyond the city perimeter, youre almost free! But the guards are in hot pursuit! You must decide where to go now!',
    '21px',
    [
    new Choice('Opochtli', goMarsh1),
    new Choice('Melauhtiuh', goMarsh2),
    new Choice('Tlayeccampa',goMarsh3),
    ]  
  );
  showChoices(opoDos);
}
function goOpo3 () { // Start over button
  const opoTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU HAVE BEEN CAPTURED',
    'You made it far, but not far enough, your sacrifice will be worthy',
    '24px'
  );
  showChoices(opoTres);
}
function goDock1 (){  // Start over button and dock option 
  const dockUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU HAVE BEEN CAPTURED',
    'You almost made it, huitzilopochtli will appreciate your efforts',
    '24px',
  );
  showChoices(dockUno);
}
function goDock2 () {  // escape 
  const dockDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.SPFhqFRnFPj_irzu0.o8?pid=ImgGn)',
    'YOU HAVE FOUND A BOAT',
    'Maybe quetzalcoatl is on your side tonight, but you have to hurry! Do you want to take the boat or swim?',
    '20px',
    [
    new Choice('Swim',dockAction1),
    new Choice('Neither',dockAction2),
    new Choice('Boat',dockAction3),
    ]
  );
  showChoices(dockDos);
}
function goDock3 () { // game over button
  const dockTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'You went straight into a dead-end! The guards caught up to you and decided to make it quick, may Xolotl guide you in the afterlife',
    '21px',

  );
  showChoices(dockTres);
}

function dockAction1 () {
  const swimOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.Hw387RgiXp7K6P87WqLc?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU SURVIVED',
    'You chose to swim and the guards with their heavy armor chose not to pursue. May Quetzalcoatl be with you ',
    '24px',
  );
  showChoices(swimOp);
}
function dockAction2 () {
  const neitherOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'You saw no way out, huitzilopochtli will appreciate your sacrifice',
    '26px',
  );
  showChoices(neitherOp);
}
function dockAction3 () {
  const boatOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'The boat was suited for two people and you took too long to leave the dock. The guards werent merciful. May Xolotl guide you in the afterlife ',
    '19px',
  );
  showChoices(boatOp);
}

function goMarsh1 () { // game over 
  const marshUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU HAVE BEEN CAPTURED',
    'The guards caught up to you while you were crossing a muddy part of the swamp, huitzilopochtli will appreciate your efforts ',
    '22px',
  );
  showChoices(marshUno);
}
function goMarsh2 () {  // game over 
  const marshDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'You drowned trying to swim in the marsh,bad idea. May xolotl guide you in the afterlife',
    '22px',
  );
  showChoices(marshDos);
}
function goMarsh3 () { //escape 
  const marshTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.g8Nz2QltsbKwGpq5On9x?pid=ImgGn)',
    'YOU MADE IT TO THE JUNGLE',
    'You traversed the marsh and now the vast jungle stands in your path. Do you go or go back and face your fate?',
    '22px',
    [
    new Choice('Jungle', jungleDec1),
    new Choice('Neither', jungleDec2),
    new Choice('Go back', jungleDec3),
    ]
  );
  showChoices(marshTres);
}
function jungleDec1 () { // survived 
  const goJung = genChoices (
    'url(https://th.bing.com/th/id/OIG.dIPmB_6ERArHCQbnu0wd?w=1024&h=1024&rs=1&pid=ImgDetMain)',
    'YOU SURVIVED',
    'After the guards saw you go into the thick jungle, they choice to set you free. May Quetzalcoatl guide you in life ',
    '24px',
    
  );
  showChoices(goJung)
}
function jungleDec2 () {
  const nothingOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'The guards were not merciful. You went too far to bring back alive',
    '26px',
  );
  showChoices(nothingOp);
}
function jungleDec3 () {
  const goBack = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'You decided to face your fate, you  fought until the end. May Xolotl guide you in the afterlife',
    '24px',
  );
  showChoices(goBack);
}










function goMelauhtiuh () {
  const melaOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.hbd.Ry8MJkbQ8lSysCCY?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU CONTINUE ON INTO THE NIGHT',
    'Youre still alive, tired and in search of your freedom, where to now?',
    '24px',
    [
      new Choice ('Opochtli', goMela1),
      new Choice ('Melauhtiuh', goMela2),
      new Choice ('Tlayeccampa', goMela3),
    ]
);
showChoices(melaOutcome);
}
function goMela1 () {
  const melaUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'The guards were waiting for you to turn the corner, your sacfrice will suffice',
    '24px',
  );
  showChoices(melaUno);
}
function goMela2 () {
  const melaDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'You ran straight into a patrol unit! Your sacrifice will suffice',
    '26px',
  );
  showChoices(melaDos);
}
function goMela3 () {
  const melaTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.DQffgx2YdcPFC7RJmBMm?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU MADE IT TO THE MARKET',
    'You must make a choice, continue on into the market to blend in or go a different direction?',
    '22px',
    [
      new Choice ('Opochtli', marketDec1),
      new Choice ('Melauhtiuh', marketDec2),
      new Choice ('Tlayeccampa', marketDec3),
    ]
  );
  showChoices(melaTres);
}
function marketDec1 () {
  const markUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'You made a costly mistake and ended up in a dead end! You made it far but not far enough. ',
    '24px',
  );
  showChoices(markUno)
}
function marketDec2() {
  const markDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.4R9lNp5A06AYPtYH35z9?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU FOUND A CART ',
    'You decided to blend in and found a cart! But it seems like it is about to leave! Quick! Will you hide in it or find another way out?',
    '22px',
    [
      new Choice('Hide', cartDec1),
      new Choice('Neither', cartDec2),
      new Choice('Find another way', cartDec3),
    ]
  );
  showChoices(markDos)
}
function marketDec3() {
  const markTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'Civilians noticed the guards pursuing you and decided to intervene out of fear! Your determination was impressive.',
    '22px',
  );
  showChoices(markTres)
}
function cartDec1 () {
  const cartUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.gM9G10pGBDBe0VTshJqb?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU SURVIVED',
    'You blended in enough to be able to hide in the cart! The cart left the city and you were able to escape the pursuit. May Quetzalcoatl guide you in life ',
    '18px',
  )
  showChoices(cartUno)
}
function cartDec2 () {
  const cartDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'YOU DIED',
    'You decided to not do either. The guards caught up to you and you fought back, They were quick and ended you quickly. May Xolotl guide you.',
    '20px',
  )
  showChoices(cartDos)
}
function cartDec3 () {
  const cartTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'You decided the cart wasnt safe enough, but sadly that was your only way out. Your sacrifice will be painful and long.',
    '20px',
  )
  showChoices(cartTres)
}
function goTlayeccampa () { // Start over button and go right option
  const tlayeOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU HAVE BEEN CAPTURED',
    'Your escape was short-lived, your sacrifice will suffice',
    '24px',
  );
showChoices(tlayeOutcome);
}












