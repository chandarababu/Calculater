var inputvalue = document.getElementById("screen");


function Calculater(x) {
    if (document.getElementById("screen").value == 0) {
        document.getElementById("screen").value = "";
        document.getElementById("screen").value = x;

    }
    else {
        document.getElementById("screen").value += x;
    }
 
}

function Solve() {
    // let a = document.getElementById("screen").value;
    // let y = eval(a);
    // document.getElementById("screen").value = y;

    try{
        inputvalue.value = eval(inputvalue.value);
    }
    catch(err){
        alert("Number is invalid")
    }
}

function Clear() {
    document.getElementById("screen").value = 0;
}

