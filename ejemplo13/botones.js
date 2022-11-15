class Boton {
    constructor(contenedorElemento, texto) {
    this.contenedorElemento = contenedorElemento;
    this.texto = texto;
    this.onClick = this.onClick.bind(this);
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.addEventListener('click',this.onClick)
    this.contenedorElemento.append(boton);
    }
    onClick(){
    console.log('Hiciste clic en: '+this.texto);
    document.dispatchEvent(new CustomEvent('boton-click'));
    }
    }
    
    class Menu {
        constructor() {
        this.botonContenedor = document.querySelector('#menu');
        this.estatus = document.querySelector('#estatus');
        this.mostrarBotonClick = this.mostrarBotonClick.bind(this);
        this.buttons = [
        new Boton(this.botonContenedor, 'A'),
        new Boton(this.botonContenedor, 'B'),
        new Boton(this.botonContenedor, 'C')
        ];
        document.addEventListener('boton-click',this.mostrarBotonClick);
        }
        mostrarBotonClick(nombreBoton){
            console.log('Notificacion al menu');
            const nombreBoton = event.currentTarget.textContent;
        this.estatus.textContent = 'Clic en '+nombreBoton;
            }
        }
 