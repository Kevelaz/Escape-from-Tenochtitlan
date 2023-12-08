class Choice {
  constructor(text,action) {
    this.text = text;
    this.action = action;
  }
}
let choiceUno,choiceDos,choiceTres;
let gameState = {};

function genChoices(backgroundImage,display, topText,textBox,textBoxFontSize,choices) {
  return {
    backgroundImage,
    display,
    topText,
    textBox,
    textBoxFontSize,
    choices: choices.map(choice => new Choice(choice.text, choice.action))
  };
}
const restartBtn = document.getElementById('RestartButton');
restartBtn.addEventListener('click', restartGame);

function restartGame () {
  clearChoices();
  gameState = {};
  introScreen();
}

function clearChoices() {
  const choiceButtons = document.querySelectorAll('.Choices');
  choiceButtons.forEach(function (btn) {
    btn.removeEventListener('click', firstChoices);
    btn.removeEventListener('click', goOpochtli);
    btn.removeEventListener('click', goMelauhtiuh);
    btn.removeEventListener('click', goTlayeccampa);
    btn.removeEventListener('click',goOpo1);
    btn.removeEventListener('click',goOpo2);
    btn.removeEventListener('click',goOpo3);
    btn.removeEventListener('click',goDock1);
    btn.removeEventListener('click',goDock2);
    btn.removeEventListener('click',goDock3);
    btn.removeEventListener('click',dockAction1);
    btn.removeEventListener('click',dockAction2);
    btn.removeEventListener('click',dockAction3);
    btn.removeEventListener('click',goMarsh1);
    btn.removeEventListener('click',goMarsh2);
    btn.removeEventListener('click',goMarsh3);
    btn.removeEventListener('click',jungleDec1);
    btn.removeEventListener('click',jungleDec2);
    btn.removeEventListener('click',jungleDec3);
    btn.removeEventListener('click',goMela1);
    btn.removeEventListener('click',goMela2);
    btn.removeEventListener('click',goMela3);
    btn.removeEventListener('click',marketDec1);
    btn.removeEventListener('click',marketDec2);
    btn.removeEventListener('click',marketDec3);
    btn.removeEventListener('click',cartDec1);
    btn.removeEventListener('click',cartDec2);
    btn.removeEventListener('click',cartDec3);
    
    btn.textContent = '';
    btn.style.display = 'inline-block';
    btn.style.cursor = 'pointer';
    btn.style.opacity = '1';
    btn.disabled = false;

  });
  gameState.playerChoices = [];
  const mainEl = document.querySelector('main');
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const xtraSpace = document.getElementById('extraspace');
  const restartBtn = document.getElementById
  ('RestartButton');
  mainEl.style.backgroundImage = '';
  mainEl.style.backgroundPosition = '';
  restartBtn.style.display = 'none';
  topTextEl.style.color = '';
  topTextEl.textContent = '';
  textBoxEl.textContent = '';
  xtraSpace.textContent = '';
  xtraSpace.style.fontSize = '';
}

function showChoices(opciones) {
  const mainEl = document.querySelector('main');
  const restartBtn = document.getElementById('RestartButton');
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  choiceUno = document.getElementById('choice1');
  choiceDos = document.getElementById('choice2');
  choiceTres = document.getElementById('choice3');
  
  mainEl.style.backgroundImage = opciones.backgroundImage;
  mainEl.style.backgroundPosition = opciones.backgroundPosition;
  restartBtn.style.display = opciones.display
  topTextEl.style.color = opciones.topTextColor;
  topTextEl.textContent = opciones.topText;
  textBoxEl.textContent = opciones.textBox;
  textBoxEl.style.fontSize = opciones.textBoxFontSize;
  gameState.choices = opciones.choices;
  
  choiceUno.style.display = 'inline-block';
  choiceDos.style.display = 'inline-block';
  choiceTres.style.display = 'inline-block';

  opciones.choices.forEach((choice, index) => {
  const choiceBtn = document.getElementById(`choice${index + 1}`);
  choiceBtn.textContent = choice.text;
  choiceBtn.addEventListener('click', choice.action);
  });
}
function updateXtraSpaceTxt(text) {
  const xtraSpace = document.getElementById('extraspace');
  if(xtraSpace) {
    xtraSpace.textContent = text;
  }
}
function revealBtns() {
  let btns = document.querySelectorAll('.Choices');
  btns.forEach(function(btn) {
    btn.style.display = 'inline-block';
  })
}
const startBtnEl = document.getElementById('StartButton');
startBtnEl.addEventListener('click', introScreen);

