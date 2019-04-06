$("#correct").hide();
$(".card").hide();


$(".btn").on("click", function () {
    document.getElementById("audio").play()
    start()
});



var clockRunning = false;
var time = 60;
var correct = 0;
var incorrect = 0;

var correctText = document.getElementById("correct-answers-text");
var incorrectText = document.getElementById("incorrect-answers-text");

$("#btn#").on("click", start);

function start() {

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        $(".card").show();
    }
}


function count() {
    time--;
    $("#display").text(time)
    if (time === 0) {
        clearInterval(intervalId)
        if ($("input[name=question1]:checked").val()) {
            correct++;
        } else {
            incorrect++;
        }
        $("#correct").show();
    }
}

function answer() {
    $("#question1").prop("checked", true);
    if (true){
        correct.push(true);
}


correctText.textContent = "Correct Answers: " + correct;
incorrectText.textContent = "Incorrect Answers " + incorrect;


