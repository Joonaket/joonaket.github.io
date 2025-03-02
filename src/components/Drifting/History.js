import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const History = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/driftinghistoryformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="history-section">
            <h2>History of drifting</h2>
            <figure style={{float: 'right',width: '40%', marginBottom: '20px', marginLeft: '20%'}}>
                <img src={'/driftworks90.jpg'} alt="Grand Prix History" style={{width: '100%', height: 'auto'}}/>
                <figcaption>The UK's Driftworks scene takes inspiration from 90's Japan. (Credit: DriftWorks UK)</figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
};

export default History;