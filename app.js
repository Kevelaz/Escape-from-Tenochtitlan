function displayChoices () {

}


function nextImage() {
  document.querySelector('main').style.backgroundImage = 'url(https://th.bing.com/th/id/OIG.St_AJ0YgSLv7FdYzEypQ?w=1024&h=1024&rs=1&pid=ImgDetMain)';
}
function nextImage (){
const mainEl = document.querySelector('main');
const topTextEl = document.getElementById('toptext');
const startBtnEl = document.getElementById('StartButton')
const textBoxEl = document.getElementById('textbox')
mainEl.style.backgroundImage = 'url(https://th.bing.com/th/id/OIG.St_AJ0YgSLv7FdYzEypQ?w=1024&h=1024&rs=1&pid=ImgDetMain)';
mainEl.style.backgroundPosition = ' left 73%';
topTextEl.textContent = 'YOU HAVE ESCAPED'
topTextEl.style.color = '#F6EEEE'
startBtnEl.remove();
textBoxEl.textContent = 'You have escaped!, Aztec guards and other parts of the grand Tenochtitlan stand in your way. Where will you go?'
textBoxEl.style.fontSize = '25px'
}
