import React from 'react';
import '../App.css';

const landing_ui = () => {
    return (
        <div>
            <div className='main-title'>
                <div className='subtle'>
                    <h3 className='landing_title'>Exclusive Smart Watch</h3>
                    <h1 className='landing-main-title'>
                        Let go of the Challange <br />
                        See yourself better
                    </h1>
                    <p className='title-description'>
                        Connect your conversations with the tools and services that you <br />
                        use to get the job done. With over 1,500 apps and a robust API
                    </p>
                    <button className='title-btn'>
                        Get Started ⟶
                    </button>
                    <button className='title-btn2'>
                        How it works ⟶
                    </button>

                    <div className='sizing-title'>
                        <div className='icons-image' >
                            <img src='./Image/Vector.png' style={{ width: 32, height: 32, objectFit: 'contain' }}></img>
                        </div>
                        <div className='icons-text'>
                            <p id='title-p'>+12k</p>
                            <p id='desc-p'>Projects Done</p>
                        </div>

                        <div className='icons-image' style={{ marginLeft: 54 }}>
                            <img src='./Image/Vector.png' style={{ width: 32, height: 32, objectFit: 'contain' }}></img>
                        </div>
                        <div className='icons-text'>
                            <p id='title-p'>68k</p>
                            <p id='desc-p'>Customers</p>
                        </div>
                    </div>
                </div>


                <div className='animations'>
                    <p id='color1'></p>
                    <p id='color3'></p>
                    <img src='./Image/watch.png' className='sizing-image' alt='Watch Image' />
                    {/* <span id='graph'></span> */}
                    <p id='color2'></p>
                </div>

            </div>
        </div>
    );
}

export default landing_ui;
