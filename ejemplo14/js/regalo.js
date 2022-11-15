class Regalo{
    constructor(containerElement){
    this.containerElement = containerElement;
    this.abrirRegalo = this.abrirRegalo.bind(this);
    this.image = document.createElement('img');
    this.image.src = 'gift-icon.png';
    this.image.addEventListener('click', this.abrirRegalo);
    this.containerElement.append(this.image);
    }

    abrirRegalo(event){
        this.image.src = 'giphy.gif';
        this.image.removeEventListener('click', this.abrirRegalo);
    }
}