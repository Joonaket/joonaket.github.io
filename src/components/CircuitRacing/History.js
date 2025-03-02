import React, { useState, useEffect } from 'react';
        import { readWordFile } from '../helperfile';

        const History = () => {
            const [content, setContent] = useState('');

            useEffect(() => {
                const fetchContent = async () => {
                    const htmlContent = await readWordFile('/circuithistoryformatted.docx');
                    setContent(htmlContent);
                };

                fetchContent();
            }, []);

            return (
                <div className="history-section">

                    <h2>History of circuit racing</h2>
                    <figure style={{float: 'right', width: '30%', marginBottom: '20px', marginLeft: '10%'}}>
                        <img src={'/grandprihistory.jpg'} alt="Grand Prix History"
                             style={{width: '100%', height: 'auto'}}/>
                        <figcaption>The original Grand Pri cars look nothing like their modern counterparts</figcaption>
                    </figure>


                    <div dangerouslySetInnerHTML={{__html: content}}/>
                    <figure style={{float: 'right', width: '20%', marginBottom: '10px', marginLeft: '50%'}}>
                        <img src={'/F1-Logo.png'} alt="F1 Logo" style={{width: '100%', height: 'auto'}}/>
                        <figcaption>F1 is the most famous racing series in the world</figcaption>
                    </figure>

                </div>
            );
        };

export default History;