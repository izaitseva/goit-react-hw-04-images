import React from "react";
// import { Grid } from "react-loader-spinner";
import ImageGalleryItem from "./ImageGalleryItem";

// import { Loader } from "./Loader";

export default class ImageGallery extends React.Component {

    render() {

        const { photos } = this.props;

        return (
            <ul className="gallery">
                {/* {loading && <Grid />} */}

                {/* {
                    photos.hits.map(el => (
                        <ImageGalleryItem id={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL} />
                    ))
                } */}
            </ul>
        )
    }
}