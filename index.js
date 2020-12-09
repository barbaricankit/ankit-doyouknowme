var readLineSync= require('readline-sync')
var user=readLineSync.question('What is your name?')
var score=0;
var highScore=[
  {
    username:'Ankit',
    score:4
  },
  {
    username:'Ritesh',
    score:2
  }
]
function checkAnswer(question,answer){
  console.log(question)
  var useranswer=readLineSync.question()
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log('Right!')
    score++
    console.log("Current Score",score)
  }
  else{
    console.log('Wrong!');
}
}


var question1={
 question:"Who is Ankit's favourite SuperHero?",
 answer:'Captain America'

}
var question2={
  question:"What is Ankit's favourite song?",
 answer:'Kaun Hai Voh'

}
var question3={
question:"What is Ankit's favourite sport?",
 answer:'Cricket'
}
var question4={
question:"Who is Ankit's favourite cricketer?",
 answer:'Virat Kohli'
}
var question=[question1,question2,question3,question4];
for(let i=0;i<question.length;i++)
checkAnswer(question[i].question,question[i].answer);
// checkAnswer("What is Ankit's superpower?",'ReadMinds');
console.log('Your score',score,'out of',question.length);

for(let i=0;i<highScore.length;i++)
{
  if(highScore[i].score<score)
  {
    console.log('You have beaten',highScore[i].username)
    highScore[i].username=user;
     highScore[i].score=score;
  }
  else if(highScore[i].score==score)
  console.log('You have scored same as',highScore[i].username)
}


