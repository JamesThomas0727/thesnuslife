import React, { Children } from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data: " + error));
    }, []);
    return (
        <DataContext.Provider value={{ products, loading }}>
            {children}
        </DataContext.Provider>
    );
}
