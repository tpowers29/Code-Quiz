var listOfQuestions = [
    {
        question: "What is CSS",
        choices:[ "Cascading script", "Cascasing style sheet","Css","Css1"],
        answer:1
    },
    {
        question: "What is my favorite color",
        choices:[ "Green", "Blue","Red","Yellow"],
        answer:0
        
    },
    {
        question: "What season is in January",
        choices:[ "Fall", "Winter","Spring","Summer"],
        answer:1
    },
    {
        question: "How old do you need to be to get a driving permit in Mass",
        choices:[ "21", "25","18","16"],
        answer:3
    },
    
    
    
]

var quizEl = document.getElementById("quiz-section")
var resultsEl = document.getElementById("results-section")
var timerEl = document.getElementById("timer")
var scoreEl = document.getElementById("score")
var option1El = document.getElementById("option-1")
var option2El = document.getElementById("option-2")
var option3El = document.getElementById("option-3")
var option4El = document.getElementById("option-4")
var questionEl = document.getElementById("question")
var startgameEl = document.getElementById("startgame")
var correctEl = document.getElementById("correct")

quizEl.style.display = "none"
resultsEl.style.display = "none"

var currentQuestion = 0
var timerObj;
var timerCounter = 30;
var score = 0;










startgameEl.addEventListener("click",function(event){
    event.preventDefault()
    quizEl.style.display = "block"
    startgameEl.style.display = "none"
    timerObj = setInterval(function(){
        timerEl.textContent = timerCounter;
        if(timerCounter > 1){
            timerCounter --;
        }else{
            endGame()
        }
    },1000)
    displayQuiz()
})



function displayQuiz(){
    questionEl.textContent = listOfQuestions[currentQuestion].question
    option1El.textContent = listOfQuestions[currentQuestion].choices[0]
    option2El.textContent = listOfQuestions[currentQuestion].choices[1]
    option3El.textContent = listOfQuestions[currentQuestion].choices[2]
    option4El.textContent = listOfQuestions[currentQuestion].choices[3]

}


function nextQuestion(){
    var userEntry = this.getAttribute("data-value")
    console.log(userEntry)
    if(userEntry == listOfQuestions[currentQuestion].answer){
        correctEl.textContent = "Great Job"
        score+=5;
        scoreEl.textContent = score
    }else{
        correctEl.textContent = "Wrong"
        timerCounter-=5;

    }
    if(currentQuestion < listOfQuestions.length-1){
        currentQuestion++
        displayQuiz()
    }else{
        endGame()
    }
}

function endGame(){
    quizEl.style.display = "none"
resultsEl.style.display = "block"
clearInterval(timerObj)
}


option1El.addEventListener("click",nextQuestion)
option2El.addEventListener("click",nextQuestion)
option3El.addEventListener("click",nextQuestion)
option4El.addEventListener("click",nextQuestion)