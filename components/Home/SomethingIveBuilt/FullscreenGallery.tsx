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
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 m-0"
      style={{ margin: "0px" }}
    >
      {/* Modal Content */}
      <div className="relative w-full bg-gray-800 rounded-lg mx-4 sm:mx-10 md:mx-20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-black text-3xl font-bold p-2 bg-cyan-300"
        >
          &times;
        </button>

        {/* Image Display */}
        <div className="flex justify-center items-center py-4">
          <Img
            src={gallery[currentIndex]}
            alt={`Project Screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-0 right-0 bottom-4 flex justify-between px-8">
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
        </div>

        {/* Bottom Strip (Thumbnail) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 p-2">
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {gallery.map((image, index) => (
              <div
                key={index}
                className={`w-16 h-12 relative cursor-pointer ${
                  index === currentIndex ? "border-2 border-sky-600" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full rounded-lg object-cover"
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
