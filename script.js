

(function(){

    "use strict"
    //vairables
    var people= 0;
    var bill =0;
    var custom = 0;
    var billAmt = document.getElementById("bill") ;
    var noPeople = document.getElementById("people") ; 
    var customPer = document.getElementById("custom") ;
    var billError = document.querySelector(".bill-error p");
    var peopleError = document.querySelector(".people-error p");

    billAmt.oninput = getBill;
    noPeople.oninput = getPeople;
    customPer.oninput = getCustom;

    billAmt.onchange = function (){
        if(bill == 0 || bill == undefined || bill  == NaN){
            billError.innerHTML="Can't be Zero";
            document.querySelector("#bill").className = "input-left input-error";
        }else{
            billError.innerHTML = "";
            document.querySelector("#bill").className = "input-left";
        }
        document.querySelector(".reset").className = "reset-enable";
        document.querySelector("#reset").disabled = false;


    }
    noPeople.onchange = function (){
        if(people == 0 || people == undefined || people == NaN){
            peopleError.innerHTML="Can't be Zero";
            document.querySelector("#people").className = "input-left input-error";
        }else{
            peopleError.innerHTML = "";
            document.querySelector("#people").className = "input-left";
        }
    }

    function getBill(){
         bill = parseFloat(billAmt.value);
    }

    function getPeople(){
         people = parseFloat(noPeople.value);
    }

    function getCustom(){
         custom = parseFloat(customPer.value);
    }
    let totAmt;
    let tipAmt;

    // bill
    function calculation(x){
        tipAmt = (bill * (x/100))/people ;
        totAmt = bill /people + tipAmt;
        
        document.getElementById("tipAmt").innerHTML = `$${tipAmt.toFixed(2)}`;
        document.getElementById("totAmt").innerHTML = `$${totAmt.toFixed(2)}`;
        

    }
    document.getElementById("5per").onclick = function(){calculation(5)};
    document.getElementById("10per").onclick = function(){calculation(10)};
    document.getElementById("15per").onclick = function(){calculation(15)};
    document.getElementById("25per").onclick =function(){calculation(25)};
    document.getElementById("50per").onclick = function(){calculation(50)};
    document.getElementById("custom").onchange = function(){calculation(custom)};


    document.querySelector("#reset").onclick = function(){
        billAmt.value = "";
        noPeople.value = "";
        customPer.value = "";
        document.querySelector("#tipAmt").innerHTML = "$0.00";
        document.querySelector("#totAmt").innerHTML = "$0.00";
        document.querySelector(".reset-enable").className = "reset";

    };
    



})()