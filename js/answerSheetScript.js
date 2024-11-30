const questions = [
    {
        topic: "Video Games",
        question: "Q1. In what year was Pokémon created?",
        choices: ["1996", "1986", "1995", "1989"], 
        correctAnswer: "1996", 
        userAnswer: ""
    },
    {
        topic: "Video Games",
        question: "Q2. In the 2023 Game Awards, what game won “Game of the Year”?",
        choices: ["Resident Evil 4", "The Legend of Zelda: Tears of the Kingdom", "Baldur's Gate 3", "Marvel’s Spider-Man 2"], 
        correctAnswer: "Baldur's Gate 3", 
        userAnswer: ""
    },
    {
        topic: "Video Games",
        question: "Q3. What is Mario's last name?",
        choices: ["Luigi", "Super", "Bro", "Mario"], 
        correctAnswer: "Mario", 
        userAnswer: ""
    },
    {
        topic: "Video Games",
        question: "Q4. What is the best selling video game in history?",
        choices: ["Minecraft", "Tetris", "Super Mario", "GTA V"], 
        correctAnswer: "Tetris", 
        userAnswer: ""
    },
    {
        topic: "Video Games",
        question: "Q5. What is the first ever arcade game created?",
        choices: ["Computer Space", "Pong", "Spacewar!", "Pac-Man"], 
        correctAnswer: "Computer Space", 
        userAnswer: ""
    },
    {
        topic: "Technology",
        question: "Q6. What is the first ever computer virus made?",
        choices: ["The Creeper Program", "ILOVEYOU", "Worm", "Brain"], 
        correctAnswer: "The Creeper Program", 
        userAnswer: ""
    },
    {
        topic: "Technology",
        question: "Q7. After Effects is a visual software made by which company?",
        choices: ["Microsoft", "Adobe", "Apple", "Canva"], 
        correctAnswer: "Adobe", 
        userAnswer: ""
    },
    {
        topic: "Technology",
        question: "Q8. What is the name of the electric car company founded by Elon Musk?n",
        choices: ["Toyota", "Lucid", "BYD", "Tesla"], 
        correctAnswer: "Tesla", 
        userAnswer: ""
    },
    {
        topic: "Technology",
        question: "Q9. As of 2019, what was the second most popular search engine?",
        choices: ["Google", "Petal", "Bing", "DuckDuckGo"], 
        correctAnswer: "Bing", 
        userAnswer: ""
    },
    {
        topic: "Technology",
        question: "Q10. In 2021, what name did Facebook rebrand into?",
        choices: ["Meta", "Oculus", "Snap", "Evolve"], 
        correctAnswer: "Meta", 
        userAnswer: ""
    },
    {
        topic: "Solar System",
        question: "Q11. How many planets are there in the Solar System?",
        choices: ["9", "8", "11", "10"], 
        correctAnswer: "8", 
        userAnswer: ""
    },
    {
        topic: "Solar System",
        question: "Q12. Which planet is closest to the sun?",
        choices: ["Mercury", "Mars", "Venus", "Jupiter"], 
        correctAnswer: "Mercury", 
        userAnswer: ""
    },
    {
        topic: "Solar System",
        question: "Q13. The Solar System is located in what galaxy?",
        choices: ["Milkyway", "Metaverse", "Black hole", "Universe"], 
        correctAnswer: "Milkyway", 
        userAnswer: ""
    },
    {
        topic: "Solar System",
        question: "Q14. Where do most comets arrive from?",
        choices: ["Saturn's Rings", "The Oort Cloud", "The Asteroid Belt", "The Beyond"], 
        correctAnswer: "The Oort Cloud", 
        userAnswer: ""
    },
    {
        topic: "Solar System",
        question: "Q15. Which moon is the moon of Mars?",
        choices: ["Io", "Charon", "Charol", "Phobos"], 
        correctAnswer: "Phobos", 
        userAnswer: ""
    },
    {
        topic: "Movies",
        question: "Q16. What is the name of the fictional African country in the movie Black Panther?",
        choices: ["Afakandu", "Florin", "Wakanda", "Umbazi"], 
        correctAnswer: "Wakanda", 
        userAnswer: ""
    },
    {
        topic: "Movies",
        question: "Q17. What film won the Best Picture Oscar in 2020?",
        choices: ["Parasite", "Intruder", "The Hunt", "Jumanji: The Next Level"], 
        correctAnswer: "Parasite", 
        userAnswer: ""
    },
    {
        topic: "Movies",
        question: "Q18. Who is the director of Oppenheimer?",
        choices: ["Jordan Peele", "James Gunn", "The Russo Brothers", "Christopher Nolan"], 
        correctAnswer: "Christopher Nolan", 
        userAnswer: ""
    },
    {
        topic: "Movies",
        question: "Q19. What is the highest-grossing animated film of all time?",
        choices: ["Frozen II", "The Lion King", "Inside Out 2", "Toy Story 2"], 
        correctAnswer: "Inside Out 2", 
        userAnswer: ""
    },
    {
        topic: "Movies",
        question: "Q20. What was the first animated movie to be nominated for Best Picture at the Oscars?",
        choices: ["Moana", "Beauty and the Beast", "Mulan", "Snow White"], 
        correctAnswer: "Beauty and the Beast", 
        userAnswer: ""
    },
];

function handleQuestion() {
    const quizLength = questions.length - 1;

    for (let i = 0; i <= quizLength; i++) {
        answerBoxContainer.innerHTML += 
        `<div id="answerBox">
            <h4 id="question">${questions[i].question}</h4>
            <h6 id="correctAnswer">Correct Answer: ${questions[i].correctAnswer}</h6>
            <h6 id="placeholder">You answered: ${questions[i].userAnswer}</h6>
        </div>`;

        let ansBox = document.querySelectorAll('#answerBox');
        let quizQuestions = document.querySelectorAll('#question');
        let correctAnswer = document.querySelectorAll('#correctAnswer');
        let userAnswer = document.querySelectorAll('#placeholder');

        for (let k = 0; k <= i; k++) {
            ansBox[k].classList.add("custom-answer-box");
            quizQuestions[k].classList.add("questions");
            correctAnswer[k].classList.add("correct-answer");
            userAnswer[k].classList.add("placeholder-yourAnswer");
        }
    }
    
}

handleQuestion()