// --------------------- GESTION DU QUIZ -------------------------//

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    monQuiz41.forEach((currentQuestion, questionNumber) => {
        const answers = []; // pour stocker la liste des réponses possibles
        // On ajoute un bouton 'radio' pour chaque lettre-réponse possible
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push( // on ajoute à la sortie la question et les réponses
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join(''); // on combine notre liste de sortie en une string HTML et le mettre sur la page
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers'); // on rassemble les containers réponses 
    let numCorrect = 0;
    monQuiz41.forEach( (currentQuestion, questionNumber) => { // pour chaque question
      const answerContainer = answerContainers[questionNumber]; // on cherche la réponse sélectionnée
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){ // si c'est la bonne réponse
        numCorrect++; // +1 bonne réponse
        answerContainers[questionNumber].style.color = 'green'; // on colore les réponses en vert 
      } else {
        answerContainers[questionNumber].style.color = 'red';  // on colore les réponses en rouge
      }
    });
    resultsContainer.innerHTML = `${numCorrect} sur ${monQuiz41.length} <br> (tu peux revenir en arrière)`; // on affiche le nb total de bonnes réponses
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 1){
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz41');
  const resultsContainer = document.getElementById('results41');
  const submitButton = document.getElementById('submit41');
  const monQuiz41 = [
    { question: "Comment appelle-t-on l’adresse renseignée ?",
    answers: { a: "Une URL", b: "Un hyperlien", c: "Un ULM" },
    correctAnswer: "a" },
    { question: "Quelle est la page du site affichée ?",
    answers: { a: "/accueil", b: "/manga", c: "/comics" },
    correctAnswer: "b" },
    { question: "Comment est-ce possible ?",
    answers: { a: "Le navigateur est magique", b: "Le navigateur récupère l'IP du serveur et affiche la page", c: "Le navigateur contient la page avant qu'on lui demande" },
    correctAnswer: "b" }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous41");
  const nextButton = document.getElementById("next41");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 1;
  showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})()

