import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import raiden1 from '../../assets/artwork/raiden1.png';
import raiden2 from '../../assets/artwork/raiden2.png';
import concept1 from '../../assets/artwork/concept1.png';
import concept2 from '../../assets/artwork/concept2.png';
import arlecchino1 from '../../assets/artwork/arlecchino1.png';
import arlecchino2 from '../../assets/artwork/arlecchino2.png';

const ArtworkGallery = () => {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleries = {
    'raiden-shogun': [
      { 
        id: 1, 
        src: raiden1, 
        title: 'Raiden Shogun 1' 
      },
      { 
        id: 2, 
        src: raiden2, 
        title: 'Raiden Shogun 2' 
      }
    ],
    'arlecchino': [
      { 
        id: 1, 
        src: arlecchino1, 
        title: 'Arlecchino 1' 
      },
      { 
        id: 2, 
        src: arlecchino2, 
        title: 'Arlecchino 2' 
      }
    ],
    'concept-art': [
      { 
        id: 1, 
        src: concept1, 
        title: 'Hollow Knight 1' 
      },
      { 
        id: 2, 
        src: concept2, 
        title: 'Hollow Knight 2' 
      }
    ]
  };

  const images = galleries[category] || [];

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  // Close on escape key press
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-[#171d32] p-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="text-white mb-8 inline-block hover:text-[#465697] transition-colors"
        >
          ← Back to Portfolio
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8 capitalize">
          {category.split('-').join(' ')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="bg-black/30 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-lg font-medium">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFullscreen}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-7xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 z-50"
                >
                  ✕
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                  {selectedImage.title}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ArtworkGallery;
