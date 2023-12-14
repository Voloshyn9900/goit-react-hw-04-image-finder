import { CustomModal } from '../Modal/Modal';
import React, { Component } from 'react';
import { GalleryItem, Image } from './GalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.image;
    const { isOpenModal } = this.state;

    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Image src={webformatURL} alt="" />
        </GalleryItem>

        <CustomModal
          isOpen={isOpenModal}
          onRequestClose={this.closeModal}
          imageUrl={largeImageURL}
        />
      </>
    );
  }
}
