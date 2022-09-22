let boton = document.getElementById("boton")

function resultado(){
    const result = document.getElementById('result')
    let temperatura = document.getElementById("celcios").value;
    let convertir =  ((temperatura - 32) * 5/9).toFixed(2)
    result.value =  convertir
}
boton.addEventListener('click',resultado)

