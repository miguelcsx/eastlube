// app/components/Gallery.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

const GallerySection: React.FC = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const itemsPerPage = isSmallScreen ? 2 : 3;

    const images = [
        { id: 1,
          src: 'images/bulk-oil-tanks.jpeg', 
          title: 'Bulk Oil Tanks', 
          description: 'Description 1' 
        },
        { id: 2, 
          src: 'images/oil-bar-dispenser.jpeg', 
          title: 'Oil Bar Dispenser', 
          description: 'Description 2' 
        },
        { id: 3, 
          src: 'images/bulk-oil-tanks-2.jpeg', 
          title: 'Bulk Oil Tanks', 
          description: 'Description 3' 
        },
        { id: 4, 
          src: 'images/overhead-reels-installation.jpeg', 
          title: 'Overhead Reels Installations', 
          description: 'Description 4' 
        },
        { id: 5, 
          src: 'images/reels.jpg', 
          title: 'Reels', 
          description: 'Description 5' 
        },
        { id: 6, 
          src: 'images/pumps.png', 
          title: 'Pumps', 
          description: 'Description 6' 
        },
    ];

    useEffect(() => {
        // Check screen width when the component mounts
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        handleResize(); // Call the function once to set the initial value
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        if (scrollIndex + itemsPerPage < images.length) {
            setScrollIndex(scrollIndex + 1);
        }
    };

    const handlePrev = () => {
        if (scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    };

    return (
        <section className="bg-zinc-950 text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Our Collections</h2>
                <div className="relative overflow-hidden">
                    <div className="flex items-center text-black">
                        {scrollIndex > 0 && (
                            <button className="absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 left-3" onClick={handlePrev}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                        )}
                        {scrollIndex + itemsPerPage < images.length && (
                            <button className="rounded-sm absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 right-3" onClick={handleNext}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        )}
                        <div className="flex" style={{ width: `${100 * (images.length / itemsPerPage)}%` }}>
                            {images.slice(scrollIndex, scrollIndex + itemsPerPage).map((image) => (
                                <div key={image.id} className="gallery-item relative mx-2 group" style={{ width: `${100 / itemsPerPage}%` }}>
                                    <div className="gallery-image-container relative min-h-[300px] pb-[150%]">
                                        {/* Set a fixed height for the image container */}
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="gallery-image object-cover transition-transform hover:scale-105 hover:brightness-50"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        />
                                        <div className="gallery-info absolute bottom-0 left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100">
                                            <h3 className="text-lg font-bold">{image.title}</h3>
                                            <p className="text-xs">{image.description}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;