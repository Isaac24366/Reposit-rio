let input = document.getElementById("input");
function n(value){
    //document.getElementById("input").value += value;
    input.value += value;
}
function c(){
    //document.getElementById("input").value = "";
    input.value = "";
}
function calcular(){
    //document.getElementById("input").value = eval(document.getElementById("input").value);
    input.value = eval(input.value);
}
