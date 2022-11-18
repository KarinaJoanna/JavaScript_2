class Boton {
    constructor(contenedorElemento, texto) {
        this.contenedorElemento = contenedorElemento;
        this.texto = texto;
        this.onClick = this.onClick.bind(this);

        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.addEventListener('click',this.onClick);
        this.contenedorElemento.append(boton);
    }
    onClick() {
        const eventInfo = {nombreBoton: this.texto};
        document.dispatchEvent(new CustomEvent('boton-click', {
            detail:
            eventInfo
        }));
    }
}



