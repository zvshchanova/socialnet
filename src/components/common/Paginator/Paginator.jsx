import React from 'react';
import styles from './Paginator.module.css';
import { useState } from 'react';

const Paginator = ({ onPageChanged, currentPage, totalItemsCount, pageSize, portionSize = 10 }) => {
    debugger;
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftportionPageNumber = (portionNumber -1 ) * portionSize + 1;
    let rightportionPageNumber = portionNumber * portionSize;


    return (  
    <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
        }
        {pages
        .filter(p => p>=leftportionPageNumber && p<=rightportionPageNumber)
        .map(p => {
        return  <span   className={currentPage === p ? styles.selectPage : styles.pageNumber}  
        key={p}
        onClick={() => { onPageChanged(p)}}
        >{p}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>

        }

    </div>
    )

}

export default Paginator