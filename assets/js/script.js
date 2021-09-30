functioncheck(); {
    var first_question = document.quiz-container.first_question.value;
    var correct = 0;
}

if (first_question == "Boris Johnson") {
    correct++;
}

document.getElementById("after_answering").style.visibility = "visible";
document.getElementById("correct-answer").innerHTML = "You got " + correct + " correct.";