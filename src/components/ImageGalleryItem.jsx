import React from "react"
// import { Modal } from "./Modal"

export default class ImageGalleryItem extends React.Component {

    state = {
        id: '',
        webformatURL: '',
        largeImageURL: '',
    }

    // showModal = () => {
    //     this.setState({ show: true });
    // };

    // hideModal = () => {
    //     this.setState({ show: false });
    // };

    render() {

        const { webformatURL } = this.props
        return (
            <li className="ImageGalleryItem" >
                <img className="ImageGalleryItem-image" src={webformatURL} alt="picture1" />
                {/* <Modal showModal={this.showModal} /> */}
            </li>
        )
    }
}