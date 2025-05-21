//1. Acceder al formulario html mediante el atributo id=formRegistro
const form = document.getElementById('formRegistro');
//2. Capturar el envio
form.onsubmit = function (e) {
    e.preventDefault(); //Evita que el navegador se recargue

//3. Obtener  valores
    const nombre = form.nombre.value.trim(); //trim() elimina los espacios en blanco al inicio y al final
    const apellidos = form.apellidos.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();
    const edad = form.edad.value.trim();

    const pais = form.pais.value; //value devuelve el valor del elemento seleccionado
    const provincia = form.provincia.value;

    //4. Expresiones regulares
    const soloLetras = "^[a-zA-ZÀ-ÿ\s]"; 
    const emailValido = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    const edadValida = "^[0-9]{1,3}$"; 
    const soloNumeros = "^[0-9]+$"; 

    //5. Validar el campo nombre
    if(nombre.length < 2 || !soloLetras.test(nombre)){ //test() devuelve true o false
        alert("Nombre inválido");
        return; //detener la funcion
    }
    
    if(apellidos.length < 2 || !soloLetras.test(apellidos)){
        alert("Apellidos inválidos");
        return;
    }
    
    if(!emailValido.test(email)){ 
        alert("Email inválido");
        return;
    }
   
    if(telefono.length < 2 || !soloNumeros.test(telefono)){
        alert("Teléfono inválido");
        return;
    }
    
    if(edad.length < 2 || !edadValida.test(edad)){
        alert("Edad inválida");
        return;
    }
    //validar pais y provincia
    if(!pais){ //if(pais === '')
        alert("Seleccione un país");
        return;
    }
    
    if(!provincia){
        alert("Seleccione una provincia");
        return;
    }

    alert('Formulario enviado');
    form.reset(); //limpiar el formulario
}
