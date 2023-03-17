const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion={}
let acceptingAnswers = true;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions=[
    {
        question:"Javascript is an _______ language?",
        choice1:'Object Oriented',
        choice2:'Object based',
        choice3:'Procedural',
        choice4:'None of the Above',
        answer:1,
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        choice1:'getElementbyId()',
        choice2:'getElementsByClassName',
        choice3:'Both A and B',
        choice4:'None Of the Above',
        answer:3,
    },
    {
        question:"When an operator’s value is NULL, the typeof returned by the unary operator is:",
        choice1:'Boolean',
        choice2:'Undefined',
        choice3:'Integer',
        choice4:'Object',
        answer:4,
    },
    {
        question:"Which HTML Tag will use to scroll a text in web page?",
        choice1:'<marquee> & </marquee>',
        choice2:'<scroll> & </scroll>',
        choice3:'<round> & </round>',
        choice4:'<go> & </go>',
        answer:1,
    },
    {
        question:"Which of the following tags are related to Table in HTML ?",
        choice1:'<table> <row> <column>',
        choice2:'<table> <tr> <td>',
        choice3:'<table> <head> <body>',
        choice4:'<table> <header> <footer>',
        answer:2,
    },
  
    {
        question:"Which of the following are closures in Javascript?",
        choice1:'Functions',
        choice2:'object',
        choice3:'Variable',
        choice4:'All of the Above',
        answer:4,
    },
    {
        question:" ___________ is a uniform naming scheme for locating resources on the web.",
        choice1:'URL',
        choice2:'HTTP',
        choice3:'WEBNAME',
        choice4:'RESOURCENAME',
        answer:1,
    },
    {
        question:"The CSS property used to specify the transparency of an element is _____",
        choice1:'visibility',
        choice2:'filter',
        choice3:'overlay',
        choice4:'opacity',
        answer:4,
    },
    {
        question:"In how many ways can CSS be written in?",
        choice1:'1',
        choice2:'2',
        choice3:'3',
        choice4:'4',
        answer:3,
    },
    {
        question:"Which of the following are valid CSS position property values?",
        choice1:'static',
        choice2:'relative',
        choice3:'fixed',
        choice4:'All of the Above',
        answer:4,
    },

]

const SCORE_POINTS =10;
const MAX_QUESTIONS =10;


startGame = () => {
    questionCounter = 0
    score=0
    availableQuestions=[...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length===0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore',score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click',e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },650)
    })
})


incrementScore = num => {
    score+=num
    scoreText.innerText = score
}

startGame()

























