function onClick() {
  console.log("hiciste clic");

  const selects = document.querySelectorAll("select");

  let combinacion = '';
  let exito = true;

  for (let seleccion of selects) {
    if(seleccion.value === '0'){
      alert('Debes seleccionar todas las opciones');
      exito = false;
      break;
    }
    combinacion = combinacion + seleccion.value;
  }

  if(exito){
        let paginaResultado = '';
        for (var respuesta in TEST_RESPUESTAS) {
           //console.log(respuesta +' ' +TEST_RESPUESTAS[respuesta]);
           if(respuesta === combinacion){
             paginaResultado = TEST_RESPUESTAS[respuesta];
           }
        }

        if(paginaResultado === ''){
          alert('De acuerdo a tus respuestas debes agendar una cita');
          location.replace('test.html');
        }else{
          location.replace(paginaResultado);
        }
  }

}

const botonTest = document.querySelector("#boton-test");
botonTest.addEventListener('click', onClick);
