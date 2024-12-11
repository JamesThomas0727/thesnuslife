// import Iconbox from "./footer/Iconbox";
import './GetInTouch.css';
import Camera from '../../assets/images/camera.svg'
import F from '../../assets/images/image (82).svg'
import Img6 from '../../assets/images/image (6).svg'




export default function Getin(){
    return(
        <div className="bluebox">
            <div className=" thickbold">Get in touch</div>
            <div className="intro">Dylan - Sales Manager @ info @t hesnuslife . com</div>
            <div className="icon"> 
            <img id='icons' src={Camera} alt='kik'></img>
            <img id='icons' src={F} alt = "boo"></img>
            <img id='icons' src={Img6} alt="muc"></img>

            </div>
        </div>
    )
}