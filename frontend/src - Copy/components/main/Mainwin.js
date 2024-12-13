import Imglarge from '/images/logo.jpeg'
// 1732898643881_Studio-Project-64
import './Mainwin.css'
// 1718339380537_snuslifeLogo
export default function Mainwin() {
    return (
        <div className="mainwin">
            {/* <div> */}
            <img id="imglarge" src={Imglarge} alt='win'></img>
            {/* </div> */}

            <div>
                <p className='p5'>Exclusive UK distributor of Upperdeckys and PCT!</p>
                <p className='p3'>We have the largest product range in th UK with 950+ exciting flavours!</p>
            </div>

            <div className='bbb'>
                <div className="shownowntn" >Show Now </div>
            </div>

        </div>
    )
}