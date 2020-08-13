const state = {
    currentQuestion: 0,
    score: 0,
    page: "landing",
    questions: [{
            title: "Who led the NBA in Rebounding during the 1995-1996 season?",
            answers: ["Dennis Rodman", "David Robinson", "Jason Caffey", "Scottie Pippen"],
            correct: 0
        },
        {
            title: "Which team won the 2015-2016 season?",
            answers: ["Cleveland Cavaliers", "Golden State Warriors", "LA Lakers", "Boston Celtics"],
            correct: 0
        },
        {
            title: "Who is the NBA All Time leading scorer?",
            answers: ["Karl Malone", "Michael Jordan", "Kareem Abdul-Jabbar", "Lebron James"],
            correct: 2
        },
        {
            title: "How many 3 point field goals did Shaquille O'Neal make in his career?",
            answers: ["0", "1", "2", "6"],
            correct: 1
        },
        {
            title: "Who is the shortest player to ever play in the NBA?",
            answers: ["Spud Webb", "Earl Boykins", "Keith Jennings", "Muggsy Bogues"],
            correct: 3
        },
        {
            title: "Which NBA player had his number retired by the Harlem Globetrotters?",
            answers: ["Willie Gardner", "Wilt Chamberlain", "Connie Hawkins", "Nat Clifton"],
            correct: 1
        },
        {
            title: "What season was the 3 point shot implemented?",
            answers: ["79-80", "80-81", "71-72", "59-60"],
            correct: 0
        },
        {
            title: "Scott Skiles holds the NBA record for how many assists in a game?",
            answers: ["28", "25", "30", "18"],
            correct: 2
        },
        {
            title: "Which country won a gold medal at the 2004 Olympics in Greece?",
            answers: ["Italy", "Serbia", "USA", "Argentina"],
            correct: 3
        },
        {
            title: "Which NBA player holds the record for most steals in an NBA playoff game (10)?",
            answers: ["John Stockton", "Allen Iverson", "Jason Kidd", "Gary Payton"],
            correct: 1
        }
    ]


}
$('body').on('submit', 'form', function(event) {
    event.preventDefault()
    const answer = event.target.answer.value


    renderFeedback(answer)

    state.currentQuestion++
})

$('body').on('click', '#nextQuestion', function(event) {
    if (state.questions.length == state.currentQuestion) {
        $('main').html(`
        <section id="score">
            <h2>
                Your score is ${state.score} out of ${state.questions.length}
            </h2>
            <button id = "nextQuestion">
            Play again
        </button>
        <img src="crossover.gif"/>
        </section>
        `)
        state.currentQuestion = 0
        state.score = 0
        return
    }
    const question = state.questions[state.currentQuestion]
    console.log('test')
    $('main').html(`
    ${makeScore()} 
        <section id="question">
            <h2>
                ${question.title}
            </h2>
            <form>
                <fieldset>

                    <input type="radio" required value="0" name="answer">
                    <label for="answer">${question.answers[0]}</label>
                    <input type="radio" required value="1" name="answer">
                    <label for="answer">${question.answers[1]}</label>
                    <input type="radio" required value="2" name="answer">
                    <label for="answer">${question.answers[2]}</label>
                    <input type="radio" required value="3" name="answer">
                    <label for="answer">${question.answers[3]}</label>
                </fieldset>
                <button>
                Submit answer
            </button>
            </form>
        </section>`)

})

function makeScore() {

    return `
    <h2> Your score ${state.score}
    <br/>
     Question ${state.currentQuestion+1} of ${state.questions.length} 
    </h2>

`

}

function renderFeedback(answer) {
    const question = state.questions[state.currentQuestion]
    if (answer == question.correct) {
        state.score++
            $('main').html(`<section id="answer">
            ${makeScore()}
        <h2>
            Correct! Great job!
        </h2>
        <img src="madeshot.gif"/>
        <button id="nextQuestion">
            Next question
        </button>
    </section>`)
    } else {
        $('main').html(`<section id="answer">
        ${makeScore()}
        <h2>
            Wrong! The answer was ${question.answers[question.correct]}
        </h2>
        <img src="fail.gif"/>
        <button id="nextQuestion">
            Next question
        </button>
    </section>`)
    }
}

function start() {
    $('main').html(`
    <section id="landing">
            <h2>
                Test Your Knowledge
            </h2>
            <button id="nextQuestion">
            Click To Start
        </button>
        <img src="curry.gif"/>
        </section>
    `)
}

$(start)