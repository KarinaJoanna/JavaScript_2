class Aplicacion {
    constructor(contenedorRegalo, contenedorTitulo) {
        this.contenedorRegalo = contenedorRegalo;
        this.contenedorTitulo = contenedorTitulo;

        this.regaloAbierto = this.regaloAbierto.bind(this);
        this.regalos = [];
        this.cargarContenedorRegalo();
        this.regaloAbiertos = 0;
    }

    cargarContenedorRegalo() {
        for (const enlace of REGALOS_ENLACES) {
            const regalo = new Regalo(this.contenedorRegalo, enlace, this.regaloAbierto);
            this.regalos.push(regalo);
        }
    }

    regaloAbierto() {
        this.regalosAbiertos++;
        if (this.regalosAbiertos === this.regalos.lenght) {
            this.contenedorTitulo.textContent = 'Disfuta de tus regalos';
        }
    }
}