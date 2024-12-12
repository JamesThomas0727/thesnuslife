import './Header.css'
import MarkImg from '../../assets/images/products/14.png'
import { useNavigate } from 'react-router-dom';

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function Head1() {
    return (
        <div id='flow1' className="text-center headtext">Free UK Delivery on ALL Orders</div>
    )
}
function Head2() {
    return (
        <div id='flow2' className="text-center headtext">Order before 1pm for same day dispatch</div>
    )
}
function Head3() {
    return (
        <div id='flow3' className="text-center  headtext">5 Pot Pick 'n' Mix for Just £19.95</div>
    )
}



export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div >
                <div className="heads avenir py-2 w-full bg-white gap-4 justify-center items-center px-12 inline" >
                    <Head1 />
                    <div className='headtext1'>|</div>
                    <Head2 />
                    <div className='headtext1'>|</div>
                    <Head3 />
                </div>
            </div>

            <div >
                <div className=' bg-prime'>
                    <div className='con px-12 h-24'>
                        <div className='nav' >
                            <div className='imgbox no-underline'
                                onClick={() => navigate('/home')}>
                                <img src={MarkImg} alt='logo-theSunuslife' className='markImg '></img>
                            </div>
                            <div className='contact gap-4 px-2'>
                                <button className=' nav-fs font-semibold'
                                    onClick={() => navigate('/home')}>
                                    Home
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/shop')}>
                                    Shop
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/apparel')}>
                                    Apparel
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/accessories')}>
                                    Accessories
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/wholesale')}>
                                    Wholesale
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/aboutus')}>
                                    About Us
                                </button>
                                <button className='nav-fs font-semibold'
                                    onClick={() => navigate('/faqs')}>
                                    FAQs
                                </button>
                            </div>
                            <div className='toolbox'>
                                <select className='px-1 dropdowns'>
                                    <option className='bg-white ' disabled>Currency</option>
                                    <option className='bg-white' value='AUD'>AUD</option>
                                    <option className='bg-white' value='CAD'>CAD</option>
                                    <option className='bg-white' value='EUR'>EUR</option>
                                    <option className='bg-white' value='GBP'>GBP</option>
                                    <option className='bg-white' value='USD'>USD</option>
                                </select>

                                <div class="flex justify-center items-center cursor-pointer px-1 lens"
                                    onClick={() => alert("Sorry, we are not out of service!")}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <circle cx="10" cy="10" r="8" stroke="black" stroke-width="2" fill="none" />
                                        <line x1="15" y1="15" x2="20" y2="20" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </div>
                                <div className='busket' onClick={() => alert("sorry, we are not out of service!")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="16" height="10" rx="2" ry="2" fill="rgba(0, 110, 255, 0)" stroke="black" stroke-width="1" />
                                        <line x1="3" y1="5" x2="1" y2="3" stroke="black" stroke-width="1" />
                                        <circle cx="6" cy="18" r="2" fill="black" />
                                        <circle cx="16" cy="18" r="2" fill="black" />
                                    </svg>
                                </div>

                                <div id="myNav" class="overlay">
                                    <div class="overlay-content">
                                        <div>About</div>
                                        <div>Services</div>
                                        <div>Clients</div>
                                        <div>Contact</div>
                                    </div>
                                    <span class="closebtn menu" onclick={<closeNav />}>&times;</span>
                                </div>
                                <span class="menu" onclick={<openNav />}>&#9776; </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    )
}
