import * as React from 'react';
import "./ProductCard.css"
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, updateQuantity } from '../../cartSlice';

const currency_chars = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];
export default function ProductCard(props) {
    const product = props.product;
    let currency = useSelector((state) => state.currency.currency); // Access cart state
    let currency_rate = currency.currency_rate;
    console.log(currency_rate, currency);
    const currency_id = currency.currency_id;
    const currency_char = currency_chars[currency_id];
    const dispatch = useDispatch();

    const handleAddProduct = (event) => {
        const newProduct = { id: event.target.id, quantity: 1 };
        dispatch(addProduct(newProduct));
    };



    return (
        <>
            <div className='pcard'>
                <img src={"/images/products/" + product.product_avatar_id + ".png"}
                    alt={product.product_name} className='cardImage'></img>
                <strong>{product.product_name}</strong>
                <p className='price'>
                    {currency_char + (Number(currency.currency_rate) * Number(product.new_price)).toFixed(2)}
                </p>
                {product.old_price &&
                    <p className='price-strike'>
                        {currency_char + (currency.currency_rate * product.old_price).toFixed(2)}
                    </p>}
                <button className='card-button' id={product.product_id}
                    onClick={(event) => { handleAddProduct(event) }}>Add to Cart</button>
            </div>
        </>
    );
}