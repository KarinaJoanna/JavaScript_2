class Aplicacion {
    constructor(contenedorRegalo, contenedorTitulo) {
        this.contenedorRegalo = contenedorRegalo;
        this.contenedorTitulo = contenedorTitulo;
        this.regalos = [];
        this.cargarContenedorRegalo();
    }

    cargarContenedorRegalo() {
        for (const enlace of REGALOS_ENLACES) {
            const regalo = new Regalo(this.contenedorRegalo, enlace);
            this.regalos.push(regalo);
        }
    }
}