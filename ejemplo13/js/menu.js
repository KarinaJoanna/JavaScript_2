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
        const eventInfo = { nombreBoton: this.texto }; document.dispatchEvent(new CustomEvent('boton-click',{detail:
        eventInfo}));
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
        mostrarBotonClick(event){
            console.log('Notificacion al menu');
            const nombreBoton = event.detail.nombreBoton; this.estatus.textContent = 'Clic en '+nombreBoton;
            }
        }
 