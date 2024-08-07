import React from 'react';

const bottomCards = () => {
  return (
    <>
      <div className='bottomCards'>
        <div className='bottomCardStartingButton'>
          <p id='bottomCardStartingButtonTitle'>How It Work ?</p>
        </div>

        <p id='bottomStartingTitle'>Cross-border ordering has <br /> never been easier</p>

        <div className='allBottomCards'>
          <div className='allBtmCard1'>
            <div className='btmCardIMgBG'>
              <img src='./Image/Vector.png' alt='cards' className='btmCards-img' ></img>
            </div>
            <h2 id='btmCards-title' >Start Plan</h2>
            <p id='btmCards-subtle' >Choose any of <br /> our packages</p>
          </div>

          <div className='rightLineBG' >
            <img src='./Image/RightLine.png' alt='rightLine' id='rightLine' ></img>
          </div>

          <div className='allBtmCard2'>
            <div className='btmCardIMgBG'>
              <img src='./Image/Vector.png' alt='cards' className='btmCards-img' ></img>
            </div>
            <h2 id='btmCards-title' >Connect</h2>
            <p id='btmCards-subtle' >Receieve concepts <br /> in 24 hours</p>
          </div>

          <div>
            <img src='./Image/RightLine.png' alt='rightLine' id='rightLine' ></img>
          </div>

          <div className='allBtmCard3'>
            <div className='btmCardIMgBG'>
              <img src='./Image/Vector.png' alt='cards' className='btmCards-img' ></img>
            </div>
            <h2 id='btmCards-title' >Match</h2>
            <p id='btmCards-subtle' >Development <br /> Stage</p>
          </div>
        </div>

        <div>
          <img src='./Image/RoundLine.png' alt='roundLine' id='roundLine' ></img>
        </div>

        <div className='btmLastCards'>
          <div className='allBtmCard4'>
            <div className='btmCardIMgBG'>
              <img src='./Image/Vector.png' alt='cards' className='btmCards-img' ></img>
            </div>
            <h2 id='btmCards-title' >Complete</h2>
            <p id='btmCards-subtle' >After-release <br /> support</p>
          </div>

          <div>
            <img src='./Image/LeftLine.png' alt='leftLine' id='leftLine' ></img>
          </div>

          <div className='allBtmCard5'>
            <div className='btmCardIMgBG'>
              <img src='./Image/Vector.png' alt='cards' className='btmCards-img' ></img>
            </div>
            <h2 id='btmCards-title' >Review</h2>
            <p id='btmCards-subtle' >Project launch <br /> and checkout</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default bottomCards;
