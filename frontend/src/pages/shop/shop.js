import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterBar from "../../components/filterbar/FilterBar";
import SortButton from '../../components/dropdown/Dropdown';
import ProductCard from '../../components/productcard/ProductCard';
import Pagination from '../../components/pagination/Pagination';
import LoadingPanel from "../../components/loadingpanel/LoadingPanel";
import NoPage from '../nopage/nopage';

import "./shop.css";
function ShopPage() {
    //=============================================================
    // const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const filterState = useSelector(
        (state) => state.filterReducer);
    const sortMethod = useSelector((state) => {
        return state.sort.sort;
    });
    const state = useSelector((state) => (state));
    //=============================================================
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [state]);
    //=============================================================
    const [products, setProducts] = useState([]);
    const [showList, setShowList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                const show_list = response.data;
                setProducts(products);
                setShowList(show_list);
                let title = "No Products";
                if (products.length === 0)
                    return (
                        <NoPage title={title} />);
                else setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error =>
                console.error('Error fetching product data:', error));
    }, [state]);
    //=============================================================

    useEffect(() => {
        let field = sortMethod.field;
        let des = sortMethod.des;
        setIsLoading(true);
        showList.sort(function (a, b) {
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
    }, [state])
    //==============================================================
    const filter = useSelector((state) => {
        return state.filter.filter;
    });

    useEffect(() => {
        let brand = filter.categories[0];
        let favor = filter.categories[1];
        let pot = filter.categories[2];
        let type = filter.categories[3];
        const show_list = products.filter((product, index) => {
            if (brand === "ALL") return true;
            else return (product.brand === brand);
        }).filter((product) => {
            if (favor === "ALL") return true;
            else return (product.favor === favor);
        }).filter((product) => {
            if (pot === "ALL") return true;
            else return (product.pot === pot);
        }).filter((product) => {
            if (type === "ALL") return true;
            else return (product.product_type === type);
        });
        setShowList(show_list)

        console.log('show-list', brand, show_list);
    }, [state]);
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
                        {showList.length ? (
                            <div className='listbox'>
                                <div className='newestdown'>
                                    <SortButton
                                    />
                                </div>
                                <div className='cardbox' item xs={9}>
                                    {showList.map((product, index) => {
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