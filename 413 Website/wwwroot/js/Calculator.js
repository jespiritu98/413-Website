function CalculateGrades() {
    //select ids/
    var assign = $('#assign').val()
    var proj = $('#proj').val()
    var quiz = $('#quiz').val()
    var exam = $('#exam').val()
    var intex = $('#intex').val()
    //calculate
    var finalPct1 = (assign * 0.55) + (proj * 0.05) + (quiz * 0.1) + (exam * 0.20) + (intex * 0.10);
    var finalPct2 = (Math.round(finalPct1 * 100) / 100)
    var finalLetterGrade
    //determine grade//
    if (finalPct >= 94) {
        finalLetterGrade = "A"
    } else if (finalPct >= 90) {
        finalLetterGrade = "A-"
    } else if (finalPct >= 87) {
        finalLetterGrade = "B+"
    } else if (finalPct >= 84) {
        finalLetterGrade = "B"
    } else if (finalPct >= 80) {
        finalLetterGrade = "B-"
    } else if (finalPct >= 77) {
        finalLetterGrade = "C+"
    } else if (finalPct >= 74) {
        finalLetterGrade = "C"
    } else if (finalPct >= 70) {
        finalLetterGrade = "C-";
    } else if (finalPct >= 67) {
        finalLetterGrade = "D+";
    } else if (finalPct >= 64) {
        finalLetterGrade = "D"
    } else if (finalPct >= 60) {
        finalLetterGrade = "D-";
    } else if (finalPct < 60) {
        finalLetterGrade = "E"
    }
    //output grade//
    alert("Final Score is: " + finalPct2 + "with a final letter grade of: " + finalLetterGrade + ".")

    $("#calc_button").click(function () {
        CalculateGrades();
    })
};


