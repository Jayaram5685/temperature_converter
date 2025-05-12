let textBoxEle=document.getElementById("textBox");
let toCelsisEle=document.getElementById("toCelsius");
let toFahrenheitEle=document.getElementById("toFarehnheit");
let resultEle=document.getElementById("result");
let temp;

function convert(){



    if(toFahrenheitEle.checked){
        temp=Number(textBoxEle.value);

        temp=temp*9/5+32;
        resultEle.textContent=temp.toFixed(1)+"°F";
    }

    else if(toCelsisEle.checked){
        temp=Number(textBoxEle.value);

        temp=(temp-32)*(5/9);
        resultEle.textContent=temp.toFixed(1)+"°C";
    }

    else{
        resultEle.textContent="Select a Unit"
    }

}

function reset(){
    textBoxEle.value="";
    resultEle.textContent="Select a Unit";
    toCelsisEle.checked=false;
    toFahrenheitEle.checked=false;
}