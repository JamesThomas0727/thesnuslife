
import './accessories.css'
import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import axios from 'axios';
import LoadingPanel from '../../components/loadingpanel/LoadingPanel';
import NoPage from '../../pages/nopage/nopage';
export default function AccessoriesPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products?brand=Accessories')
            .then(response => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>
            {products.length ? (
                <div className='accessoriesBox'>
                    <div className='pageTitle'>
                        Accessories
                    </div>
                    {isLoading ? (
                        <LoadingPanel title="Products Loading..." />
                    ) : (

                        <div className='cardbox' item xs={9}>

                            {products.map((product, index) => {
                                return (<ProductCard key={product.product_id}
                                    product={product}></ProductCard>);
                            })}
                        </div>)}
                </div>
            ) : (<NoPage title="No Products" />)}
        </>
    )
}