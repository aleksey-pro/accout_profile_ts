import React, { memo } from 'react';
import Pagination from "react-paginating";

export default memo(function Paginator({
    total, count, pageCount, currentPage, handlePageChange,
}) {
    return <Pagination 
        total={total}
        limit={count}
        pageCount={pageCount}
        currentPage={currentPage}
        className="paginator"
    >
        {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
        }) => {            
            return <div className="paginationNav">
                <button type="button"
                    disabled={!hasPreviousPage}
                    className="btn-dark"
                    {...getPageItemProps({
                        pageValue: previousPage,
                        onPageChange: () => handlePageChange(previousPage)
                    })}
                >Назад</button>
                {pages.map(page => {
                    return (
                    <button type="button"
                        className={`btn-round ${currentPage === page ? 'active' : ''}`}
                        {...getPageItemProps({
                            pageValue: page,
                            key: page,
                            onPageChange: () => handlePageChange(currentPage)
                        })}
                    >{page}</button>
                    );
                })}
                <button type="button"
                    className="btn-dark"
                    disabled={!hasNextPage}
                    {...getPageItemProps({
                        pageValue: nextPage,
                        onPageChange: () => handlePageChange(nextPage)
                    })}
                >Вперед</button>
            </div>
        }}
    </Pagination>
});
