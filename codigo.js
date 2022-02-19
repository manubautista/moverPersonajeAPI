let pj = document.getElementById("pj");
let speed = 20;
let x = 160;
let y = 600;


document.addEventListener("keydown",(e)=>{
console.log(e.key)
    if (e.key == ("ArrowRight")) {
        moverDerecha()
    } 
    else if (e.key == ("ArrowLeft")) { 
        moverIzquierda()
    }
    else if (e.key == ("ArrowDown")) {
        moverAbajo()
    }
    else if (e.key == ("ArrowUp")) {
        moverArriba()
    }
}
)


function moverDerecha(){
    x += speed;
    pj.style.transform = "none"
    pj.style.marginLeft = x +"px";
}


function moverIzquierda(){
    x -= speed;
    pj.style.transform = "scaleX(-1)"
    pj.style.marginLeft = x +"px";
}

function moverAbajo(){
    y += speed;
    pj.style.marginTop = y+ "px"
}

function moverArriba(){
    y -= speed;
    pj.style.marginTop = y+"px"
}

document.addEventListener("keydown",(e)=>{

    if (e.key == ("D")) {
        moverDerecha()
    } 
    else if (e.key == ("A")) { 
        moverIzquierda()
    }
    else if (e.key == ("S")) {
        moverAbajo()
    }
    else if (e.key == ("W")) {
        moverArriba()
    }
}
)

document.addEventListener("keydown",(e)=>{

    if (e.key == ("d")) {
        moverDerecha()
    } 
    else if (e.key == ("a")) { 
        moverIzquierda()
    }
    else if (e.key == ("s")) {
        moverAbajo()
    }
    else if (e.key == ("w")) {
        moverArriba()
    }
}
)