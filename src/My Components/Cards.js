import React from 'react';
import '../App.css';
import Product from './productsAPI';

const Cards = () => {

    return (
        <>
            <div className='row'>
                <div className='column'>
                    <div class="card1">
                        <div className='column'>
                            <img src='./Image/Item3.png' id='top-card-img' style={{ marginTop: 30, marginRight: 4, height: 63, width: 80 }} ></img>
                        </div>
                        <div className='top-card-txt'>
                            <p id='top-card-title' >4K TV Game Mini Arcade Rockstar Console 32GB/64GB</p>
                            <p style={{ color: '#10182B' }}>$29.80</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div class="card2">
                        <div className='column'>
                            <img src='./Image/Item2.png' id='top-card-img' style={{ marginTop: 22, height: 78, width: 59.7 }} ></img>
                        </div>
                        <div className='top-card-txt'>
                            <p id='top-card-title' >Cancelling Headset Music <br /> Sport Deep Bass</p>
                            <p>$420.00</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div class="card3">
                        <div className='column'>
                            <img src='./Image/Item.png' id='top-card-img'></img>
                        </div>
                        <div className='top-card-txt'>
                            <p id='top-card-title' >T500BT Original Wireless <br /> Bluetooth Headphone Deep</p>
                            <p>$96.50</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p style={{ fontWeight: 600, marginTop: 350, fontSize: 50, textAlign: 'center' }}>Featured Products <br /> For Pre-Order </p>
            </div>

            <div className='product-cards'>
                {Product.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.description} className='card-img' />
                        <div className='card-info'>
                            <p className='card-brand'>{product.brand}</p>
                            <p className='card-description'>{product.description}</p>
                            <img src={product.rating} alt={product.rating} className='card-rating'></img>
                            <div className='card-bottom'>
                                <div className='card-price'>{product.price}</div>
                                <button className='card-btn'>Add +</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='mainCategories' >
                <p id='category-title'>Explore by Categories.
                    <p id='category-description'>
                        We provide many categories, choose a category according to <br />
                        your expertise to make it easier to find a job.
                    </p>
                </p>

                <div className='cardCategories'>
                    <div className='category'>
                        <p id='popular-txt'>Popular Categories</p>
                        <div className='categorySizing'>
                            <div className='categories1'>
                                <span className='category1'>Computer - Laptop</span>
                                <span className='count1'>10</span>
                            </div>

                            <hr className='hrLine' />

                            <div className='categories2'>
                                <span className='category1'>Smart phone & Tablets</span>
                                <span className='count1'>12</span>
                            </div>

                            <hr className='hrLine' />

                            <div className='categories3'>
                                <span className='category1'>Fashion & Accessories</span>
                                <span className='count1'>14</span>
                            </div>

                            <hr className='hrLine' />

                            <div className='categories4'>
                                <span className='category1'>Health & Beauty</span>
                                <span className='count1'>8</span>
                            </div>
                        </div>
                    </div>

                    <div className='allCategoryCards'>
                        <div className='cardSizing'>
                            <div className='categoryCard'>
                                <div className='categoryCardImgBg'>
                                    <img src='./Image/Vector.png' className='categoryCardImg'></img>
                                </div>
                                <span className='categoryCardTxt'>Computer for Designer, Art</span>
                            </div>

                            <div className='categoryCard'>
                                <div className='categoryCardImgBg'>
                                    <img src='./Image/Vector.png' className='categoryCardImg'></img>
                                </div>
                                <span className='categoryCardTxt' style={{ marginRight: 57 }} >Sport, Home, Outdoor</span>
                            </div>
                        </div>

                        <div className='cardSizing'>
                            <div className='categoryCard'>
                                <div className='categoryCardImgBg'>
                                    <img src='./Image/Vector.png' className='categoryCardImg'></img>
                                </div>
                                <span className='categoryCardTxt'>Laptop for office, students</span>
                            </div>

                            <div className='categoryCard'>
                                <div className='categoryCardImgBg'>
                                    <img src='./Image/Vector.png' className='categoryCardImg'></img>
                                </div>
                                <span className='categoryCardTxt' style={{ marginRight: 57 }} >Software, card, book</span>
                            </div>
                        </div>

                        <div className='categoryCard' style={{marginLeft: 207, height: 58}}>
                            <div className='categoryCardImgBg' style={{ marginLeft: 58 }} >
                                <img src='./Image/Vector.png' className='categoryCardImg'></img>
                            </div>
                            <span className='categoryCardTxt' style={{ marginRight: 57 }} >Explore More</span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Cards;
