<<<<<<< HEAD
import React from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import "./apparel.css";
export default function ApparelPage() {
    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "http://localhost:3000/static/media/14.9569a640581a07a56d04.png",
=======

import '../accessories/accessories.css'
import ProductCard from '../../components/productcard/ProductCard'

export default function AccessoriesPage(){


    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "https://thesnuslife-asset.s3.amazonaws.com/1731682337434_IMG_6121.PNG",
>>>>>>> origin/collaborator
        "price1": 4.99,
        "price2": 5.99,
        "moneytype": 4,
    };
<<<<<<< HEAD
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
=======
    return(

        <div className='accessoriesBox'>
            <div className='pageTitle'>
                Accessories
            </div>
            
            <div className='cardbox' item xs={9}>
                        
                <ProductCard product={product}></ProductCard>
            </div>
            
        </div>
        
      
    )

}
>>>>>>> origin/collaborator
