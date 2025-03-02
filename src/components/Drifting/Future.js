import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Future = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/driftingfutureformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="future-section">
            <h2>Future of drifting</h2>
            <figure style={{float: 'right', width: '40%', marginBottom: '20px', marginLeft: '20%'}}>
                <img src={'/evcamaro.jpg'} alt="EV Camaro" style={{width: '100%', height: 'auto'}}/>
                <figcaption>Manufacturers are experimenting with electric drivetrains in their drifting divisions<br/> (Credit: MotorTrend)<br/>
                </figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
};

export default Future;