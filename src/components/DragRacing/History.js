import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const History = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/draghistoryformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="history-section">
            <h2>History of drag racing</h2>
            <figure style={{float: 'right', width: '30%', marginBottom: '20px', marginLeft: '10%'}}>
                <img src={'/Drag tire.jpg'} alt="Drag tire" style={{width: '100%', height: 'auto'}}/>
                <figcaption>Even older drag tires are wide compared to cars of their day <br/> (Credit: Komorebi Photo)</figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
};

export default History;