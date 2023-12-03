# Project Proposal
## Name of Project: Escape from Tenochtitlan 
## Description:
Escape from Tenochtitlan will be a choice based game where each turn and choice will determine if you escape your ritual sacrifice or make it to the freedom of the jungle that is just beyond the city border. Each choice will bring you to a new area of the city where you have to choose between 3 pathways, one pathway will lead to freedom, one will lead to recapture, and one will lead to death. Players will have the choice to play again if they get captured or die, but also a replay option if they survive. 

## Wire frames
** Intial Landing View **
![image](https://imgur.com/a/FT0g9Ed)
 ** Results **
 ![image](https://imgur.com/a/lrFODZL)
 ![image](https://imgur.com/a/7aLfim1)
 ![image](https://imgur.com/a/OEJ9H8S)
## User story

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
 # Saturday 
- Finish and troubleshoot any bugs in html and css and begin coding javascript begin with display choices function, player input and handle player choices, Commit work
# Sunday 
- Continue coding the specific background images for each screen,  Aim to finish by this day, commit work
# Monday 
- finish with coding, finish by today and begin to structure and add functionality like the game loop, commit work
# Tuesday 
- Do touch ups on functionality,begin testing, and do README, commit work 
# Wednesday 
- Begin touch ups and making the game look nice and purdy, commit work
# Thursday 
- Review game, test game, and make sure youre satisfied with the final result, commit final product
# Friday 
- Present

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
    Check for game over conditions and for the  game complettion condition
  Use handlePlayerChoice
    Handle player choice for the current stage

   