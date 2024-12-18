import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import RangeSlider from "../rangeslider/rangeslider";
import "./FilterBar.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
const brands = ['ALL', 'Bundle Deals', 'Accessories', 'Apparel', '77', 'Ace'];
const price = [];
const flavors = ["ALL", "American", "Apple", " Apple Lemon Pineapple"];
const pots = ["ALL", "5", "10"];
const producttypes = ["ALL", "Caffeine", "Killa Cold Mint"];
const clearfilterx = [];


const handleClick = (event) => {
    let category = event.target.id;
    axios.get('http://localhost:5000/products?')
        .then(response => console.log(response.data))
        .catch(error => console.error('Error fetching data:', error));

}
export default function FilterBar() {
    const [selected, select] = useState(0);
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
                            onClick={handleClick}
                            key={index}
                            id={brand}>
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
                            id={flavor}>
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
                            id={pot}>
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
                            id={product_type}>
                            {product_type}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="clearfilterx" sx={{ textAlign: "left" }}>
                    <div className="clearbtn" onClick={""}>Clear Filter
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</div>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}