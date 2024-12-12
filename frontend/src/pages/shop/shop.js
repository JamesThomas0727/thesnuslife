import * as React from 'react';
import FilterBar from "../../components/filterbar/FilterBar";
import DropdownButton from '../../components/dropdown/Dropdown';
import ProductCard from '../../components/productcard/ProductCard';
import Pagination from '../../components/pagination/Pagination';
import "./shop.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import NoPage from '../nopage/nopage';
import LoadingPanel from "../../components/loadingpanel/LoadingPanel";

var filters = [];
function ShopPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const [currencyRates, setCurrencyRates] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/currencyRates')
            .then(response => {
                currencyRates = response.data;
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                let products = response.data;
                let title = "No Products";
                if (products.length === 0)
                    return (
                        <NoPage title={title} />);
                else setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className='shopwin'>
                <div className="caption">Shop All</div >

                <div className='shopbox'>
                    <div container spacing={2}>
                        <div className='filter'>
                            <div>
                                <h2>Filter By</h2>
                            </div>
                            <hr></hr>
                            <div >
                                <FilterBar />
                            </div>
                        </div>
                    </div>


                    {isLoading ? (
                        <LoadingPanel title="Products Loading..." />
                    ) : (<>
                        {products.length ? (
                            <div className='listbox'>
                                <div className='newestdown'>
                                    <DropdownButton />
                                </div>
                                <div className='cardbox' item xs={9}>
                                    {products.map((product, index) => {
                                        return (
                                            <ProductCard key={product._id}
                                                product={product}
                                                currency={currencyRates}></ProductCard>
                                        );
                                    })}
                                </div>
                                <div className='pagination'>
                                    <Pagination count={products.length}
                                        page_index={1} />
                                </div>
                            </div>
                        ) : (<NoPage title="No Products" />)}
                    </>)}
                </div>
            </div >
        </>
    )
}
const colCountByScreen = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
};

export default ShopPage