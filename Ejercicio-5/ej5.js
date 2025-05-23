const calcular = document.getElementById('calcular')

calcular.addEventListener('click', () => {
    const ladoA = +document.getElementById('ladoA').value
    const ladoB = +document.getElementById('ladoB').value
    const ladoC = +document.getElementById('ladoC').value

    //Validaciones
    if (!ladoA || !ladoB || !ladoC || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert('Por favor ingrese valores válidos')
        return
    } else if (ladoA <= ladoC) {
        alert('El lado A debe ser mayor que el lado C para formar el triangulo')
        return
    } else {
        let triangulo = (ladoB * (ladoA - ladoC)) / 2
        let rectangulo = (ladoB * ladoC)

        let resultado = rectangulo + triangulo

        alert(`El area es: ${resultado.toFixed(2)} m²`)
    }
})