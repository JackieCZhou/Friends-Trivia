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

$("#btn").on("click", start);

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
        $("#correct").show();
        clearInterval(intervalId)

        if ($('#A1').is(':checked')) {
            // alert("it's checked");
            correct++
        } else{
            incorrect++
        }
        if ($('#A2').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('#A3').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('#A4').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('#A5').is(":checked")) {
            correct++
        } else{
            incorrect++
        }
        answer();
    }
}
function answer() {
    $("#correct").show();
    $("#incorrect").show();
    correctText.textContent = "Correct Answers: " + correct;
    incorrectText.textContent = "Incorrect Answers " + incorrect;
}




