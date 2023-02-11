import { Component } from "react";
import { Button } from "./Button";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
// import { Modal } from "./Modal";

const KEY = `12755760-d2e38158efcb067b906f81c79`;
const URL = `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;


export default class App extends Component {

  state = {
    photoName: null
  }


  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }

  handleSearchBar = photoName => {
    this.setState({ photoName });
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
        <ImageGallery />
        <Button />

      </div>

    )
  }
};
