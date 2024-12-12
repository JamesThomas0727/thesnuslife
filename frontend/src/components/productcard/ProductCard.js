import * as React from 'react';
import "./ProductCard.css"

const currency_char = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];
export default function ProductCard(props) {
    const product = props.product;
    const currency_id = product.currency_id;
    let currency_char = [currency_id];

    return (
        <>
            <div className='pcard'>
                <img src={"/images/products/" + product.product_avatar_id + ".png"}
                    alt={product.product_name} className='cardImage'></img>
                <strong>{product.product_name}</strong>
                <p className='price'>{currency_char + product.new_price}</p>
                {product.old_price && <p className='price-strike'>{currency_char + product.new_price}</p>}
                <button className='card-button'>Add to Cart</button>
            </div>
        </>
    );
}