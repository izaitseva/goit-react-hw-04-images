import React from "react"

export default class ImageGalleryItem extends React.Component {

    state = {
        id: '',
        webformatURL: '',
        largeImageURL: '',
    }

    render() {

        const {webformatURL} = this.props
        return (
            <li className="gallery-item" >
                <img src={webformatURL} alt="picture1" />
            </li>
        )
    }
}