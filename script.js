const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const chosenLevelNumberParagraph = document.querySelector('.chosen-level-number');

let chosenLevelNumber;


chooseLevelStage.forEach(element => {
    element.addEventListener("click", function (event) {
        document.querySelectorAll('.chosenLevel').forEach(element => {
            element.classList.remove('chosenLevel');
        });
        chosenLevelNumber = element.textContent;
        element.classList.toggle('chosenLevel');
    });
});


chooseLevelbutton.addEventListener("click", function (event) {
    document.location.href = "./game.html";
    chosenLevelNumberParagraph.innerHTML = chosenLevelNumber;
});