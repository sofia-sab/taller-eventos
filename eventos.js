function divClick(){
    alert("Hola! Soy el div")
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("div").addEventListener('click', ()=>{
        divClick();
       
    }
)})