# CALCULO DE PLAZO FIJO

Simulé un algoritmo para calcular un plazo fijo de renovación automatica (cada 30 dias), por 12 meses. Su lógica es la siguiente:

## LOGIN:

+ Comenzamos el algoritmo con 2 variables llamadas "usuarioGuardado" y "passwordGuardada" simulando ser datos guardados que tendremos que validar para posteriormente realizar el calculo del plazo fijo:

```javascript
let usuarioGuardado = "francososa"
let passwordGuardada = "123"
```
+ Para ello, el usuario tendrá 3 intentos de inicio de sesión. Cada intento fallido, disminuye del anterior. El usuario podrá acceder a éstos mediante prompts:

```javascript
let usuarioGuardado = "francososa"
let passwordGuardada = "123"

const login = () =>{
    let ingresar = false
    for(let i=3; i > 0; i--){
        let usuarioIngresado = prompt(`Ingrese su usuario, tiene ${i} intentos`).toLowerCase().trim()
        let passwordIngresada = prompt(`Ingrese su contraseña, tiene ${i} intentos`).trim()
    }
}
```
```javascript
/*
El ".toLowerCase()" despues del prompt es para pasar todas las mayúsculas a minúsculas.

Y el ".trim()" quita los espacios al principio y final de una palabra, tomando como valor real solo lo que está tipeado por el usuario.
*/
```
+ Ahora debemos ejecutar una validación. En este caso, las variables guardadas <i><strong>(usuario y contraseña)</strong></i> deben ser estrictamente igual a las que ingresa el usuario.

    - Si la validación se cumple, se le notificará al ingresante mediante un alert dándole la bienvenida.

    - De lo contrario, se le comunicará que el nombre de ususario y/o contraseña son incorrectos. Restando de a 1 intentos. Cuando llegue a cero, se mostrará un error por consola.

```javascript
let usuarioGuardado = "francososa"
let passwordGuardada = "123"

const login = () =>{
    let ingresar = false
    for(let i=3; i > 0; i--){
        let usuarioIngresado = prompt(`Ingrese su usuario, tiene ${i} intentos`).toLowerCase().trim()
        let passwordIngresada = prompt(`Ingrese su contraseña, tiene ${i} intentos`).trim()

        if(usuarioGuardado === usuarioIngresado && passwordGuardada === passwordIngresada){
            alert(`Bienvenido ${usuarioGuardado}!`)
            ingresar = true
            break
        }else if(usuarioGuardado !== usuarioIngresado || passwordGuardada !== passwordIngresada){
            alert(`Nombre de usuario y/o contraseña incorrectos.`)
        }
    }
}
if(login()){
}else{
    console.log(`Error: datos no validos. Reinicie la página y vuelva a intentarlo.`)
}
```

## FORMULA DE PLAZO FIJO:

+ Al estar calculando un plazo fijo de renovación automatica mensual (c/30 dias). Debemos asignar una constante que contenga el valor de esta cantidad de dias:

```javascript
if(login()){
const plazoDeDias = 30
}else{
    console.log(`Error: datos no validos. Reinicie la página y vuelva a intentarlo.`)
}
```

+ Luego, debemos crear una función que ejecute el cálculo de la tasa de ganancia mensual que va a tener el plazo fijo. Ésta tasa la sumaremos al monto inicial así podremos saber la ganancia total por el primer mes.

```javascript
if(login()){
    const plazoDeDias = 30

    function calcularPlazoFijo(montoInicial, tasaDeInteres, plazoDeDias) {
        const tasaMensual = ((tasaDeInteres / 365) * plazoDeDias * montoInicial) / 100
        const montoFinal = tasaMensual + montoInicial
        return montoFinal
    }
}else{
    console.log(`Error: datos no validos. Reinicie la página y vuelva a intentarlo.`)
}
```

