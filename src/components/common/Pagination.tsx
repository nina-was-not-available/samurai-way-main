import React from 'react';
import classes from "./common.module.css"

type PaginationPT = {
    totalCount: number
    size: number
    page: number
    onPageChanged: (page: number) => void
}

const Pagination = (props: PaginationPT) => {
    let pagesCount = Math.ceil(props.totalCount / props.size)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.paginationContainer}>
            <div className={classes.pagination}>
                {pages.map(el => {
                    return <span
                        className={props.page === el ? classes.selected : ''}
                        onClick={() => props.onPageChanged(el)} style={{cursor: 'pointer'}} key={el}
                    >{el}</span>
                })}
            </div>
        </div>
    );
};

export default Pagination;