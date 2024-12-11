import * as React from 'react';
import "./ProductCard.css"
import ddd from '../../assets/images/products/24.png'
import { experimentalStyled } from '@mui/material';
// ${%PUBLIC_URL%}/images/products/${product.product_avatar_id}.png

const moneytypes = ["A$ ", "CA$ ", "€ ", "£ ", "$ ",];



export default function ProductCard(props) {
    const product = props.product;
    const moneytype = product.moneytype;
    let moneystr = moneytypes[moneytype];

  
    return (
        <>
        
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>
        <div className='pcard'>
            <img src={ddd}
                alt={product.product_name} className='cardImage'></img>
            <strong>{product.product_name}</strong>
            <p className='price'>{moneystr + product.price1}</p>
            {product.price2 && <p className='price-strike'>{moneystr + product.price2}</p>}
            <button className='card-button'>Add to Cart</button>
        </div>

        
        
        </>
        
        
    );
}