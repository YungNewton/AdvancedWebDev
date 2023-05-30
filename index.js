var paragraph = document.querySelector(".firstP");
function change(){
    paragraph.innerHTML = "Scroll down to use our love calc.";
}
document.querySelector(".Try_out").onclick = function(){change()};