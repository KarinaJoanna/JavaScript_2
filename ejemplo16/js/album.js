class Album {
    constructor(albumView, photo_list) {
        this.albumView = albumView;
        this.miniaturas = [];
        const contenedor = document.querySelector('#modal-view');
        contenedor.innerHTML = '';
        this.modal = new Modal(contenedor, photo_list);
        this.imagesSrc = photo_list;
        this.onThumbnailClick = this.onThumbnailClick.bind(this)
        this.cargarimg();
    }
    cargarimg() {
        for (let i = 0; i < this.imagesSrc.length; i++) {
            const photoSrc = this.imagesSrc[i];
            const image = new Image(photoSrc, i);
            document.addEventListener('click-image', this.onThumbnailClick);
            this.miniaturas.push(image);
            this.albumView.appendChild(image.image);
        }
    }
    onThumbnailClick(event) {
        if (event.detail.target.parentElement !== this.albumView)
            return
        this.modal.currentIndex = event.detail.target.dataset.index;
        const image = new Image(event.detail.target.src);
        this.modal.contenedor.appendChild(image.image);

        document.body.classList.add('no-scroll');
        this.modal.contenedor.style.top = window.pageYOffset + 'px';
        this.modal.contenedor.classList.remove('hidden');

        document.addEventListener('keydown', this.modal.nextPhoto)
    }
}








