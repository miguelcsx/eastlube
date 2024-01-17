// app/components/Map.tsx

import React from 'react';
import LocationInfo from './LocationInfo';

const Map: React.FC = () => {

    return (
        <section className="w-full h-[60vh]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12372.373576009162!2d-76.6217315!3d39.1725975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fd22320bc205%3A0x1898610d91b6621e!2sEastern%20Lubrication%20Systems!5e0!3m2!1sen!2sco!4v1695784779300!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: '1' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Map;
