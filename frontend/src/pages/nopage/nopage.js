import React from 'react'
import './nopage.css';
export default function NoPage(props) {
    const title = props.title;
    return (
        <div className='nopage'>
            {title}
        </div>
    )
}
