
import './accessories.css'
import ProductCard from '../../components/productcard/ProductCard'

export default function AccessoriesPage(){


    const product = {
        "product_name": "Ace X Xmas Edition - 16mg",
        "img": "https://thesnuslife-asset.s3.amazonaws.com/1731682337434_IMG_6121.PNG",
        "price1": 4.99,
        "price2": 5.99,
        "moneytype": 4,
    };
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