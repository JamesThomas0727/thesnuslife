import { combineReducer, createStore } from "redux";
import { combineReducers } from "redux";
const initialState = {
    cart_products: [],
    currency_id: 4,
    visited_products: [],
    filter_list: [],
}
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
const cartReducer = (state = { cart_products: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                cart_products:
                    [...state.cart_products, action.payload]
            }
        case "INC":
            return {
                ...state,
                cart_products:
                    productInc(state.cart_products, action.payload)
            };
        case "DEC":
            return {
                ...state,
                cart_products:
                    productDec(state.cart_products, action.payload)
            };
        default: return state;
    }
}
const currencyReducer = (state = { currency_id: 4 }, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                currency_id: action.payload
            }
        default: return state;
    }
}

const recentReducer = (state =
    { visited_products: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                visited_products:
                    [...state.visited_products, action.payload]
            };
        default: return state;
    }
}

const filterReducer = (state =
    { filter_list: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                filter_list:
                    [...state.filter_list, action.payload],
            };
        case "CLEAR":
            return {};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cart_products: cartReducer,
    currency_type: currencyReducer,
    recently_visited_products: recentReducer,
    filter_list: filterReducer,
})
const store = createStore(rootReducer);
export default store;