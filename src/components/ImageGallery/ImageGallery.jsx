import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../GalleryItem/GalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <Gallery>
      {images.map(image => {
      console.log(image.id);
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </Gallery>
  );
};
