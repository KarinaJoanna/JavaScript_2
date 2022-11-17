const progressTable = document.querySelector('.progress-table');

let numeroSerie = 1;
for (const propiedad in TEST_PIELES){
  //console.log(propiedad);

  const renglon = document.createElement('div');
  renglon.classList.add('table-row');

  const serial = document.createElement('div');
  serial.classList.add('serial');

  const textoSerial = document.createTextNode(numeroSerie);

  serial.appendChild(textoSerial);
  renglon.appendChild(serial);
  progressTable.appendChild(renglon);


  const pregunta  = document.createElement('div');
  pregunta.classList.add('pregunta');

  const h4 = document.createElement('h4');
  const textoH4 = document.createTextNode(propiedad);
  h4.setAttribute('align','center');

  h4.appendChild(textoH4);
  pregunta.appendChild(h4);
  renglon.appendChild(pregunta);

  const saltoLinea = document.createElement('br');

  const imagen = document.createElement('img');
  imagen.src = 'img/textura.jpeg';
  imagen.align = 'center';
  imagen.height = '100';
  imagen.width = '150';

  pregunta.appendChild(saltoLinea);
  pregunta.appendChild(imagen);

  renglon.appendChild(saltoLinea);

  const respuesta = document.createElement('div');
  respuesta.classList.add('respuesta');
  respuesta.align = 'center';

  const input = document.createElement('div');
  input.classList.add('input-group-icon','mt-10');

  const formulario = document.createElement('div');
  formulario.classList.add('form-select');

  const seleccion = document.createElement('select');
  seleccion.id = 'select'+numeroSerie;

  let indice = 0;
  const opcionDefault = document.createElement('option');
  opcionDefault.value = indice;
  opcionDefault.text = 'Selecciona una opcion';
  seleccion.appendChild(opcionDefault);

  for(let valor of TEST_PIELES[propiedad]){
    indice++;
    const opcion = document.createElement('option');
    opcion.value = indice;
    opcion.text = valor;
    seleccion.appendChild(opcion);
  }
  formulario.appendChild(seleccion);
  input.appendChild(formulario);
  respuesta.appendChild(input);
  renglon.appendChild(respuesta);
  numeroSerie++;
}
