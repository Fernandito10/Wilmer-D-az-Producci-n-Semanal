const selectDiasProduccion = document.getElementById('id-select-dias')
const btnCargarProduccion = document.getElementById('id-btn-cargar-produccion')
const btnPresentar = document.getElementById('id-btn-presentar-produccion')

const txtPresentar = document.getElementById('id-listado-produccion')

const btnMayorProduccion = document.getElementById('id-btn-mayor-produccion')
const txtMayorProduccion = document.getElementById('id-txt-mayor-produccion')

const btnMenorProduccion = document.getElementById('id-btn-menor-produccion')
const txtMenorProduccion = document.getElementById('id-txt-menor-produccion')

const btnPromedioSemanal = document.getElementById('id-btn-promedio-semanal')
const txtPromedioSemanal = document.getElementById('id-txt-promedio-semanal')

const btnPromedioSuperior = document.getElementById('id-btn-promedio-superior')
const txtPromedioSuperior = document.getElementById('id-txt-promedio-superior')

const btnProduccionCritica = document.getElementById('id-btn-promedio-critico')
const txtProduccionCritica = document.getElementById('id-txt-promedio-critico')

const btnProduccionRepetida = document.getElementById('id-btn-produccion-repetida')
const txtProduccionRepetida = document.getElementById('id-txt-produccion-repetida')

let vectorProduccion = []
const diasSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']


// EVENTOS
btnCargarProduccion.addEventListener('click', function () {
    const dimension = selectDiasProduccion.value
    cargarProduccion(dimension)
})

btnPresentar.addEventListener('click', function () {
    txtPresentar.value = vectorProduccion.join(', ')
})

btnMayorProduccion.addEventListener('click', function () {
    const indice = mayorProduccion()
    const mayor = vectorProduccion[indice]
    const dia = diasSemana[indice]
    txtMayorProduccion.value = 'Dia: ' + dia + ' Valor: ' + mayor
})

btnMenorProduccion.addEventListener('click', function () {
    const infer = menorProduccion()
    const menor = vectorProduccion[infer]
    const diamenor = diasSemana[infer]
    txtMenorProduccion.value = 'Dia: ' + diamenor + ' Valor: ' + menor
})

btnPromedioSemanal.addEventListener('click', function () {
    const promedio = promedioSemanal()
    txtPromedioSemanal.value = promedio
})

btnPromedioSuperior.addEventListener('click', function () {
    const superior = promedioSuperior()
    txtPromedioSuperior.value = superior
})

btnProduccionCritica.addEventListener('click', function () {
    const critico = produccionCritica()
    txtProduccionCritica.value = critico
})

btnProduccionRepetida.addEventListener('click', function () {
    const repetida = produccionRepetida()
    txtProduccionRepetida.value = repetida
})


// FUNCIONES
function cargarProduccion(dimension) {
    vectorProduccion = []
    for (let i = 0; i < dimension; i++) {
        const numAleatorio = Math.ceil(Math.random() * 1000)
        vectorProduccion[i] = numAleatorio
    }
}

function mayorProduccion() {
    let mayor = 0
    let index = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        const produccion = vectorProduccion[i]
        if (produccion > mayor) {
            mayor = produccion
            index = i
        }
    }
    return index
}

function menorProduccion() {
    let menor = vectorProduccion[0]
    let inferior = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        const produccion = vectorProduccion[i]
        if (produccion < menor) {
            menor = produccion
            inferior = i
        }
    }
    return inferior
}

function promedioSemanal() {
    let suma = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        suma += vectorProduccion[i]
    }
    return suma / vectorProduccion.length
}

function promedioSuperior() {
    let suma = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        suma += vectorProduccion[i]
    }

    let promedio = suma / vectorProduccion.length
    let contador = 0

    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] > promedio) {
            contador++
        }
    }
    return contador
}

function produccionCritica() {
    let contador = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] < 100) {
            contador++
        }
    }
    return contador
}

function produccionRepetida() {
    let mensaje = ''
    let repetido = false

    for (let i = 0; i < vectorProduccion.length; i++) {
        for (let j = i + 1; j < vectorProduccion.length; j++) {
            if (vectorProduccion[i] === vectorProduccion[j]) {
                mensaje += 'Dias: ' + diasSemana[i] +
                           ' y ' + diasSemana[j] +
                           ' Produccion: ' + vectorProduccion[i] + '\n'
                repetido = true
            }
        }
    }

    if (!repetido) {
        mensaje = 'No hay produccion repetida'
    }

    return mensaje
}