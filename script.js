var Hours=0
var Mins=0
var Secs=0
var MS=0
var Interval;
var Runner;
function Start(){
    if(!Runner===true){
  Runner=setInterval(Starter,10)
        
    }
function Starter( ){
  MS=MS+1
  if(MS===100){
    MS=0
    Secs=Secs+1
  }
  if(Secs===60){
    Secs=0
    Mins=Mins+1
  }
  if(Mins===60){
    Mins=0
    Hours=Hours+1
  }
 

 document.getElementById("Hours").innerHTML=("0"+Hours).slice(-2)
 document.getElementById("Secs").innerHTML=("0"+Secs).slice(-2)
 document.getElementById("Mins").innerHTML=("0"+Mins).slice(-2)
 document.getElementById("MS").innerHTML=("0"+MS).slice(-2)

}
}
function Stop(){
clearInterval(Runner)
Runner=null
}
function Reset(){
  Stop()
  Runner=null
Hours=0
Mins=0
Secs=0
MS=0
document.getElementById("Hours").innerHTML=("0" + Hours).slice(-2)
 document.getElementById("Secs").innerHTML=("0"+Secs).slice(-2)
 document.getElementById("Mins").innerHTML=("0"+Mins).slice(-2)
 document.getElementById("MS").innerHTML=("0"+MS).slice(-2)
}
