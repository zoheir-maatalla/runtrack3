
document.addEventListener("keydown", function (focus){

    Text=document.getElementById("keylogger");
    Text.value += focus.key;
});