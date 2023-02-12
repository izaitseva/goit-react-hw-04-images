import { Component } from "react";
import { Button } from "./Button";
import ImageGallery from "./ImageGallery";
import { Searchbar } from "./Searchbar";

// import { Modal } from "./Modal";

const KEY = `12755760-d2e38158efcb067b906f81c79`;
// const MAIN_URL = `https://pixabay.com/api/`;
const URL = `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;


export default class App extends Component {

  state = {
    photoName: '',
    photos: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }

  handleSearchBar = photoName => {
    this.setState({ photoName });
  }

  // componentDidUpdate(prevProps, prevState) {

  //   const MAIN_URL = `https://pixabay.com/api/`;
  //   const KEY = `12755760-d2e38158efcb067b906f81c79`;

  //   if (prevProps.photoName !== this.props.photoName) {
  //     console.log("change name");

  //     setTimeout(() => {
  //       fetch(`${MAIN_URL}?q=${this.props.photoName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  //         .then(res => res.json())
  //         .then(photo => this.setState({ photo }))
  //         .finally(() => this.setState({ loading: false }));
  //     }, 1000);
  //   }
  // }

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleSearchBar} />
        <ImageGallery loading={true} photos={this.state.photos} />
        <Button />

      </div>
    )
  }
};
