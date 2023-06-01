var paragraph = document.querySelector(".firstP");
function change(){
    paragraph.textContent = "Scroll down to use our love calc.";
}
document.querySelector(".Try_out").onclick = function(){change()};
function TheAlert(){
    var input1 = document.querySelector(".input").value;
    var input2 = document.querySelector(".input2").value;
    var combinationOfInput = input1 + input2;
    combinationOfInput = combinationOfInput.toLowerCase();
    var trueCounter = 0;
    var loveCounter = 0;
    for (var i = 0; i < combinationOfInput.length; i++){
        if(combinationOfInput.charAt(i) === "t" || combinationOfInput.charAt(i) === "r"){
            trueCounter++;
        }else if(combinationOfInput.charAt(i) === "u" || combinationOfInput.charAt(i) === "e"){
            trueCounter++;
        }
        if(combinationOfInput.charAt(i) === "l" || combinationOfInput.charAt(i) === "o"){
            loveCounter++;
        }else if(combinationOfInput.charAt(i) === "v" || combinationOfInput.charAt(i) === "e"){
            loveCounter++;
        }
    }
    trueCounter = trueCounter * 10;
    var percentage = trueCounter + loveCounter;
    if (percentage > 100){
        percentage = 100;
    }
    document.querySelector(".value").textContent = percentage + "%";
}
document.querySelector(".submit").onclick = function(){TheAlert()};