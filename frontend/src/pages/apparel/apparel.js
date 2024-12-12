<<<<<<< HEAD

<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import axios from 'axios';
import "./apparel.css";
import LoadingPanel from '../../components/loadingpanel/LoadingPanel';
export default function ApparelPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
=======
import '../accessories/accessories.css'
import ProductCard from '../../components/productcard/ProductCard'

export default function AccessoriesPage(){


    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "https://thesnuslife-asset.s3.amazonaws.com/1731682337434_IMG_6121.PNG",
=======
import React from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import "./apparel.css";
export default function ApparelPage() {
    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "http://localhost:3000/static/media/14.9569a640581a07a56d04.png",
>>>>>>> origin/master
        "price1": 4.99,
        "price2": 5.99,
        "moneytype": 4,
    };
<<<<<<< HEAD
    return(
>>>>>>> Stashed changes

        return () => clearTimeout(timer);
    }, []);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products?brand=Apparel')
            .then(response => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className='accessoriesBox'>
            <div className='pageTitle'>
                Apparel
            </div>
            {isLoading ? (
                <LoadingPanel title="Products Loading..." />
            ) : (<div className='cardbox' item xs={9}>
                {products.map((product, index) => {
                    return (<ProductCard key={product.product_id}
                        product={product}></ProductCard>);
                })}
            </div>)}

        </div>


    )

}
<<<<<<< Updated upstream
=======
=======
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
>>>>>>> origin/master
>>>>>>> Stashed changes
