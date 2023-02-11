import * as basicLightbox from 'basiclightbox'

export const Modal = () => {
    return (
        <template>
            <div class="overlay">
                <div class="modal">
                    <img src="" alt="" />
                    <p>Check modal</p>
                </div>
            </div>
        </template>
    )
}

const instance = basicLightbox.create(
	document.querySelector('template')
)

instance.show()