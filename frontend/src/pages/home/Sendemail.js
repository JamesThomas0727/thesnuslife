import './home.css'
import GetInTouch from "../../components/getintouch/GetInTouch";
import Send from "../../components/send/Send";

export default function Sendemail() {
    return (
        <div className='Sendemail'>
            <div className='get'>
                <GetInTouch />
            </div>
            <div className='send'>
                <Send />
            </div>
        </div>
    )
}