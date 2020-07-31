const state = {
    currentQuestion: 0,
    score: 0,
    page: "landing",
    questions: [{
            title: "Who led the NBA in Rebounding during the 1995-1996 season?",
            answers: ["answer 1, answer 2, answer 3, answer 4"],
            correct: 0
        },
        {
            title: "Who led the NBA in Rebounding during the 1995-1996 season?",
            answers: ["answer 1, answer 2, answer 3, answer 4"],
            correct: 1
        },
        {
            title: "Who led the NBA in Rebounding during the 1995-1996 season?",
            answers: ["answer 1, answer 2, answer 3, answer 4"],
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
        <h2>
            Wrong! The answer was Dennis Rodman
        </h2>
        <button id="nextQuestion">
            Next question
        </button>
    </section>`)
    } else {
        $('main').html(`<section id="answer">
        <h2>
            Correct! Great job!
        </h2>
        <h2>
            Wrong! The answer was Dennis Rodman
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
                Your score is 7 out of 10
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
                    <label for="answer">Dennis Rodman</label>
                    <input type="radio" value="0" name="answer">
                    <label for="answer">David Robinson</label>
                    <input type="radio" value="0" name="answer">
                    <label for="answer">Jason Caffey</label>
                    <input type="radio" value="0" name="answer">
                    <label for="answer">Patrick Ewing</label>
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