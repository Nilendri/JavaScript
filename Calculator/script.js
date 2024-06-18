const calc = document.getElementById("result");
function display(num) {
  calc.innerHTML += num;
}
function append(exp){
    calc.innerHTML+=''+exp+''
}
function calculate(){
    let result=eval(calc.innerHTML)
    calc.innerHTML=result
}
function clearOne() {
  let clear = document.getElementById("result").innerHTML;
  if (clear == "undefined") {
    document.getElementById("result").innerHTML = "";
  } else {
    let result = clear.slice(0, clear.length - 1);
    document.getElementById("result").innerHTML = result;
  }
}
function allclear(){
    let clear = document.getElementById("result");
    clear.innerHTML=''
}