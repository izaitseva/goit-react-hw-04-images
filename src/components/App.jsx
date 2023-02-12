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
    photos: [],
    loading: false
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }

  handleSearchBar = photoName => {
    this.setState({ photoName });
  }

  componentDidUpdate(prevProps, prevState) {

    const MAIN_URL = `https://pixabay.com/api/`;
    const KEY = `12755760-d2e38158efcb067b906f81c79`;

    if (prevState.photoName !== this.state.photoName) {
      console.log("change name");

      fetch(`${MAIN_URL}?q=${this.state.photoName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(photos => this.setState({ photos }))
        .finally(() => this.setState({ loading: false }));
    }
  }

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
        <ImageGallery loading={this.state.loading} photos={this.state.photos} />
        <Button />

      </div>
    )
  }
};
