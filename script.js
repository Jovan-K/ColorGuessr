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

function tacan(){
    polje.style.backgroundColor = "green";
    console.log("tacan");
    ocistiEvente();
    setTimeout(main, 1000);
}

function netacan(){
    polje.style.backgroundColor = "red";
    console.log("netacan");
    ocistiEvente()
    setTimeout(main, 1000);
}

function ocistiEvente(){
    izabrani.removeEventListener("click", tacan);
    netacan1.removeEventListener("click", netacan);
    netacan2.removeEventListener("click", netacan);
}

function main(){
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


