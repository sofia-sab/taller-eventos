function divClick(e){
    alert("Hola! Soy el div");
    e.stopPropagation();
    
}

function btnClick(){
    alert("Hola!");
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("div").addEventListener('click', ()=>{
        divClick();
        
    }
)})

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("btn").addEventListener('click', (e)=>{
        e.stopPropagation();
        btnClick();
       
    }
)})