function introScreen () {
  const startBtnEl = document.getElementById('StartButton');
  startBtnEl.addEventListener('click', revealBtns);
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const xtraSpace = document.getElementById('extraspace');
  const choiceUno = document.getElementById('choice1');
  const choiceDos = document.getElementById('choice2');
  const choiceTres = document.getElementById('choice3');
  const mainEl = document.querySelector('main');
  const restartBtn = document.getElementById('RestartButton');
  mainEl.style.backgroundImage = 'url(https://th.bing.com/th/id/OIG.ypAWvuLpAbzqPXhfoxAb?w=1024&h=1024&rs=1&pid=ImgDetMain)';
  topTextEl.textContent = 'YOU ARE BEING HELD AS A PRISONER';
  mainEl.style.backgroundPosition = 'center 73%';
  topTextEl.style.color = '#ECE2DA';
  xtraSpace.textContent = 'You are a prisoner of war, you are due to be sacrificed the next morning. But now the guards are gone and you were able to hide a knife before being captured, free yourself!';
  xtraSpace.style.fontSize = '17px';
  textBoxEl.textContent = 'Press "Tequi" to free yourself';


  choiceDos.textContent = 'Tequi';
  choiceUno.style.opacity = '0.5';
  choiceUno.style.cursor = 'not-allowed';
  choiceTres.style.opacity = '0.5';
  choiceTres.style.cursor = 'not-allowed';
  choiceUno.textContent = '';
  choiceTres.textContent = '';

  choiceDos.addEventListener('click', firstChoices);

  startBtnEl.style.display = 'none';
  restartBtn.style.display = 'none';

  revealBtns();
}

function firstChoices() {
  const mainEl = document.querySelector('main');
  const topTextEl = document.getElementById('toptext');
  const textBoxEl = document.getElementById('textbox');
  const xtraSpace = document.getElementById('extraspace');
  const choiceUno = document.getElementById('choice1');
  const choiceDos = document.getElementById('choice2');
  const choiceTres = document.getElementById('choice3');
  mainEl.style.backgroundPosition = ' left 73%';
  topTextEl.textContent = 'YOU HAVE ESCAPED';
  topTextEl.style.color = '#F6EEEE';
  textBoxEl.textContent = 'You have escaped! Aztec guards and other parts of the grand Tenochtitlan stand in your way. Where will you go?';
  textBoxEl.style.fontSize = '25px';
  xtraSpace.textContent = 'Opochtli: Left - Melauhtiuh: Straight - Tlayeccampa: Right';
  xtraSpace.style.fontSize = '22px';
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
    'url(https://i.imgur.com/GXejKL3_d.jpg?maxwidth=520&shape=thumb&fidelity=high)',
    'none',
    'YOU HAVE ESCAPED',
    'You have escaped! Aztec guards and other parts of the grand Tenochtitlan stand in your way. Where will you go?',
    '25px',
    [opoChoice,melaChoice,tlayeChoice],
  );
  gameState.choices = firstChoicesOutcome.choices;
  showChoices(firstChoicesOutcome);
  }

