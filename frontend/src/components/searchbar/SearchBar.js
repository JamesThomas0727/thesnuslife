import './SearchBar.css'
import { useState } from 'react';


function FilterableProductTable(props) {
    const products = props.products;
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
                filterText={filterText} />
        </div>
    );
}
function ProductRow(props) {
    const product = props.product;
    const name = product.product_name;
    return (
        <div className='listdata' onClick="">
            <div className='mag'>
                <img src={"/images/products/" +
                    product.product_avatar_id + ".png"}></img>
            </div>
            <div className='goods'>
                <div className='goodsid'>{name}</div>
                {/* <div className='goodsprice'>Price : {product.new_price}</div> */}
            </div>
        </div>

    );
}
function ProductTable(props) {
    const products = props.products;
    const filterText = props.filterText;
    const rows = [];
    products.forEach((product) => {
        if (product.product_name.
            toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
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
                    <img src="/images/products/3.png" alt='mark'></img>
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
                <div className='close bold' onClick={close}  >X </div>
            </div>
        </>
    );
}
function close() {
    document.getElementById('searchBar').style.height = "0px";
    document.getElementById('foggy').style.height = "0px";
}
export default function SearchBar(props) {
    const products = props.products;
    return (
        <div id='outBar'>
            <div id='searchBar'>
                <FilterableProductTable products={products} />
            </div>
            <div id='foggy' onClick={close}></div>
        </div>
    )
}