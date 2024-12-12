
import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import axios from 'axios';
import "./apparel.css";
export default function ApparelPage(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products?brand=Apparel')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (

        <div className='accessoriesBox'>
            <div className='pageTitle'>
                Apparel
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
