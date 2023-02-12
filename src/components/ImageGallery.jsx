import React from "react";
import { Loader } from "./Loader";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from 'prop-types';

export default class ImageGallery extends React.Component {

    render() {

        const { photos, loading } = this.props;
        const hits = photos?.hits ?? [];

        return (
            <ul className="ImageGallery">
                {loading && <Loader />}
                {
                    hits.map(el => (
                        <ImageGalleryItem key={el.id} id={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL} />
                    ))
                }
            </ul>
        )
    }
}

ImageGallery.propTypes = {
    loading: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object)
}
