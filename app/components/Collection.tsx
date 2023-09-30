import React from "react";

const Collection = () => {

    const images = [
        {
            id: 1,
            src: 'images/polish.jpg',
            title: 'Polish',
            description: 'Description 1'
        },
        {
            id: 2,
            src: 'images/house-pump.png',
            title: 'House Pump',
            description: 'Description 2'
        },
        {
            id: 3,
            src: 'images/pumps.png',
            title: 'Pumps',
            description: 'Description 3'
        },
        {
            id: 4,
            src: 'images/reels.jpg',
            title: 'Reels',
            description: 'Description 4'
        },
        {
            id: 5,
            src: 'images/bulk-oil-tanks-2.jpeg',
            title: 'Bulk Oil Tanks',
            description: 'Description 5'
        },
        {
            id: 6,
            src: 'images/oil-bar-dispenser.jpeg',
            title: 'Oil Bar Dispenser',
            description: 'Description 6'
        },
    ];

    return (
        <div className="bg-black p-4 md:p-14">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-full relative aspect-ratio-1/1 group">
                            <img src={image.src} alt={`Image ${index}`} className="w-full h-full object-cover hover:brightness-50" />
                            <div className="gallery-info absolute top-[50%] left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col justify-center items-center">
                                <h3 className="text-lg font-bold">{image.title}</h3>
                                <p className="text-xs">{image.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
