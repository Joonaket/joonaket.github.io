import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Now = ({ activeSubSection }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (activeSubSection === 'info') {
            const fetchContent = async () => {
                const htmlContent = await readWordFile('/driftingnowformatted.docx');
                setContent(htmlContent);
            };

            fetchContent();
        }
    }, [activeSubSection]);

    return (
        <div className="now-section-content">
            <h2>Drifting today</h2>
            {activeSubSection === 'info' && (
                <>
                    <figure style={{ float: 'right', width: '40%', marginBottom: '20px', marginLeft: '20%' }}>
                        <img src={'/Drift side by side.jpg'} alt="Grand Prix History" style={{ width: '100%', height: 'auto' }} />
                        <figcaption>High powered drifting with two or more cars, also known as tandem drifting. (Credit: Ralfs Blumbergs)</figcaption>
                    </figure>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </>
            )}
            {activeSubSection === 'getting-started' && (
                <div className="getting-started-content">
                    <h2>Getting Started with drifting</h2>
                    <p>As drifting is a somewhat legal grey area, finding a private piece of road or an applicable racetrack is recommended.</p>
                    <ol>
                        <li>Choose the Right Car<br/>
                            Opt for a rear-wheel-drive (RWD) car with a manual transmission. Popular choices include:<br/>
                            Nissan 240SX<br/>
                            Mazda MX-5 Miata<br/>
                            BMW E36/E46<br/>
                            Toyota GT86/Subaru BRZ<br/>
                            <br/>
                            A limited-slip differential (LSD) is highly recommended for better control.
                        </li>
                        <li><br/>
                            Learn Basic Car Control<br/><br/>
                            Before attempting drifts, practice:<br/>
                            Throttle control: Modulating power to maintain a slide.<br/>
                            Countersteering: Steering opposite the drift direction.<br/>
                            Weight transfer: Using braking or acceleration to shift the car’s balance.<br/>
                        </li>
                        <li><br/>Master Drift Initiation<br/>
                            <br/>Common techniques include:<br/>
                            Clutch Kick: Engaging the clutch briefly to break traction.<br/>
                            Handbrake Drift: Using the e-brake to slide the rear wheels.<br/>
                            Feint Drift: Flicking the car before turning to unsettle the tires.
                        </li>
                        <li><br/>Upgrade Your Car<br/>
                            <br/>Tires: Stickier front, lower-grip rear.<br/>
                            Suspension: Coilovers for better handling.<br/>
                            Steering angle kits: Increased turning capability.
                        </li>
                    </ol>
                </div>
            )}
            {activeSubSection === 'examples' && (
                <div className="examples-content">
                    <h2>Drifting Examples</h2>
                    <div className="video-column">
                        <div className="video-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/RtCfqohMhl0?si=neXIiO1fRc2gySNr" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>A beginner friendly tutorial for drifting by youtuber Kame Trick</p>
                        </div>
                        <div className="video-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/tv6Ea0NbGFo?si=8WWTbOCHxJQ7UIoE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>A tutorial for drifting in simulated environment by youtuber JankyDrift</p>
                        </div>
                        <div className="video-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Hg6L_7qLIEQ?si=CTvb_hI7X9oJ2utZ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Legendary pro driver Ken Block drifting up Pike's Peak</p>
                        </div>
                        <div className="video-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/mjKUiNFGcfw?si=tY0-uhQOa0QhHaQy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Compilation from the pro drifting scene Formula DRIFT</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Now;