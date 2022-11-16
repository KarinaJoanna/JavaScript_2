class Regalo {
    constructor(containerElement, regaloSrc) {
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);

        this.regaloSrc = regaloSrc;
        this.image = document.createElement('img');
        this.image.src = 'gift-icon.png';
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.append(this.image);
    }

    abrirRegalo(event) {
        this.image.src = this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
    }
}