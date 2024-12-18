import Dropdown from 'react-bootstrap/Dropdown';
import SortIcon from '@mui/icons-material/Sort';
import React from 'react';
import { useState } from 'react';
import "./DropdownButton.css";
const handleSelect = (event) => {
    event.preventDefault();
    this.setState({ title: "" });
}
const SortMethods = ["Newest", "Price (low to high)", "Price (high to low)",
    "Name (A to Z)", "Name (Z to A)", "Strength (low to high)",
    "Strength (low to high)",
];

function DropdownButton() {
    const [title, setTitle] = useState(SortMethods[0]);
    return (
        <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="default" size='lg'
                id="dropdown-sort">
                <SortIcon></SortIcon>&nbsp;&nbsp;
                {title}&nbsp;
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {SortMethods.map((text, index) => (
                    <Dropdown.Item
                        onClick={(event) => setTitle(event.target.text)}
                        key={index}
                        id={index}
                        value={text}>{text}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;