// Check if the user is ready to play!
confirm("Let's git down wit it")
var age
age = prompt("How old are you?")
if (age < 18)
{
    console.log("You are under 18. Because I am so generous, I will allow you to play - but I will not take any responsibility for anything")
}
else
{
    console.log("I am going to show you the greatest time of your life.")   
}
console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.")
console.log("Batman glares at you.")
var userAnswer = prompt("Are you feeling lucky, punk?")
if (userAnswer === 'yes') {
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!")
} else {
    console.log('You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.') 
}
var feedback
feedback = prompt("Rate this game from 1 to 10")
if (feedback > 8) {
    console.log("This is just the beginning of my game empire. Stay tuned for more!")
} else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!")
}

    