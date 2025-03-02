import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Future = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/dragfutureformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="future-section">
            <h2>Future of drag racing</h2>
            <figure style={{float: 'right', width: '30%', marginBottom: '20px', marginLeft: '10%'}}>
                <img src={'/cobrajet.jpg'} alt="EV dragster" style={{width: '100%', height: 'auto'}}/>
                <figcaption>The new Mustang Cobra Jet 1400 is Ford's first all electric dragster<br/> (Credit: Ford media)</figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{__html: content}}/>

        </div>
    );
};

export default Future;