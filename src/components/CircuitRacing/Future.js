import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Future = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/circuitfutureformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="future-section">
            <h2>Future of circuit racing</h2>
            <figure style={{float: 'right', width: '30%', marginBottom: '20px', marginLeft: '10%'}}>
                <img src={'/formulae.PNG'} alt="Formula E car" style={{width: '100%', height: 'auto'}}/>
                <figcaption>Formula E vehicles look remarkably similar to regular F1 cars<br/>(Credit: Motor Sport Magazine) </figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{__html: content}}/>

        </div>
    );
};

export default Future;