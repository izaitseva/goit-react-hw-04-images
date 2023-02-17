import { Component, useState } from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import { Loader } from "./Loader";
import '../styles.css';


export default function App() {

  const [photoName, setPhotoName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMore, setIsVisibleLoadMore] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchBar = photoName => {

    setPage(1);
    setPhotoName(photoName);
    setPhotos([]);

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

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchBar} />
      {loading && <Loader />}
      {error && <p>Something went wrong. {photoName} doesn't exist </p>}
      <ImageGallery photos={photos} />
      {isVisibleLoadMore && (
        <Button page={page} loadMore={loadMore} />
      )}

    </div>
  )
}