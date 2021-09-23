var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "aqua";
width_of_line =  3;
var lastX,lastY;
mouseEvent = ""; 

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove (e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
     ctx.beginPath();
     ctx.strokestyle = color;
     ctx.linewidth = width_of_line;
     
     ctx.moveTo (lastX,lastY);
     ctx.lineTo(currentX,currentY);
     ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}