var validate = function(valore, rightanswer, form, span) {

var formname = document.getElementById(form)
var spanname = document.getElementById(span)

spanname.innerHTML = rightanswer;

if (valore == rightanswer) {
    formname.innerHTML ="<div style='background-color:lightgreen'><div style='text-align:center'><h1> GREAT! YOU'RE RIGHT: the correct answer is " + rightanswer + "</h1></div>";
}
else {

    formname.innerHTML ="<div style='background-color:pink'><div style='text-align:center'><h1>Sorry, you were wrong: The answer was: " + rightanswer + "</h1></div>";
}
}
