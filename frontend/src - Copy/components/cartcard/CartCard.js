
import { addProduct, removeProduct, updateQuantity } from '../../store/cartSlice';
import './CartCard.css'

export default function CartCard(props) {
    const product = props.product;
    let i = 1;

    function Addcount(n) {
    }
    return (
        <>
            <div id="cartcad">
                <div className='paycartbox'>
                    <img src={"/images/products/" + product.id + ".png"}
                        alt='CartCardimg' className='imgboxs'></img>
                    <div className="textsbox" id="nopadding">
                        <div className="collas colls">
                            <div className="thingname " id='morefit'>{product.name}</div>
                            <div className="poundprice">{product.price}</div>
                        </div>
                        <div className="recyclebtn closex"
                            onClick="">
                            x
                        </div>
                    </div>
                </div>
                <div className="addbox" id='center'>
                    <div className="minus" onClick="">-</div>
                    <div id="val" >{product.quantity}</div>
                    <div className="add" onClick="">+</div>
                </div>

            </div>

        </>
    )
}