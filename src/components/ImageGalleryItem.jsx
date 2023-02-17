import React, { useState } from "react"
import Modal from "./Modal";
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <li className="ImageGalleryItem" >
            <img className="ImageGalleryItem-image"
                src={webformatURL}
                alt="picture1"
                onClick={showModal} />
            {isOpen &&
                <Modal largeImg={largeImageURL} hideModal={hideModal} />}
        </li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired
}