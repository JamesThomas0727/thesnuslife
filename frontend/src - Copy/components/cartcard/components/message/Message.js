import './Message.css'
import messageMark from '/images/products/images.png'
export default function Message(){
    function openMessageChart(){
        document.getElementById('massageBar').style.display = NamedNodeMap;
    }

    return (
        <div className="messageBox" onClick={openMessageChart}>
            <img src={messageMark} alt='message'></img>
        </div>
    )
}