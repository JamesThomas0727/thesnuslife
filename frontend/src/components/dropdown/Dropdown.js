import Dropdown from 'react-bootstrap/Dropdown';
import SortIcon from '@mui/icons-material/Sort';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../sortSlice';
import "./DropdownButton.css";


const SortMethods = ["Newest", "Price (low to high)", "Price (high to low)",
    "Name (A to Z)", "Name (Z to A)", "Strength (low to high)",
    "Strength (low to high)",
];

function DropdownButton(props) {
    const [title, setTitle] = useState(SortMethods[0]);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        // this.setState({ title: "" });
        let field = event.target.id;
        let sortMethod = {};
        switch (field) {
            case 1:
                sortMethod = {
                    "field": "registered",
                    "DES": true
                }
                break;
            case 2:
                sortMethod = {
                    "field": "registered",
                    "DES": false
                }
                break;
            case 3:
                sortMethod = {
                    "field": "new_price",
                    "DES": true
                }
                break;
            case 4:
                sortMethod = {
                    "field": "new_price",
                    "DES": false
                }
                break;
            case 5:
                sortMethod = {
                    "field": "product_name",
                    "DES": true
                }
                break;
            case 6:
                sortMethod = {
                    "field": "product_name",
                    "DES": false
                }
                break;
            case 7:
                sortMethod = {
                    "field": "strength",
                    "DES": true
                }
                break;
            case 8:
                sortMethod = {
                    "field": "strength",
                    "DES": false
                }
                break;
            default:
                break;
        }
        dispatch(setSort(sortMethod));
    }
    return (
        <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="default" size='lg'
                id="dropdown-sort">
                <SortIcon />&nbsp;&nbsp;
                {title}&nbsp;
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {SortMethods.map((text, index) => (
                    <Dropdown.Item
                        onClick={handleClick}
                        key={index}
                        id={index + 1}
                        value={text}>{text}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;