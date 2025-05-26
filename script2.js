//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad")

    let vlmNombre = validarLargoAncho(eNombre,vNombre,eErrorNombre)
    let vlmEdad = validarLargoAnchoEdad(eEdad,vEdad,eErrorEdad)

    if(vlmNombre && vlmEdad){
        let persona = {
            nombre: vNombre,
            edad: vEdad
        }
        personas.push(persona)
        eNombre.value = ""
        eEdad.value = ""
        console.log(personas)
    }
    cargarTabla()

}

function validarLargoAncho(elemento,valor,error){
    
    if(valor.length <= 0){
        error.innerText = "Debe ingresar algun valor para el Nombre"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }
    else if(valor.length <= 2){
        error.innerText = "Debe ingresar mas de 3 caracteres para el Nombre"
        elemento.style.backgroundColor = "orange"
        elemento.style.color = "white"
    }
    else if(valor.length >= 3){
        error.innerText = "Ingresado correctamente"
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
}



function validarLargoAnchoEdad(elemento,valor,error){
    
    if(valor === ""){
        error.innerText = "Debe ingresar algun valor para La Edad"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }
    else if(valor >= 0 && valor <= 17){
        error.innerText = "Debe ingresar mas mayor a 18 años"
        elemento.style.backgroundColor = "orange"
        elemento.style.color = "white"
    }
    else if(valor >= 18 && valor <= 99){
        error.innerText = "Edad Ingresado correctamente"
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
    else if(valor >= 100){
        error.innerText = "Deberias estar muerto"
        elemento.style.backgroundColor = "darkred"
        elemento.style.color = "white"
    }
}

function cargarTabla(){
    let eNombre = document.getElementById("nombre")
    let eEdad = document.getElementById("edad")
    let eCuerpoTabla = document.getElementById("cuerpoTabla")

    eCuerpoTabla.innerHTML = personas.map((p,index)=>{
        return "<tr>"+
                "<td>"+p.nombre+"</td>"+
                "<td>"+p.edad+"</td>"+
                "<td>"+
                "<button onclick='cargarDatos("+index+")'>Actualizar</button>"+
                "<button onclick='eliminar("+index+")'>Eliminar</button>"+
                "</td>"+
                "</tr>"
            })
}

function CargarDatos(indice){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre1")

    let eEdad = document.getElementById("edad1")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad1")

    let vlmNombre = validarLargoAncho(eNombre,vNombre,eErrorNombre)
    let vlmEdad = validarLargoAnchoEdad(eEdad,vEdad,eErrorEdad)

    if(vlmNombre && vlmEdad){
        let persona = personas.map((p,index)=>{
            if(indice === index){
                let persona = {
                    nombre: p.nombre,
                    edad: p.edad
                }
                eNombre.value = p[0].nombre
                eNombre.value = p[0].edad
            }
    })
        personas.push(persona)
        eNombre.value = ""
        eEdad.value = ""
        console.log(personas)
    }
    cargarTabla()
}


/*if(vlmNombre && vlmEdad){
    persona = 
    personas.push(persona)
    




} */