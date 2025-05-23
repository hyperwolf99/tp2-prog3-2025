const calcular = document.getElementById('calcular')

calcular.addEventListener('click', () => {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    //Validaciones
    if (!altura || !peso || altura <= 0 || peso <= 0) {
        alert('Por favor ingrese valores válidos')
        return
    } else {
        alert(`Su indice de masa corporal es: ${((+peso) / (+altura * +altura)).toFixed(2)}`)
    }
})