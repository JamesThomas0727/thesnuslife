import React from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import "./apparel.css";
export default function ApparelPage() {
    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "http://localhost:3000/static/media/14.9569a640581a07a56d04.png",
        "price1": 4.99,
        "price2": 5.99,
        "moneytype": 4,
    };
    return (

        <div className='accessoriesBox'>
            <div className='pageTitle'>
                Apparel
            </div>

            <div className='cardbox' item xs={9}>

                <ProductCard product={product}></ProductCard>
            </div>

        </div>


    )

}