+ Si bien tenemos una fórmula para calcular la tasa mensual, solo aplica para el primer mes. Ya que, para los demas meses, montoInicial y montoFinal van a ser distintos. Ya que no se van a aplicar por éstos, sino por "montoActual". Por ende debemos aclarar que montoInicial y montoActual van a ser iguales. Y, a su vez, montoActual va a ser igual a montoFinalMes.

    Entonces, si seguimos el razonamiento:

            montoInicial=montoActual
            montoActual=montoFinalMes

            montoInicial: $100.000,00
            tasaMensual: $7.972,60
            montoFinalMes(montoInicial + tasaMensual): $107.972,60

            montoActual: $107.972,60
            tasaMensual: $8.608,83
            montoFinalMes(montoActual + tasaMensual): $116.580,83

            montoActual: $116.580,33
            tasaMensual: $9.294,53
            montoFinalMes(montoActual + tasaMensual): $125.875,36

    Y asi sucesivamente hasta la cantidad de tiempo que precisemos. En nuestro caso, va a ser por 12 meses.

    Luego debemos crear una función que, además de realizar la iteración, le pida 2 datos fundamentales para que el codigo funcione, mediante prompts. Estos son: montoInicial y tasaDeInteres

    Sin estos dos, el código no podria ejecutarse ya que depende de la interacción con el usuario.

```javascript
    const plazoDeDias = 30

    function calcularPlazoFijo(montoInicial, tasaDeInteres, plazoDeDias) {
        const tasaMensual = ((tasaDeInteres / 365) * plazoDeDias * montoInicial) / 100
        const montoFinal = tasaMensual + montoInicial
        return montoFinal
    }
    function calcularPlazoFijoA12Meses(){
        let montoInicial = +(prompt("Ingrese el monto inicial (capital):")).trim()
        let tasaDeInteres = +(prompt("Ingrese la tasa de interés anual (%):")).trim()
    }
```

A su vez, para darle un poco de dinamismo al código, vamos a exigirle al usuario que solo ingrese números, asi, si ingresa strings, o palabras sueltas, no se genere un error en el cálculo y/o se rompa el código:

```javascript
    function calcularPlazoFijoA12Meses(){
        let montoInicial = +(prompt("Ingrese el monto inicial (capital):")).trim()
        let tasaDeInteres = +(prompt("Ingrese la tasa de interés anual (%):")).trim()

        if (isNaN(montoInicial) || isNaN(tasaDeInteres)){
                alert("Error: Ingrese datos válidos. Solo puede ingresar números.")
                calcularPlazoFijoA12Meses()
                return
            }
    }
```
Para terminar, debemos asignar una constante que defina la cantidad de meses, para así poder realizar la iteración:

```javascript
    function calcularPlazoFijoA12Meses(){
        let montoInicial = +(prompt("Ingrese el monto inicial (capital):")).trim()
        let tasaDeInteres = +(prompt("Ingrese la tasa de interés anual (%):")).trim()

        if (isNaN(montoInicial) || isNaN(tasaDeInteres)){
            alert("Error: Ingrese datos válidos. Solo puede ingresar números.")
            calcularPlazoFijoA12Meses()
            return
        }

        const meses = 12
        let montoActual = montoInicial

        console.log(`Monto inicial: $${montoInicial}`)

        for (let i = 1; i <= meses; i++){
            const montoFinalMes = calcularPlazoFijo(montoActual, tasaDeInteres, plazoDeDias)
            console.log(`Monto después de ${i} meses: $${montoFinalMes.toFixed(2)}`)
            montoActual = montoFinalMes
        }
    }
    calcularPlazoFijoA12Meses()
```
```javascript
    /*
    el ".toFixed()" es utilizado para no mostrar los números decimales, no redondea ni para arriba ni abajo, solo, no los muestra.
    si colocamos un 2 dentro del (), lo que estaría provocando, es que solo se muestren los primeros 2 números decimales después del entero.
    */
```
