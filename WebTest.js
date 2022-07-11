var Student=document.getElementById("name");
var roll=document.getElementById("rollno");
var college=document.getElementById("college");
var date=document.getElementById("date");

setTimeout(addText,3000);

function addText(){
Student.innerText="[Rishika Singh]";
roll.innerText="[201500571]";
college.innerText="GLA University,Mathura";
var Todaydate=new Date();
var td=Todaydate.getDate()+'-'+Todaydate.getMonth() +'-'+Todaydate.getFullYear();
date.innerText=td;
}  