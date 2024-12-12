import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import RangeSlider from "../rangeslider/rangeslider";
import "./FilterBar.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, priceFilter, clearFilter } from '../../filterSlice';

const brands = ['ALL', 'Bundle Deals', 'Accessories', 'Apparel', '77', 'Ace'];
const price = [];
const flavors = ["ALL", "American", "Apple", " Apple Lemon Pineapple"];
const pots = ["ALL", "5", "10"];
const producttypes = ["ALL", "Caffeine", "Killa Cold Mint"];
const clearfilterx = [];


export default function FilterBar() {
    const [filter, setFilter] = useState(['ALL', 'ALL', 'ALL', 'ALL',]);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const categoryFilter = (event) => {
        // let categoryId = event.target.id;
        // let filterCategories[categoryId] = event.target.value;
        // const filter =
        // dispatch(setFilter(filterCategories))
    }

    const priceFilter = (event) => {
        const max = 0, min = 0;
        const filter = [max, min];
        dispatch(priceFilter(filter))
    }
    // const
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
                            onClick={categoryFilter}
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
                            onChange={() => {
                                dispatch(priceFilter)
                            }}
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
                            value={product_type}>
                            {product_type}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="clearfilterx" sx={{ textAlign: "left" }}>
                    <div className="clearbtn"
                        onClick={() => dispatch(clearFilter)}>Clear Filter
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</div>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}