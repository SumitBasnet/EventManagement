import React from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState } from "react";
import { useCallback } from "react";
import { photos } from "../Photos/Photos";

const IndexGalleries = () => {
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
    <>
      <div className="gallery-index">
        <h1
          className="GradientHeading"
          style={{ textAlign: "center", margin: "20px" }}
        >
          Galleries
        </h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className="btn-more">
          <button
            className="explore-more"
            style={{ paddingTop: "20px", paddingBottom: "30px" }}
          >
            More Photos
            <div className="arrow-right-gallery">
              <img src="/assets/images/arrow.svg" alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default IndexGalleries;
