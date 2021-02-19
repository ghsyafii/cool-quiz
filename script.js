const correctAnswers = ['A', 'B', 'A', 'A', 'A', 'B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const theScore = document.querySelector('.theScore');

const result = document.querySelector('.result');

let score = 0;


form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check correctAnswers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 10;
        }
    });

    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(() => {
        theScore.innerHTML = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }

    }, 10)

})