function goOpochtli () {
  const opoOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.6a7CVwStK3DebFr2HcOm?pid=ImgGn)',
    'none',
    'YOU HAVE FOUND A SAFE AREA,FOR NOW',
    'You have found a safe area, guards are in pursuit. Where to now?',
    '24px',
    [
      new Choice('Opochtli', goOpo1),
      new Choice('Melauhtiuh', goOpo2),
      new Choice('Tlayeccampa', goOpo3),
    ]
);
gameState.choices = opoOutcome.choices;
showChoices(opoOutcome);
}
function goOpo1 () {
  const opoUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.Rkw.q06D7G9cY9golSFT?pid=ImgGn)',
    'none',
    'YOU ARE AT THE DOCK',
    'As you arrive to the dock, its empty. Do you continue to go straight or go in a different direction?',
    '24px',
    [
      new Choice('Opochtli', goDock1),
      new Choice('Melauhtiuh', goDock2),
      new Choice('Tlayeccampa',goDock3),
    ],
  );
  gameState.choices = opoUno.choices;
  showChoices(opoUno);
}
function goOpo2 () { 
  const opoDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.cA3vjQrucNYzQKh8E0My?pid=ImgGn)',
    'none',
    'YOU MADE IT TO THE MARSH',
    'The marshes lay just beyond the city perimeter, youre almost free! But the guards are in hot pursuit! You must decide where to go now!',
    '21px',
    [
    new Choice('Opochtli', goMarsh1),
    new Choice('Melauhtiuh', goMarsh2),
    new Choice('Tlayeccampa',goMarsh3),
    ]  
  );
  gameState.choices = opoDos.choices;
  showChoices(opoDos);
}
function goOpo3 () { 
    updateXtraSpaceTxt('');
  const opoTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU HAVE BEEN CAPTURED',
    'You made it far, but not far enough, your sacrifice will be worthy',
    '24px',
    [],
  );
  showChoices(opoTres);
}
function goDock1 (){  
  updateXtraSpaceTxt('');
  const dockUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU HAVE BEEN CAPTURED',
    'You almost made it, huitzilopochtli will appreciate your efforts',
    '24px',
    [],
  );
  showChoices(dockUno);
}
function goDock2 () {  
  updateXtraSpaceTxt('');
  const dockDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.SPFhqFRnFPj_irzu0.o8?pid=ImgGn)',
    'none',
    'YOU HAVE FOUND A BOAT',
    'Maybe quetzalcoatl is on your side tonight, but you have to hurry! Do you want to take the boat or swim?',
    '20px',
    [
    new Choice('Swim',dockAction1),
    new Choice('Neither',dockAction2),
    new Choice('Boat',dockAction3),
    ],
  );
  gameState.choices = dockDos.choices;
  showChoices(dockDos);
}
function goDock3 () { 
  updateXtraSpaceTxt('');
  const dockTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'You went straight into a dead-end! The guards caught up to you and decided to make it quick, may Xolotl guide you in the afterlife',
    '21px',
    [],
  );
  showChoices(dockTres);
}

function dockAction1 () {
  updateXtraSpaceTxt('');
  const swimOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.Hw387RgiXp7K6P87WqLc?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU SURVIVED',
    'You chose to swim and the guards with their heavy armor chose not to pursue. May Quetzalcoatl be with you ',
    '24px',
    [],
  );
  showChoices(swimOp);
}
function dockAction2 () {
    updateXtraSpaceTxt('');
  const neitherOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU WERE CAPTURED',
    'You saw no way out, huitzilopochtli will appreciate your sacrifice',
    '26px',
    [],
  );
  showChoices(neitherOp);
}
function dockAction3 () {
  updateXtraSpaceTxt('');
  const boatOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'The boat was suited for two people and you took too long to leave the dock. The guards werent merciful. May Xolotl guide you in the afterlife ',
    '19px',
    [],
  );
  showChoices(boatOp);
}

function goMarsh1 () { 
  updateXtraSpaceTxt('');
  const marshUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU HAVE BEEN CAPTURED',
    'The guards caught up to you while you were crossing a muddy part of the swamp, huitzilopochtli will appreciate your efforts ',
    '22px',
    [],
  );
  showChoices(marshUno);
}
function goMarsh2 () {  
    updateXtraSpaceTxt('');
  const marshDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'You drowned trying to swim in the marsh,bad idea. May xolotl guide you in the afterlife',
    '22px',
    [],
  );
  showChoices(marshDos);
}
function goMarsh3 () { 
  const marshTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.g8Nz2QltsbKwGpq5On9x?pid=ImgGn)',
    'none',
    'YOU MADE IT TO THE JUNGLE',
    'You traversed the marsh and now the vast jungle stands in your path. Do you go or go back and face your fate?',
    '22px',
    [
    new Choice('Jungle', jungleDec1),
    new Choice('Neither', jungleDec2),
    new Choice('Go back', jungleDec3),
    ]
  );
  gameState.choices = marshTres.choices;
  showChoices(marshTres);
}
function jungleDec1 () { 
    updateXtraSpaceTxt('');
  const goJung = genChoices (
    'url(https://th.bing.com/th/id/OIG.dIPmB_6ERArHCQbnu0wd?w=1024&h=1024&rs=1&pid=ImgDetMain)',
    'inline-block',
    'YOU SURVIVED',
    'After the guards saw you go into the thick jungle, they choice to set you free. May Quetzalcoatl guide you in life ',
    '24px',
    [],
  );
  showChoices(goJung);
}
function jungleDec2 () {
    updateXtraSpaceTxt('');
  const nothingOp = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'The guards were not merciful. You went too far to bring back alive',
    '26px',
    [],
  );
  showChoices(nothingOp);
}
function jungleDec3 () {
  updateXtraSpaceTxt('');
  const goBack = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'You decided to face your fate, you  fought until the end. May Xolotl guide you in the afterlife',
    '24px',
    [],
  );
  showChoices(goBack);
}

