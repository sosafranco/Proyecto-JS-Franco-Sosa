let usuarioGuardado = "francososa"
let passwordGuardada = "123"

const login = () =>{
    let ingresar = false
    for(let i=3; i > 0; i--){
        let usuarioIngresado = prompt(`Ingrese su usuario, tiene ${i} intentos`).toLowerCase().trim()
        let passwordIngresada = prompt(`Ingrese su contraseña, tiene ${i} intentos`).trim()

        if(usuarioGuardado === usuarioIngresado && passwordGuardada === passwordIngresada){
            alert(`bienvenido ${usuarioGuardado}!`)
            ingresar = true
            break
        }else if(usuarioGuardado !== usuarioIngresado || passwordGuardada !== passwordIngresada){
            alert(`Nombre de usuario y/o contraseña incorrectos. Intente de nuevo.`)
        }

    }
    return ingresar
}

if(login()){
    const plazoDeDias = 30

    function calcularPlazoFijo(montoInicial, tasaDeInteres, plazoDeDias) {
        const tasaMensual = ((tasaDeInteres / 365) * plazoDeDias * montoInicial) / 100
        const montoFinal = tasaMensual + montoInicial
        return montoFinal
    }

    function calcularPlazoFijoA12Meses(){
        let montoInicial = +(prompt("Ingrese el monto incial (capital):")).trim()
        let tasaDeInteres = +(prompt("Ingrese la tasa de interés anual (%):")).trim()

        if (isNaN(montoInicial) || isNaN(tasaDeInteres)){
            alert("Error: Ingrese datos válidos. Solo puede ingresar números.")
            calcularPlazoFijoA12Meses()
            return
        }
        const meses = 12
        let montoActual = montoInicial

        console.log(`Monto inicial: $${montoInicial}`)

        for (let i = 1; i <= meses; i++) {
            const montoFinalMes = calcularPlazoFijo(montoActual, tasaDeInteres, plazoDeDias)
            console.log(`Monto después de ${i} meses: $${montoFinalMes.toFixed(2)}`)
            montoActual = montoFinalMes
        }
    }
    calcularPlazoFijoA12Meses()
}else{
    console.log(`Error: datos no válidos. Reinicie la página y vuelva a intentarlo.`)
}