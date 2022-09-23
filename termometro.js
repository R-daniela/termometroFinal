let boton = document.getElementById("boton")
boton.addEventListener('click',resultado)

function resultado(){
    const result = document.getElementById('result')
    let temperatura = document.getElementById("celcios").value
    let convertir =  ((temperatura - 32) * 5/9).toFixed(1)
    result.value =  convertir

    document.getElementById('mercurio').style.height=convertir+'px'
    document.getElementById('mercurio').innerText=convertir+'º'
    document.getElementById('mercurio').style.color='white'
}

function reiniciar(){
    document.getElementById("result").value=''
    document.getElementById("celcios").value=''
    document.getElementById("mercurio").style.height='0%'
    
}
let boton2 = document.getElementById("reiniciar");
boton2.addEventListener("click", reiniciar)

