import React, { memo } from 'react';
import Pagination from "react-paginating";

export default memo(function Paginator(props) {
    const {
        total, count, pageCount, currentPage, handlePageChange,
    } = props;
    console.log("🚀 ~ file: Paginator.jsx ~ line 67 ~ Paginator ~ total", total)
    return <Pagination 
        total={total}
        limit={count}
        pageCount={pageCount}
        currentPage={currentPage}
        className="paginator container"
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
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ getPageItemProps", getPageItemProps)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ totalPages", totalPages)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ nextPage", nextPage)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ previousPage", previousPage)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ hasPreviousPage", hasPreviousPage)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ hasNextPage", hasNextPage)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ currentPage", currentPage)
            console.log("🚀 ~ file: Paginator.jsx ~ line 25 ~ Paginator ~ pages", pages)
            return <div className="paginationNav">
                {totalPages > 0 && <button type="button"
                    disabled={!hasPreviousPage}
                    className="btn-dark"
                    {...getPageItemProps({
                        pageValue: previousPage,
                        onPageChange: handlePageChange
                    })}
                >Назад</button>}
                {pages.map(page => {
                    return (
                    <button type="button"
                        className={`btn-round ${currentPage === page ? 'active' : ''}`}
                        disabled={currentPage === page}
                        {...getPageItemProps({
                            pageValue: page,
                            key: page,
                            onPageChange: handlePageChange
                        })}
                    >{page}</button>
                    );
                })}
                {totalPages > 0 && <button type="button"
                    className="btn-dark"
                    disabled={!hasNextPage}
                    {...getPageItemProps({
                        pageValue: nextPage,
                        onPageChange: () => handlePageChange(nextPage)
                    })}
                >Вперед</button>}
            </div>
        }}
    </Pagination>
});
