let izabrani, netacan1, netacan2;
let polje = document.getElementById("boja");

function randomBoja(){
    let boja = "#" + Math.floor(Math.random()*16777215).toString(16);
    return boja;
}

function randomDugme(){
    let biranje = Math.floor(Math.random() * 3);
    if(biranje == 0){
        izabrani = document.getElementById("opt1");
        netacan1 = document.getElementById("opt2");
        netacan2 = document.getElementById("opt3");
    }
    else if(biranje == 1){
        izabrani = document.getElementById("opt2");
        netacan1 = document.getElementById("opt1");
        netacan2 = document.getElementById("opt3");
    }
    else if(biranje == 2){
        izabrani = document.getElementById("opt3");
        netacan1 = document.getElementById("opt1");
        netacan2 = document.getElementById("opt2");
    }
}

function otkrij(){
    izabrani.style.borderColor = "green";
    netacan1.style.borderColor = "red";
    netacan2.style.borderColor = "red";
}

function pokrij(){
    document.getElementById("opt1").style.borderColor = "black";
    document.getElementById("opt2").style.borderColor = "black";
    document.getElementById("opt3").style.borderColor = "black";
    document.getElementById("opt1").style.backgroundColor = "white";
    document.getElementById("opt2").style.backgroundColor = "white";
    document.getElementById("opt3").style.backgroundColor = "white";
}

function tacan(){
    izabrani.style.backgroundColor = "lime";
    otkrij();
    console.log("tacan");
    ocistiEvente();
    setTimeout(main, 1000);
}

function netacan(){
    
    console.log("netacan");
    otkrij();
    ocistiEvente()
    setTimeout(main, 1000);
}

function ocistiEvente(){
    izabrani.removeEventListener("click", tacan);
    netacan1.removeEventListener("click", netacan);
    netacan2.removeEventListener("click", netacan);
}

function main(){
    pokrij();
    let boja = randomBoja();
    randomDugme();
    polje.style.backgroundColor = boja;
    izabrani.innerHTML = boja;
    netacan1.innerHTML = randomBoja();
    netacan2.innerHTML = randomBoja();
    console.log(boja, izabrani)
    izabrani.addEventListener("click", tacan);
    netacan1.addEventListener("click", netacan);
    netacan2.addEventListener("click", netacan);
}


