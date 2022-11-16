class Boton {
    constructor(contenedorElemento, texto) {
        this.contenedorElemento = contenedorElemento;
        this.texto = texto;
        this.onClick = this.onClick.bind(this);
        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.addEventListener('click', this.onClick)
        this.contenedorElemento.append(boton);
    }
    onClick() {
        console.log('Hiciste clic en: ' + this.texto);
    }
}
const botonContenedor = document.querySelector('#menu');
const boton1 = new Boton(botonContenedor, 'A');
const boton2 = new Boton(botonContenedor, 'B');
const boton3 = new Boton(botonContenedor, 'C');