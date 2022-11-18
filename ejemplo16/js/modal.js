class Modal {
    constructor(contenedor, photo_list) {
        this.contenedor = contenedor;
        this.contenedor.innerHTML = '';
        this.currentIndex = null;
        this.photo_list = photo_list;
        this.nextPhoto = this.nextPhoto.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        this.contenedor.addEventListener('click', this.onModalClick)
    }
    hideModal() {
        document.body.classList.remove('no-scroll');
        this.contenedor.classList.add('hidden');
        this.contenedor.innerHTML = '';
        document.removeEventListener('keydown', this.nextPhoto)
    }
    nextPhoto(event) {
        if (event.key === 'Escape') {
            this.hideModal();
            return;
        }
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }
        let nextIndex = this.currentIndex;
        if (event.key === 'ArrowLeft') {
            nextIndex--;
        } else {
            nextIndex++;
        }
        if (nextIndex < 0) {
            nextIndex = this.photo_list.length - 1;
        }
        if (nextIndex === this.photo_list.length) {
            nextIndex = 0;
        }
        const photoSrc = this.photo_list[nextIndex];
        this.contenedor.innerHTML = '';
        const image = new Image(photoSrc);
        this.contenedor.appendChild(image.image);
        this.currentIndex = nextIndex;
    }
    onModalClick() {
        this.hideModal();
    }
}