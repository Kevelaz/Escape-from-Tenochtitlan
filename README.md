# Escape-from-Tenochtitlan
# Description
Escape from Tenochtitlan is narrative choice based game. You are a prisoner of war who managed to escape captivity. Now based on your choices you must navigate through the Aztec capital of Tenochtitlan to gain your freedom. You must avoid capture and even death. 
I choice this game as way to share and express the culture I come from and to challenge myself with building a narrative story. 

### Link 
https://escape-from-tenochtitlan.netlify.app/
## Technologies Used
I used technologies such as JavaScript, HTML, and CSS
## WireFrames
![image](https://i.imgur.com/BCnEm53_d.jpg?maxwidth=520&shape=thumb&fidelity=high)
![image](https://i.imgur.com/iIyhBZK_d.jpg?maxwidth=520&shape=thumb&fidelity=high)
![image](https://i.imgur.com/Qol5Qf1_d.jpg?maxwidth=520&shape=thumb&fidelity=high)
![image](https://i.imgur.com/xrl3Wwp_d.jpg?maxwidth=520&shape=thumb&fidelity=high)


### MVP
- As a player, I want to know what setting im in and what the purpose of the game is 
- As a player, I want to be able to read and understand the game 
- As a player, I want the UI to be aesthetically pleasing
- As a player, I want the game to function and to let me know if I was captured, killed or escaped
- As a player, I want meaningful choices at each decision point, with consequences that impact the outcome

#### Stretch Goals
- As a player, I would like to hear indigenous drums and beats in the background of the game as I progress
- As a player, I would like to include animations of fire at the death screens
- As a player, I want to add animated background images 


#### Timeline
 # Friday
- Create and present proposal, begin to code html and css, Commit Work
Met goal? Y
 # Saturday 
- Finish and troubleshoot any bugs in html and css and begin coding javascript begin with display choices function, player input and handle player choices, Commit work
Met goal? Y
# Sunday 
- Continue coding the specific background images for each screen,  Aim to finish by this day, commit work
Met goal? Y
# Monday 
- finish with coding, finish by today and begin to structure and add functionality like the game loop, commit work
Met goal?  Y
# Tuesday 
- Do touch ups on functionality,begin testing, and do README, commit work 
Met goal  N
# Wednesday 
- Begin touch ups and making the game look nice and purdy, commit work 
Met goal? N
# Thursday 
- Review game, test game, and make sure youre satisfied with the final result, commit final product Met goal? Y
# Friday

## Attributions
-https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp#gsc.tab=0&gsc.q=how%20to%20disable%20a%20button%20
-https://chat.openai.com/
-https://www.bing.com/images/create/show-me-a-photo-of-a-transport-wheelcart-with-clot/1-657089adef19492ca1fd791592844271?FORM=GUH2CR


## IceBox
-Put animated backgrounds

-Add music and sound effects for each button 

-Add more branches to the overall story with different areas and different outcomes  
###### Psuedo code
// Function to display choices and get player input function going 
    ex. function displayChoices
        function getUserInput()

// Function to handle the player choices, define what choices players can make and where it will lead to. Will be 3 choices with 3 stages in the game, will be repeated three times (if,else)
  function handlePlayerChoice


// Function to show end game message with the specific background image, will be using image path in order to change image in background and progress in the game (DOM elements)
   function displayFinalImg 
   function changeBackdrop


// Game loop for Main content such as for the current stage and whether the players chooses the correct path and game conditions(if player moved on or was captured or killed)

  function gameLoop()
    Display choices and get the player input display choices

  function gameOver() function gameComplete()
    Check for game over conditions and for the  game completion condition
  Use handlePlayerChoice
    Handle player choice for the current stage
