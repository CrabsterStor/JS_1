function funWrite() {
    "use strict";
    document.writeln("<article>"+
                        "<a id=\"#writeln\"></a>"+
                        "<h2>document.writeln()</h2>"+
                        "<p>"+
                        "Wpisuje wyrażenie HTML lub kod JavaScipt do dokumentu"+
                        "</p>"+
                        "<div id=\"writeDIV\">"+      
                        "</div>"+
                    "</article>");
}

function funPromt(){
    "use strict";
    var person = prompt("Wproawdź swoje imię");
    var p = document.getElementById("promtExample");
    if (person !== null) {
        p.innerHTML =
        "Witaj "+ person +" na naszej stronie!";
    }
    p.style.color = "green";
}
function funAlert(){
    "use strict";
    var text = "MIŁEGO DNIA";
    alert(text);
}

function funBtnListener(){
   "use strict"; document.getElementById("btnListnerExample").addEventListener("click", function(){
    this.style.backgroundColor = "green";
    });
}

function funParseInt(){
    "use strict";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var suma = parseInt(num1) + parseInt(num2);
    document.getElementById("parseIntExample").innerHTML = suma;
}

function funParseFloat(){
    "use strict";
    var num11 = document.getElementById("one").value;
    var num22 = document.getElementById("two").value;
    var sum = parseFloat(num11) + parseFloat(num22);
  
    document.getElementById("parseFloatExample").innerHTML = sum;
}


var wylosowana = Math.floor(Math.random() * (10 - 1) + 1);
function funIf(){
    "use strict";
    var user = prompt("Zgadnij wylosowaną liczbę 1-10");
    if(wylosowana == user){
        alert("WYGRAŁEŚ");
    }
    else{
        funIf();
    }
}

function funCase(){
    "use strict";
    var choice = prompt("Wprawdź cyfrę 1 lub 2");
    var num = parseInt(choice);
    switch(num) {
    case 1:
        alert("Kim jesteś?");
        break;
    case 2:
        alert("Jesteś zwycięzcą!");
        break;
    default:
        alert("oj Ty żartownisiu ;)");
}
}

function funWhile(){
    "use strict";
    document.getElementById("wielo").innerHTML = "";
    var number = parseInt(document.getElementById("number").value);
    var border = document.getElementById("border").value;
    if(number === 1) {
        document.getElementById("wielo").innerHTML = "1 (...)";
    }
    else{
        var current = number;
    
        while(current<border){
            document.getElementById("wielo").innerHTML += current +"</br>";
            current *= number;
        }
    }
}

function funFor(){
    "use strict";
    var range1 = document.getElementById("r1").value;
    var range2 = document.getElementById("r2").value;
    var i;
    for (i = range1; i <= range2; i++) { 
    document.getElementById("ifExample").innerHTML += i +"</br>";
    }
}
function windowEvent(){
   "use strict"; document.getElementById("winListenerExample").innerHTML = Math.random();
}