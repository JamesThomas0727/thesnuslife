import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import "./ProductCard.css";
import { addProduct, removeProduct, updateQuantity } from '../../store/cartSlice';

//==========================================================================
const currency_chars = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];
export default function ProductCard(props) {
    const product = props.product;
    const currency = useSelector((state) =>
        state.currency.currency); //
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currency_rate = currency.currency_rate;
    const currency_id = currency.currency_id;
    const currency_char = currency_chars[currency_id - 1];

    const handleAddProduct = (event) => {
        const newProduct = {
            id: event.target.id,
            name: product.product_name,
            price: product.new_price,
            quantity: 1
        };
        dispatch(addProduct(newProduct));
        alert("Yup, successfully added to your Cart!");
    };

    const showBuyPage = (event, product) => {
        const baseUrl = "/buynow";
        let product_info = "";
        for (let key in product) {
            product_info += (key + "=" + product[key] + "&");
        }
        navigate(baseUrl + "?" + product_info);
    }
    return (
        <>
            <div className='pcard'>
                <div>
                    <img onClick={showBuyPage} src={"/images/products/" + product.product_avatar_id + ".png"}
                        alt={product.product_name} className='cardImage'></img>
                    <strong>{product.product_name}</strong>
                    <p className='price'>
                        {currency_char + (currency_rate * Number(product.new_price)).toFixed(2)}
                    </p>
                    {product.old_price &&
                        <p className='price-strike'>
                            {currency_char + (currency_rate * Number(product.old_price)).toFixed(2)}
                        </p>}
                    <button className='card-button' id={product.product_id}
                        onClick={(event) => { handleAddProduct(event) }}>Add to Cart</button>
                </div>
            </div>
        </>
    );
}