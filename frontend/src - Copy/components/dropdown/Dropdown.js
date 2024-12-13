import Dropdown from 'react-bootstrap/Dropdown';
import SortIcon from '@mui/icons-material/Sort';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../store/sortSlice';
import "./DropdownButton.css";


const SortMethods = [
    "Newest",
    "Oldest",
    "Price (low to high)",
    "Price (high to low)",
    "Name (A to Z)",
    "Name (Z to A)",
    "Strength (low to high)",
    "Strength (high to high)",
];

function DropdownButton(props) {
    //===========================================================
    const [title, setTitle] = useState(SortMethods[0]);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setTitle(event.target.title);
        let field = (event.target.text);
        let sortMethod = {};
        switch (field) {
            case "Newest":
                sortMethod = {
                    field: "registered",
                    des: true
                }
                break;
            case "Oldest":
                sortMethod = {
                    field: "registered",
                    des: false
                }
                break;
            case "Price (low to high)":
                sortMethod = {
                    field: "new_price",
                    des: true
                }
                break;
            case "Price (high to low)":
                sortMethod = {
                    field: "new_price",
                    des: false
                }
                break;
            case "Name (A to Z)":
                sortMethod = {
                    field: "product_name",
                    des: true
                }
                break;
            case "Name (Z to A)":
                sortMethod = {
                    field: "product_name",
                    des: false
                }
                break;
            case "Strength (low to high)":
                sortMethod = {
                    field: "strength",
                    des: false,
                }
                break;
            case "Strength (high to low)":
                sortMethod = {
                    field: "strength",
                    des: true
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
                        title={text}>{text}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;