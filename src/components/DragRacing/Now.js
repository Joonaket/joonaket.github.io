import React, { useState, useEffect } from 'react';
import { readWordFile } from '../helperfile';

const Now = ({ activeSubSection }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const htmlContent = await readWordFile('/dragnowformatted.docx');
            setContent(htmlContent);
        };

        fetchContent();
    }, []);

    return (
        <div className="now-section-content">
            {activeSubSection === 'info' && (
                <>
                    <figure style={{float: 'right', width: '40%', marginBottom: '20px', marginLeft: '20%'}}>
                        <img src={'/Drag bikes.jpg'} alt="Drag Bikes"
                             style={{width: '100%', height: 'auto'}}/>
                        <figcaption>Even motorcycles can participate in drag racing. (Credit: Lina White)
                        </figcaption>
                    </figure>
                    <div dangerouslySetInnerHTML={{__html: content}}/>

                </>
            )}
            {activeSubSection === 'getting-started' && (
                <div className="getting-started-content">
                    <h2>Getting Started with drag racing</h2>
                    <p>Drag racing is less popular compared to circuit racing and drifting, mostly due to expensive
                        starting
                        requirements. Not all cars are made equal in terms of capability on the drag strip, and many
                        people interested in
                        the sport need a new vehicle.</p>


                    Popular starter cars include but are not limited to:<br/>

                    <br/>
                    Ford Mustang (preferably GT, not ecoboost)<br/>
                    Chevrolet Camaro (SS or V6)<br/>
                    Dodge Challenger (relatively cheap with great aftermarket support)<br/>
                    Honda Civic<br/>
                    Chevrolet Corvette<br/>
                    Ford Focus ST (or SR)<br/>
                    Subaru Impreza WRX STI<br/>
                    <br/>
                    Ideally your choice of car should be something with a lot of grunt off the line, as well as
                    relative stability at high speeds.
                    <br/>
                    Aside from choosing your vehicle, the most important part of drag racing is the launch.
                    A good launch will ensure better acceleration, and a better time. <br/>
                    <br/>
                    After getting the hang of launching, the next step is to learn how to shift. Shifting is crucial
                    in drag racing, as it can make or break your time. <br/><br/>

                    <div className="video-item">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/ppJXOiYyU4c?si=cbA_H3PrZx_-rnp9" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <p>A video detailing what you need to know before heading to the drag strip</p>
                    </div>


                </div>
            )}
            {activeSubSection === 'examples' && (
                <div className="examples-content">
                    <h2>Drag racing material</h2>
                    <div className="video-column">

                        <div className="video-item">
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/L-XvdDKH4EY?si=7U9FWwhFPHzyd7jg" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <p>Compilation of factory built cars competing with unique creations from the aftermarket</p>
                        </div>
                        <div className="video-item">
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/IrwTWXyIIqM?si=fhDuCvxZxrsjfZJ5" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <p>Fastest 'run' in the history of drag racing performed by pro driver Brittany Force</p>
                        </div>
                        <div className="video-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-VF0JwxQqcA?si=qfy0NqGn4w4ZmvHK" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>A deeper explanation into the engineering of purpose-built drag engines</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Now;