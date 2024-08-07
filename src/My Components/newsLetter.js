import React from 'react';

const newsLetter = () => {
    return (
        <>
            <div className='newsletter'>
                <div className=''>
                    <h2 className='LetterTitle' >Subscribe our newsletter</h2>
                    <p className='LetterSubtle' >By clicking the button, you are agreeing with our Term & <br /> Conditions</p>
                    <input placeholder='Enter your mail...' id='input' ></input>
                </div>

                <section id="image-container">
                    <img src='./Image/peoples.png' alt='peopleImage' id='peopleImage'></img>
                    <img src='./Image/chart.png' alt='chartimg' id='chartimg'></img>
                </section>

            </div>
        </>
    );
}

export default newsLetter;
