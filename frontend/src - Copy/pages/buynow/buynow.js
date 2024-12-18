import './buynow.css'

import { useNavigate } from 'react-router-dom';

export default function BuyPage() {

    const navigate = useNavigate();
    return (
        <>
            <div className='cartpage'>
                <div className='rout'>
                    {/*--------- This is a router of this thing.  For example Home/Shop/Acc XXmas Edition -16mg -----------*/}
                    home/shop/... ..
                    <div className='nolinebtn' ></div>
                </div>
                <div className='mainwins'>
                    <div className='imgcontainer'>
                        <img src="/images/products/1.png" alt='largeimg'></img>
                    </div>
                    <div className='buycard'>
                        <div className='cardname bold'>Ace XX mas Edition 16mg</div>
                        <div className='cardprice'>$4.99</div>
                        <div className='inputpart'>
                            <label>Quantity</label><br></br>
                            <input type='number' name='counter' min={1}></input>
                        </div>
                        <div className='addsth'>
                            <div className='addbtn'>Add To Cart</div>
                            <div className='heart'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                        </div>
                        <div className='blackbtn' >
                            Buy Now
                        </div>
                    </div>

                    <div className='property'>
                        <ul>
                            <li>Flovour - Mint</li>
                            <li>Portion size - <b>slim</b></li>
                            <li>strength - <b>Mild</b></li>
                            <li>Nicotine Level - <b>16 g</b></li>
                            <li><b>Nicotine Level per pouch - 09.6mg</b></li>
                            <li>Net weight - <b>16 g</b></li>
                            <li>product type -<b>Nicotine pouches</b></li>
                        </ul>
                    </div>

                </div>
                <div className='intoruce'>intoruduction of things Ace Superwhite offers flavor of strawberry an dvanila in its ACE XX -   ... .. ...</div>
                <div className='courcelbox'>
                    <div className='courceltltle  bold'>
                        Recently Visited Products
                    </div>
                    <div className='courusel'>

                    </div>

                </div>
            </div>
        </>
    )
}

