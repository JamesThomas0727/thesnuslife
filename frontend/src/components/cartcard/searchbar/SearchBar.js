import './SearchBar.css'
import SiteMark from '../../assets/images/products/19.png'
import { useState } from 'react';

const PRODUCTS = [
    {
        image: SiteMark,
        price: "$1",
        name: "ain Blank Cherry"
    },
    {
        image: SiteMark,
        price: "$1",
        name: "bin Blank Cherry"
    }
];
function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBars
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}
function ProductRow({ product }) {
    const name = product.name;
    return (
        <div className='listdata' onClick={"myfuntion/paypage"}>
            <div className='mag'>
                <img src={SiteMark}></img>
            </div>
            <div className='goods'>
                <div className='goodsid'>{name}</div>
                <div className='goodsprice'>Price : {product.price}</div>
            </div>
        </div>

    );
}
function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
    });

    return (
        <div className='down'>
            <div className='trending bold' >Trending Projects</div>
            {rows}
        </div>
    );
}
function SearchBars({
    filterText,
    onFilterTextChange,
}) {
    return (
        <>
            <div className='topBar'>
                <div className='siteMark'>
                    <img src={SiteMark} alt='mark'></img>
                </div>
                <div className='searchBox'>
                    <input type='text' value={filterText} placeholder='Search ...' onChange={(e) => onFilterTextChange(e.target.value)}></input>
                    <div class="lens" onClick={close} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="10" cy="10" r="8" stroke="black" stroke-width="2" fill="none" />
                            <line x1="15" y1="15" x2="20" y2="20" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div className='close bold' onClick={close}>X </div>
            </div>
        </>
    );
}
function close() {
    document.getElementById('searchBar').style.height = "0px";
    document.getElementById('foggy').style.height = "0px";
}
export default function SearchBar() {
    return (
        <div id='outBar'>
            <div id='searchBar'>
                <FilterableProductTable products={PRODUCTS} />
            </div>
            <div id='foggy' onClick={close}></div>
        </div>
    )
}