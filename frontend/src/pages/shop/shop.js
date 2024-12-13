import * as React from 'react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterBar from "../../components/filterbar/FilterBar";
import SortButton from '../../components/dropdown/Dropdown';
import ProductCard from '../../components/productcard/ProductCard';
import Pagination from '../../components/pagination/Pagination';
import LoadingPanel from "../../components/loadingpanel/LoadingPanel";
import NoPage from '../nopage/nopage';
import { sortReducer } from '../../sortSlice';

import "./shop.css";
var show_products_list = [];
function ShopPage() {
    //=============================================================
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    //=============================================================
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    //=============================================================

    //=============================================================
    const [products, setProducts] = useState([]);
    const hasRun = useRef(false);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                let products = response.data;
                show_products_list = products;
                let title = "No Products";
                if (show_products_list.length === 0)
                    return (
                        <NoPage title={title} />);
                else setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error =>
                console.error('Error fetching product data:', error));
    }
    //=============================================================
    const sortMethod = useSelector((state) => {
        return state.sort.sort;
    });
    useEffect(() => {
        sortProducts();
    }, []);

    const sortProducts = () => {
        let field = sortMethod.field;
        let des = sortMethod.des;
        setIsLoading(true);
        show_products_list.sort(function (a, b) {
            if (des) {
                if (a[field] > b[field]) return 1;
                else return -1;
            }
            else {
                if (a[field] > b[field]) return -1;
                else return 1;
            }
        });
        setIsLoading(false);
    }
    //==============================================================
    const filter = useSelector((state) => {
        return state.filter.filter;
    });
    useEffect(() => {
        let brand = filter.categories[0];
        let favor = filter.categories[1];
        let pot = filter.categories[2];
        let type = filter.categories[3];
        let price_max = (filter.price[0] == "ALL");
        let price_min = filter.price[1];
        console.log(brand);
        show_products_list = products.filter((product, index) => {
            if (brand == "ALL") return true;
            else return (product.brand === brand);
        });
    }, [])
    console.log(show_products_list.length)
    //==============================================================
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
                                    <SortButton
                                    />
                                </div>
                                <div className='cardbox' item xs={9}>
                                    {show_products_list.map((product, index) => {
                                        return (
                                            <ProductCard key={product._id}
                                                product={product} />
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