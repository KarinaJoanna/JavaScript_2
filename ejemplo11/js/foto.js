function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

let currentIndex = null; //ex 11
const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.dataset.index = i; //ex 11
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

function onThumbnailClick(event) {
    currentIndex = event.currentTarget.dataset.index; // ex 11
    const image = createImage(event.target.src);
    modalView.appendChild(image);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove('hidden');

    document.addEventListener('keydown', nextPhoto); //ex 11
}

function onModalClick() {
    hideModal(); //ex 11
}

function hideModal() {
    document.body.classList.remove('non-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
    document.removeEventListener('keydown', nextPhoto); //ex 11
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

/*
Realiza acciones dependiendo de la tecla presionada
Parametro: Evento
*/
function nextPhoto(event) {
    // Si la tecla presionada fue ESCAPE, ocultamos el dialogo modal
    if (event.key === 'Escape') {
        hideModal();
        return;
    }
    //Si la tecla es diferente de flecha izquierda o derecha hacemos nada
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
    }
    //Guardamos el valor del indice actual
    let nextIndex = currentIndex;
    if (event.key === 'ArrowLeft') {
        // Si la tecla presionada es la flecha izquierda decrementamos el indice
        nextIndex--;
    } else {
        // Si la tecla presionada no es la flecha izquierda incrementamos el indice
        nextIndex++;
    }
    //Si hemos sobrepasado los limites del arreglo, hacer nada
    if (nextIndex < 0 || nextIndex == PHOTO_LIST.length) {
        return;
    }
    //asignar una imagen del arreglo de fotos con el nuevo indice
    const photoSrc = PHOTO_LIST[nextIndex];
    //eliminar el contenido actual de la vista
    modalView.innerHTML = '';
    //crear el nuevo elemento imagen
    const image = createImage(photoSrc);
    //adjuntar la imagen a la vista
    modalView.appendChild(image);
    //actualizar el valor del indice actual
    currentIndex = nextIndex;
}