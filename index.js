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
            title: "Who is the NBA All Time leading scorer",
            answers: ["Karl Malone", "Michael Jordan", "Kareem Abdul-Jabbar", "Lebron James"],
            correct: 2
        }
    ]


}
$('body').on('submit', 'form', function(event) {
    event.preventDefault()
    const answer = event.target.answer.value
    console.log(answer)
    const question = state.questions[state.currentQuestion]
    console.log(question)
    if (answer == question.correct) {
        state.score++
            $('main').html(`<section id="answer">
        <h2>
            Correct! Great job!
        </h2>
        <button id="nextQuestion">
            Next question
        </button>
    </section>`)
    } else {
        $('main').html(`<section id="answer">
        <h2>
            Wrong! The answer was ${question.answers[question.correct]}
        </h2>
        <button id="nextQuestion">
            Next question
        </button>
    </section>`)
    }
    state.currentQuestion++
})

$('body').on('click', '#nextQuestion', function(event) {
    if (state.questions.length == state.currentQuestion) {
        $('main').html(`
        <section id="score">
            <h2>
                Your score is ${state.score} out of 3
            </h2>
            <button id = "nextQuestion">
            Play again
        </button>
        </section>
        `)
        state.currentQuestion = 0
        state.score = 0
        return
    }
    const question = state.questions[state.currentQuestion]
    console.log('test')
    $('main').html(` 
        <section id="question">
            <h2>
                ${question.title}
            </h2>
            <form>
                <fieldset>

                    <input type="radio" value="0" name="answer">
                    <label for="answer">${question.answers[0]}</label>
                    <input type="radio" value="1" name="answer">
                    <label for="answer">${question.answers[1]}</label>
                    <input type="radio" value="2" name="answer">
                    <label for="answer">${question.answers[2]}</label>
                    <input type="radio" value="3" name="answer">
                    <label for="answer">${question.answers[3]}</label>
                </fieldset>
                <button>
                Submit answer
            </button>
            </form>
        </section>`)

})

function start() {
    $('main').html(`
    <section id="landing">
            <h2>
                Test Your Knowledge
            </h2>
            <button id="nextQuestion">
            Click To Start
        </button>
        </section>
    `)
}

$(start)