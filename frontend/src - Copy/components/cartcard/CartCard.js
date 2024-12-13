import Cartcardimg from '/images/products/10.png'
import './CartCard.css'
// import {closeNav} from '../header/Header'

export default function CartCard() {
    let poundprice = 4.99;
    let thingname = "Snowman Fresh Mint - 12mg";
    let i = 1;

    function Addcount(n) {
        if (n === 2) {
            i++;
        }
        else {
            if (i < 0) {
                alert('You cannot below it anymore.');
            }
            else i--;
        }


    }
    return (
        <>
            <div id="cartcad">
                <div className='paycartbox'>
                    <img src={Cartcardimg} alt='Cartcardimg' className='imgboxs'></img>
                    <div className="textsbox" id="nopadding">
                        <div className="collas colls">
                            <div className="thingname " id='morefit'>{thingname}</div>
                            <div className="poundprice">{poundprice}</div>
                        </div>
                        <div className="recyclebtn closex" >
                            x
                        </div>
                    </div>
                </div>
                <div className="addbox" id='center'>
                    <div className="minus" onClick={Addcount(2)}>-</div>
                    <div id="val" >{i}</div>
                    <div className="add" onClick={Addcount(1)}>+</div>
                </div>

            </div>

        </>
    )
}