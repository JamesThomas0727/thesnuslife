import React from "react";
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import RangeSlider from "../rangeslider/rangeslider";
import { categoryFilter, priceFilter, clearFilter } from '../../filterSlice';
import "./FilterBar.css";

const brands = ['ALL', 'Bundle Deals', 'Accessories', 'Apparel', '77', 'Ace'];
const price = [];
const flavors = ["ALL", "American", "Apple", " Apple Lemon Pineapple"];
const pots = ["ALL", "5", "10"];
const producttypes = ["ALL", "Caffeine", "Killa Cold Mint"];
const clearfilterx = [];


export default function FilterBar() {
    //===================================================================
    const filters = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const categoryClick = (event) => {
        // let filter = {};
        // dispatch(setFilter(filter));
    }

    const priceChange = (event) => {
        const max = 0, min = 0;
        const filter = [max, min];
        dispatch(priceFilter(filter))
    }
    //==================================================================
    const handleChange = (event) => {
        alert("tterwt");
        console.log("adfaf")
    }
    //==================================================================
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="brands">
                    <Accordion.Header className="header">
                        Brands
                    </Accordion.Header>
                    {brands.map((brand, index) => {
                        return (<Accordion.Body
                            className="body"
                            onClick={() => {
                                let category = {
                                    id: 0,
                                    val: brand
                                }
                                dispatch(categoryFilter(category));
                            }}
                            key={index}
                            id={1}
                            value={brand}>
                            {brand}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="price">
                    <Accordion.Header className="header">
                        Price
                    </Accordion.Header>
                    <Accordion.Body className="body">
                        <RangeSlider sx={{ width: 30 }}
                            onChange={handleChange}
                            onClick={handleChange}
                        >
                        </RangeSlider>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="header">
                        Flavors
                    </Accordion.Header>
                    {flavors.map((flavor, index) => {
                        return (<Accordion.Body className="body"
                            key={index}
                            id={1}
                            onClick={() => {
                                let category = {
                                    id: 1,
                                    val: flavor
                                }
                                dispatch(categoryFilter(category));
                            }}
                            value={flavor}>
                            {flavor}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="pots">
                    <Accordion.Header className="header">
                        Pots
                    </Accordion.Header>
                    {pots.map((pot, index) => {
                        return (<Accordion.Body className="body"
                            key={index}
                            id={1}
                            onClick={() => {
                                let category = {
                                    id: 2,
                                    val: pot
                                }
                                dispatch(categoryFilter(category));
                            }}
                            value={pot}>
                            {pot}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="producttypes">
                    <Accordion.Header className="header">
                        Product Types
                    </Accordion.Header>
                    {producttypes.map((product_type, index) => {
                        return (<Accordion.Body
                            className="body" key={index}
                            id={1}
                            onClick={() => {
                                let category = {
                                    id: 3,
                                    val: product_type
                                }
                                dispatch(categoryFilter(category));
                            }}
                            value={product_type}>
                            {product_type}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="clearfilterx" sx={{ textAlign: "left" }}>
                    <div className="clearbtn"
                        onClick={() => dispatch(clearFilter())}>Clear Filter
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</div>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}