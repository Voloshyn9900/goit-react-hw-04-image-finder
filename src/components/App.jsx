import shortid from 'shortid';
import { useState, useEffect } from 'react';
import { fetchPhoto } from '../api';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function feathImages() {
      const queryCut = query.split('//');
      const querywithOutId = queryCut[1];

      if (query === '') {
        return;
      }

      try {
        setIsLoading(true);
        const addPhoto = await fetchPhoto(querywithOutId, page, { signal });
        setImages(prevImages => {
          return [...prevImages, ...addPhoto.hits];
        });
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    feathImages();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleSubmit = newQuery => {
    setQuery(`${shortid.generate()}//${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && images.length % 12 === 0 && (
        <Button onLoadMore={handleLoadMore} />
      )}
    </>
  );
};
