import React from 'react'
import FilterBar from '../../components/filterbar/FilterBar';
import DropdownButton from '../../components/dropdown/Dropdown';
import "./apparel.css";
export default function ApparelPage() {
    return (
        <div className='container'>
            <div class="anton1 fs-2 text-center text-uppercase">Shop All</div>
            <div className='left-bar'><FilterBar></FilterBar></div>
            <div><DropdownButton  title="Newest"></DropdownButton></div>
        </div>
    );
}
