import Camera from '/images/camera.svg'
import F from '/images/image (82).svg'
import Img6 from '/images/image (6).svg'
import './Footer.css'

export default function Iconbox() {
    return (
        <div className="iconbox">
            <img id='icons' src={Camera} alt='kik'></img>
            <img id='icons' src={F} alt="boo"></img>
            <img id='icons' src={Img6} alt="muc"></img>
        </div>
    )

}