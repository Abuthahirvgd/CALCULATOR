var screen = document.getElementById('outputscreen');
function clickButton(value){
    screen.value += value;
}
function clearAll(){
    screen.value = "";
}
function equalTo(){
    try{
    var result = eval(screen.value)
    screen.value = result;
    }catch{
        screen.value="error";
    }
}
function clearButton(){
    screen.value = screen.value.toString().slice(0,-1)
}
