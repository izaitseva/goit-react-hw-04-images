import React from "react"
import { Modal } from "./Modal"

export default class ImageGalleryItem extends React.Component {

    state = {
        isModalOpen: false
    }

    showModal = () => {
        this.setState({ isModalOpen: true });
    };

    hideModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {

        const { webformatURL, largeImageURL } = this.props
        return (
            <li className="ImageGalleryItem" >
                <img className="ImageGalleryItem-image" 
                src={webformatURL} 
                alt="picture1"
                onClick={this.showModal} />
                {this.state.isModalOpen &&
                <Modal largeImg={largeImageURL} hideModal={this.hideModal} />}
            </li>
        )
    }
}