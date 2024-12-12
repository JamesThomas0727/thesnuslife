
import './accessories.css'
import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import axios from 'axios';
export default function AccessoriesPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products?brand=Accessories')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (

        <div className='accessoriesBox'>
            <div className='pageTitle'>
                Accessories
            </div>

            <div className='cardbox' item xs={9}>

                {products.map((product, index) => {
                    return (<ProductCard key={product.product_id}
                        product={product}></ProductCard>);
                })}
            </div>

        </div>


    )

}