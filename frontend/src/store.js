import { createSlice, configureStore } from '@reduxjs/toolkit';

const productInc = (cart_products, product) => {
    let product_id = product.id;
    let exist = false;
    cart_products.forEach(product => {
        if (product_id === product.product_id) {
            product.count++;
            exist = true;
        }
    });
    if (exist === false) cart_products.push(product);
    return cart_products;
}

const productDec = (cart_products, product) => {
    let product_id = product.id;
    let exist = true;
    cart_products.forEach(product => {
        if (product_id === product.product_id) {
            if (product.count > 0) product.count--;
            else exist = false;
        }
    });
    if (exist === false) cart_products.pop(product);
    return cart_products;
}

const cartSlice = createSlice({
    name: "cartProducts",
    initialState: [],
    reducers: {
        addCart: (state) => {

        },
        incProduct: (state) => {
        },
        decProduct: (state) => {
        },
    }
});

const currencySlice = createSlice({
    // name
})
export const { addCart, incProduct, decProduct } = cartSlice.actions;

const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,

    },
});