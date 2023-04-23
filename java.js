function shemowmeba() {
    var x =document.getElementById("number1").value;
    var a=document.getElementById("text");
    if(x==0)
    {a.innerHTML="რიცხვი არ შეიძლება იყოს 0-ის ტოლი";
    text.style.color="red";
return;}
if (x < 0){
    a.innerHTML=" მოცემული რიცხვი უარყოფითია";
    text.style.color="blue";
}else if (x > 0) {
    a.innerHTML="მოცემული რიცხვი დადებითია";
    text.style.color="green";
}
}
