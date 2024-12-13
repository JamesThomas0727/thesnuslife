
import './aboutus.css'
import Myface from '/images/products/13.png'
export default function Us() {
    return (
        <div className='contain'>
            <p id="about">ABOUT US</p>
            <div className='maincontent'>
                <div className="paragraph">
                    <p className='para'>Here at The Snus Life, most importantly, we are snus lovers. We know snus and nicopods are and can be a positive force on the world and help people to laugh and love life.</p>
                    <p className='para'>We are the largest online retailer in the UK because we are passionate about what we do. We take pride in delivering the highest possible quality of service for those who love to live The Snus Life</p>
                    <p className='para'>At The Snus Life it is our goal to stock the snus and nicopods our customers want most. If there is a product you have seen and want us to stock then let us know on our ‘Get in touch’ form!</p>
                    <p className='para'>We are always trying to do better. If there is an issue, big or small, our customer service team is ready to help you over email Info@thesnuslife.com</p>
                </div>
                <div className='picture'>
                    <img id='faces' alt='myface' src={Myface}></img>
                </div>

            </div>
        </div>
    )
}