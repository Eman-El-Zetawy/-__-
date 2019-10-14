var input =document.getElementById("input");
var button =document.getElementById("button");
var select =document.getElementById("select");
var div =document.getElementById("div");
var p =document.getElementById("p");
var t ;
button.addEventListener("click" , funbutten);
var i=0;

function funbutten(){
var t =document.getElementById("select").value;
p.innerHTML +='<li class="li">'+input.value+'</li>'
if(t==1){
    document.getElementsByClassName("li")[i++].style = 'color:'  + "red" ;
}
if(t==2){
    document.getElementsByClassName("li")[i++].style = 'color:'  + "blue"; }
if(t==3){
    document.getElementsByClassName("li")[i++].style = 'color:'  + "green" ; }
if(t==4){ 
    document.getElementsByClassName("li")[i++].style = 'color:'  + "gray" ; }
 console.log(t);
}
input.addEventListener("keypress",funenter);
function funenter(event){
    if(event.key==="Enter"){
        funbutten();
}}
