import { useDispatch } from 'react-redux';
import Cartcardimg from '../../assets/images/products/16.png'
import { addProduct, removeProduct, updateQuantity } from '../../cartSlice';
import './Cartcard.css'

export default function Cartcard(props) {
    const dispatch = useDispatch();
    const product = props.product;
    const id = product.id;
    const quantity = product.quantity;

    const handleAddProduct = (event) => {
        let id = event.target.id;
        const newProduct = { id, quantity: 1 };
        dispatch(addProduct(newProduct));
    };

    const handleRemoveProduct = (event) => {
        document.getElementById(id).style.display = "none";
        dispatch(removeProduct(event.target.id));
    };

    const handleUpdateQuantity = (event) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <>
            <div className="cartcard" id={id}>
                <div className="cardmarks">
                    <img src={"/images/products/" + id + ".png"}
                        alt={product.product_name} className='imgboxs'></img>
                </div>
                <div className="textsbox">
                    <div className="colls">
                        <div className="thingname">{product.name}</div>
                        <div className="closebtn bold"
                            onClick={handleRemoveProduct}>x</div>
                    </div>
                    <div className="poundprice">{product.new_price}</div>
                    <div className="addbox">
                        <div className="minus" onClick={() => {
                            dispatch(removeProduct);
                        }}>-</div>
                        <div id="val" >{quantity}</div>
                        <div className="add" onClick={() => {

                        }}>+</div>
                    </div>

                </div>
            </div>

        </>
    )
}