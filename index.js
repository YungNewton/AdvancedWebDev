var paragraph = document.querySelector(".firstP");
function change(){
    paragraph.textContent = "Scroll down to use our love calc.";
}
document.querySelector(".Try_out").onclick = function(){change()};
var input1 = document.querySelector(".input").value
var input2 = document.querySelector(".input2").value
function calculate(FirstInput, secondInput){
    document.querySelector(".submit").onclick = function(){alert(FirstInput)};
}
calculate(input1, input2);