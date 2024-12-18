import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { priceFilter } from "../../store/filterSlice";
function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState([0.99, 4174.99]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // console.log(newValue);
        // let value = [];
        // value[0] = newValue[0]
        dispatch(priceFilter(newValue));
    };

    return (
        <Box sx={{
            width: "100%", marginTop: "20px",
            paddingBottom: "0px", marginBottom: "0px"
        }}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                focus="true"
                size="small"
                min={0}
                max={4239.99}
                track="normal"
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}