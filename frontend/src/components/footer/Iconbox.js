import Camera from '../../assets/images/camera.svg'
import F from '../../assets/images/image (82).svg'
import Img6 from '../../assets/images/image (6).svg'
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