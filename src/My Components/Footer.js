import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footerContainer'>
                <div className='footerLogo'>
                    <img src='./Image/logo.png' id='footerImg' alt='Logo' />
                    <div id='footerLogoName' >agon</div>

                    <div className='footerNavBtn' >
                        <button id='footerNavBtn1' >Ready to get staretd?</button>
                        <button id='footerNavBtn2' >Create an Account ⟶</button>
                    </div>
                </div>

                <hr id='footerHRLine' />

                <div className='footerElems'>
                    <div className='footerLists'>
                        <div className='contactTitle'>
                            Contact

                            <span id='contactAdrs'>4517 Washington Ave. <br /> Manchester, Kentucky 39495</span>

                            <span id='contactNum'>(239) 555-0108</span>

                            <span id='contactMail'>contact@agon.com</span>

                            <img src='./Image/contact bottom icons.png' alt='bottomIcons' id='bottomIcons'></img>
                        </div>
                    </div>

                    <div className='aboutUsList'>
                        About Us

                        <span id='aboutList' style={{ marginTop: 9 }}>About V1</span>
                        <span id='aboutList' style={{ marginTop: 7 }}>About V2</span>
                        <span id='aboutList' style={{ marginTop: 7 }}>About V3</span>
                        <span id='aboutList' style={{ marginTop: 7 }}>Services V1</span>
                        <span id='aboutList' style={{ marginTop: 7 }}>Services V1</span>
                    </div>

                    <div className='discoverList'>
                        Discover

                        <span id='discoverList' style={{ marginTop: 9 }}>Our Blog</span>
                        <span id='discoverList' style={{ marginTop: 7 }}>Our Blog V1</span>
                        <span id='discoverList' style={{ marginTop: 7 }}>Our Blog V2</span>
                        <span id='discoverList' style={{ marginTop: 7 }}>Blog Single</span>
                        <span id='discoverList' style={{ marginTop: 7 }}>Page 404</span>
                    </div>

                    <div className='supportList'>
                        Support

                        <span id='supportList' style={{ marginTop: 9 }}>FAQs</span>
                        <span id='supportList' style={{ marginTop: 7 }}>FAQ V2</span>
                        <span id='supportList' style={{ marginTop: 7 }}>Career</span>
                        <span id='supportList' style={{ marginTop: 7 }}>Career Details</span>
                        <span id='supportList' style={{ marginTop: 7 }}>Contact Us</span>
                    </div>

                    <div className='usefulLinkList'>
                        Useful Links

                        <span id='usefulLinkList' style={{ marginTop: 9 }}>Shop</span>
                        <span id='usefulLinkList' style={{ marginTop: 7 }}>Shop V2</span>
                        <span id='usefulLinkList' style={{ marginTop: 7 }}>Pricing V1</span>
                        <span id='usefulLinkList' style={{ marginTop: 7 }}>Pricing V2</span>
                        <span id='usefulLinkList' style={{ marginTop: 7 }}>Terms & Conditions</span>
                    </div>
                </div>

                <hr id='footerHRLine' style={{marginTop: 47 }}/>

                <h2 id='footerBottomTxt' >©Agon Official 2022</h2>
            </div>
        </>
    );
}

export default Footer;
