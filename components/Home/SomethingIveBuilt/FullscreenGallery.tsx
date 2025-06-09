import React, { useState } from "react";
import Img from "../../smallComp/image/Img";

interface FullscreenGalleryProps {
  gallery: string[];
  currentImageIndex: number;
  onClose: () => void;
}

const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  gallery,
  currentImageIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  // Handle Next/Prev navigation
  const goToNext = () => {
    if (currentIndex < gallery.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-70 m-0"
      style={{ margin: "0px" }}
    >
      {/* Modal Content */}
      <div className="relative flex flex-col w-full rounded-lg mx-4 sm:mx-10 md:mx-20 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-black text-3xl font-bold p-2 bg-cyan-300 rounded-md bg-white bg-opacity-80"
        >
          &times;
        </button>

        {/* Image Display */}
        <div className="flex justify-center items-center">
          <Img
            src={gallery[currentIndex]}
            alt={`Project Screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
            height={"250px"}
          />
        </div>

        {/* Navigation Controls */}
        {/* <div className="absolute left-0 right-0 bottom-4 flex justify-between px-8">
          <button
            onClick={goToPrev}
            className="text-white text-4xl font-bold"
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="text-white text-4xl font-bold"
            disabled={currentIndex === gallery.length - 1}
          >
            &#10095;
          </button>
        </div> */}

        {/* Bottom Strip (Thumbnail) */}
        <div className="px-2 py-4 bg-white">
          <div
            className={`flex space-x-4 ${
              gallery.length > 4
                ? "overflow-x-auto whitespace-nowrap"
                : "justify-center"
            }`}
          >
            {gallery.map((image, index) => (
              <div
                key={index}
                className={`min-w-16 h-12 cursor-pointer ${
                  index === currentIndex
                    ? "border-2 border-orange-600 rounded"
                    : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-10 rounded-sm object-cover" // Fixed width and height for thumbnails
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenGallery;
