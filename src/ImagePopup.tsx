import React, { useState, useCallback } from "react"
import header from './Header.png'
import Gallery from 'react-photo-gallery'
import {photos} from './photos'
import Carousel, { Modal, ModalGateway } from "react-images";
import type {ViewType} from 'react-images'
interface Props {
    isActive?: boolean
}
const ImagePopup = ({isActive}: Props) => {
    let display = isActive ? 'flex' : 'none'
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    return (
      
        <div className='image-popup-modal' style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: display,
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex:3
        }}>
            <div className='popup-container' style={{ height: '80%', width: '90%', background: 'rgb(30,30,30)', position: 'relative', top: 50 }}>
                <img style={{width:'100%'}} src={header}/>
                    <Gallery onClick={openLightbox} targetRowHeight={200} photos={photos}/>
                    <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.src
              })) as any}
            />
          </Modal>
        ) : null}
      </ModalGateway>
            </div>
        </div>
        
    )
}
export default ImagePopup
