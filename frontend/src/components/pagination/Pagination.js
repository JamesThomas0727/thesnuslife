import React, { useState } from 'react'
import "./Pagination.css";
export default function Pagination(props) {
    const [page_index, setPageIndex] = useState([0]);
    var pages = 1;
    const showNumbers = (count, page_index) => {
        pages = Math.ceil(count / 32);
        // let 
    }
    return (
        <>
            {(pages <= 5) & (<div class="pagination">
                <a href="">&laquo;</a>
                <a href="">‹</a>
                
                <a href="">›</a>
                <a href="">&raquo;</a>
            </div>)}
            {(pages >= 5) & (<div class="pagination">
                <a href="">&laquo;</a>
                <a href="">‹</a>
                for(let i = page_index; count )
                <a href="">›</a>
                <a href="">&raquo;</a>
            </div>)}
        </>
    )
}
