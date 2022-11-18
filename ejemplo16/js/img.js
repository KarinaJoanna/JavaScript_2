class Image {
    constructor(src, dataset) {
        this.src = src
        this.onClick = this.onClick.bind(this)
        this.image = this.createImage(dataset);
        this.image.addEventListener('click', this.onClick)
    }
    createImage(dataset) {
        const image = document.createElement('img');
        image.src = this.src;
        image.dataset.index = dataset;
        return image;
    }
    onClick(event) {
        console.log(event.target)
        const eventInfo = { target: event.target };
        document.dispatchEvent(new CustomEvent('click-image', {
            detail:
                eventInfo
        }));
    }
}