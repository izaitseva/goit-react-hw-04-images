import React from "react";

import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from 'prop-types';

export default function ImageGallery({ photos }) {

        return (
            <ul className="ImageGallery">
                {
                    photos.map(el => (
                        <ImageGalleryItem key={el.id} id={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL} />
                    ))
                }
            </ul>
        )
    }

ImageGallery.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}
