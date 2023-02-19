import { useEffect, useState } from "react";
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

  const MAIN_URL = `https://pixabay.com/api/`;
  const KEY = `12755760-d2e38158efcb067b906f81c79`;
  const URL = `${MAIN_URL}?q=${photoName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`

  const handleSearchBar = photoName => {
    setPage(1);
    setPhotoName(photoName);
    setPhotos([]);
  }

  useEffect(() => {
    setLoading(true);

    fetch(URL)
      .then((res) => res.json())
      .then((photos) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...photos.hits]);
        setIsVisibleLoadMore(!(photos.length >= photos.totalHits || photoName === ''));
        setError(null);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [URL, photoName, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchBar} />
      {loading && <Loader />}
      {error && <p>Something went wrong. {photoName} doesn't exist </p>}
      <ImageGallery photos={photos} />
      {isVisibleLoadMore && (
        <Button loadMore={loadMore} />
      )}

    </div>
  )
}