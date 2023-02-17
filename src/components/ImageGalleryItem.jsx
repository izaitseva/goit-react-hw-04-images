import React, { useState } from "react"
import Modal from "./Modal";
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {

    const [isModalOpen, setModal] = useState(false);

    const showModal = () => {
        this.setState({ isModalOpen: true });
    };

    const hideModal = () => {
        this.setState({ isModalOpen: false });
    };

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

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired
}