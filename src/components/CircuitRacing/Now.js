import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Now = ({ activeSubSection }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (activeSubSection === 'info') {
            const fetchContent = async () => {
                const htmlContent = await readWordFile('/circuitnowformatted.docx');
                setContent(htmlContent);
            };

            fetchContent();
        }
    }, [activeSubSection]);

    return (
        <div className={'section'}>
            <h2>Circuit racing today</h2>
            <div className="now-section-content">
                {activeSubSection === 'info' && (
                    <div dangerouslySetInnerHTML={{__html: content}}/>
                )}
                {activeSubSection === 'getting-started' && (
                    <div className="getting-started-content">
                        <h2>Getting Started with circuit racing</h2>
                        <p>Circuit racing is ideal for beginners, as it can be done using any vehicle, although a well
                            handling one is recommended</p>
                        <ol>
                            <li>Options for well handling cars<br/>

                                <br/>
                                Honda Civic Type R<br/>
                                Mazda MX-5 Miata<br/>
                                BMW 3-series<br/>
                                Toyota GT86/Subaru BRZ<br/>
                                Volkswagen Golf GTI<br/>
                                Ford Fiesta ST<br/>
                                <br/>


                            </li>
                            <li><br/>
                                Learn Basic Racing Techniques<br/><br/>
                                Braking points: Learn when to brake to optimize corner entry.<br/>
                                <br/>
                                Racing lines: Follow the fastest path through a corner.<br/>
                                <br/>
                                Throttle control: Smooth inputs help maintain speed and traction.<br/>
                                <br/>
                                Apexing: Hitting the ideal part of a turn for better exit speed.<br/>
                                <br/>
                            </li>
                            <li><br/>Find and attend a track day<br/>

                                <br/>Look for local racetracks offering beginner-friendly events. Track days provide a
                                safe
                                environment to practice without speed limits or traffic.<br/><br/>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <a href="https://www.racingcircuits.info/" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src="/circuitracinginfologo.PNG" alt="Track finding page"
                                             style={{
                                                 width: '300px',
                                                 height: 'auto',
                                                 borderRadius: '15px',
                                                 margin: '15px'
                                             }}/>
                                    </a>
                                    <span> Finding a track local to you can be difficult, but luckily sites such as racingcircuits.info compile maps
                                    which can be used to find the closest one to you.

                                </span>
                                </div>

                            </li>
                            <li><br/>Invest in essential safety gear<br/>

                                <br/>Helmet: A certified racing helmet is required.
                                <br/>Racing gloves and suit: Recommended for added protection.
                                <br/>Roll cage and harness (for advanced racing).
                            </li>
                        </ol>

                    </div>
                )}
                {activeSubSection === 'examples' && (
                    <div className="examples-content">
                        <h2>Example videos for learning circuit racing</h2>
                        <div className="video-column">
                            <div className="video-item">
                                <iframe width="560" height="315"
                                        src="https://www.youtube.com/embed/RHj6hPqT9ZA?si=11jZgeJJK4lUlV_s"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <p>Drive.com (Australia) presents a 3-part basics-guide on circuit racing techniques</p>
                            </div>
                            <div className="video-item">
                                <iframe width="560" height="315"
                                        src="https://www.youtube.com/embed/cr1_hGpAxvU?si=YKLS6aX1DB9xQqsh"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="video-item">
                                <iframe width="560" height="315"
                                        src="https://www.youtube.com/embed/aBaSbbqJjEs?si=Q-emX9IwNoqQQJZn"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="video-item">
                                <iframe width="560" height="315"
                                        src="https://www.youtube.com/embed/jSLE15t-3B0?si=kcXtR6bjx-YQnYXu"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <p>Racing compilation featuring clips from racing series Repco Supercars
                                    Championship</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Now;