function goMelauhtiuh () {
  const melaOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.hbd.Ry8MJkbQ8lSysCCY?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'none',
    'YOU CONTINUE ON INTO THE NIGHT',
    'Youre still alive, tired and in search of your freedom, where to now?',
    '24px',
    [
      new Choice ('Opochtli', goMela1),
      new Choice ('Melauhtiuh', goMela2),
      new Choice ('Tlayeccampa', goMela3),
    ],
);
gameState.choices = melaOutcome.choices;
showChoices(melaOutcome);
}
function goMela1 () {
  updateXtraSpaceTxt('');
  const melaUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU WERE CAPTURED',
    'The guards were waiting for you to turn the corner, your sacfrice will suffice',
    '24px',
    [],
  );
  showChoices(melaUno);
}
function goMela2 () {
    updateXtraSpaceTxt('');
  const melaDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU WERE CAPTURED',
    'You ran straight into a patrol unit! Your sacrifice will suffice',
    '26px',
    [],
  );
  showChoices(melaDos);
}
function goMela3 () {
  const melaTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.DQffgx2YdcPFC7RJmBMm?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'none',
    'YOU MADE IT TO THE MARKET',
    'You must make a choice, continue on into the market to blend in or go a different direction?',
    '22px',
    [
      new Choice ('Opochtli', marketDec1),
      new Choice ('Melauhtiuh', marketDec2),
      new Choice ('Tlayeccampa', marketDec3),
    ]
  );
  gameState.choices = melaTres.choices;
  showChoices(melaTres);
}
function marketDec1 () {
    updateXtraSpaceTxt('');
  const markUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'YOU WERE CAPTURED',
    'inline-block',
    'You made a costly mistake and ended up in a dead end! You made it far but not far enough. ',
    '24px',
    [],
  );
  showChoices(markUno);
}
function marketDec2() {
  const markDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.4R9lNp5A06AYPtYH35z9?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'none',
    'YOU FOUND A CART ',
    'You decided to blend in and found a cart! But it seems like it is about to leave! Quick! Will you hide in it or find another way out?',
    '22px',
    [
      new Choice('Hide', cartDec1),
      new Choice('Neither', cartDec2),
      new Choice('Find another way', cartDec3),
    ]
  );
  gameState.choices = markDos.choices;
  showChoices(markDos);
}
function marketDec3() {
  updateXtraSpaceTxt('');
  const markTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU WERE CAPTURED',
    'Civilians noticed the guards pursuing you and decided to intervene out of fear! Your determination was impressive.',
    '22px',
    [],
  );
  showChoices(markTres);
}
function cartDec1 () {
  updateXtraSpaceTxt('');
  const cartUno = genChoices (
    'url(https://th.bing.com/th/id/OIG.gM9G10pGBDBe0VTshJqb?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU SURVIVED',
    'You blended in enough to be able to hide in the cart! The cart left the city and you were able to escape the pursuit. May Quetzalcoatl guide you in life ',
    '18px',
    [],
  );
  showChoices(cartUno);
}
function cartDec2 () {
  updateXtraSpaceTxt('');
  const cartDos = genChoices (
    'url(https://th.bing.com/th/id/OIG.jUxtSG23mjKCAPlsNZhA?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn)',
    'inline-block',
    'YOU DIED',
    'You decided to not do either. The guards caught up to you and you fought back, They were quick and ended you quickly. May Xolotl guide you.',
    '20px',
    [],
  );
  showChoices(cartDos);
}
function cartDec3 () {
  updateXtraSpaceTxt('');
  const cartTres = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU WERE CAPTURED',
    'You decided the cart wasnt safe enough, but sadly that was your only way out. Your sacrifice will be painful and long.',
    '20px',
    [],
  );
  showChoices(cartTres);
}
function goTlayeccampa () { 
  updateXtraSpaceTxt('');
  const tlayeOutcome = genChoices (
    'url(https://th.bing.com/th/id/OIG.evCNcIkBgTT3UyohMY8X?pid=ImgGn)',
    'inline-block',
    'YOU HAVE BEEN CAPTURED',
    'Your escape was short-lived, your sacrifice will suffice',
    '24px',
    [],
  );
showChoices(tlayeOutcome);
}
document.getElementById('RestartButton').addEventListener('click', restartGame);
