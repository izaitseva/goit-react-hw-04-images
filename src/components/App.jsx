import { Component } from "react";
import { Button } from "./Button";
import ImageGallery from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import { Loader } from "./Loader";
import '../styles.css';

const KEY = `12755760-d2e38158efcb067b906f81c79`;

export default class App extends Component {

  state = {
    photoName: '',
    photos: [],
    loading: false,
    page: 1,
    isVisibleLoadMore: false,
    error: null
  }

  handleSearchBar = photoName => {
    this.setState({
      page: 1,
      photoName: photoName,
      photos: []
    });
  }

  componentDidUpdate(prevProps, prevState) {

    const MAIN_URL = `https://pixabay.com/api/`;
    const KEY = `12755760-d2e38158efcb067b906f81c79`;

    if (prevState.photoName !== this.state.photoName || prevState.page !== this.state.page) {

      fetch(`${MAIN_URL}?q=${this.state.photoName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(photos => {
          this.setState(prevState => {

            const photosList = prevState.photos.concat(photos?.hits ?? [])

            return {
              error: null,
              photos: photosList,
              isVisibleLoadMore: !(photosList.length >= photos.totalHits)
            }
          })

        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
  }

  render() {

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchBar} />
        {this.state.loading && <Loader />}
        {this.state.error && <p>Something went wrong. {this.state.photoName} doesn't exist </p>}
        <ImageGallery photos={this.state.photos} />
        {this.state.isVisibleLoadMore && (
          <Button page={this.state.page} loadMore={this.loadMore} />
        )}

      </div>
    )
  }
};
