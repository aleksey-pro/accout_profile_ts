import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from '../../../store';
import { getUserData } from '../../../api';
import { setUserData } from '../../../reducer';
import { getItemsFiltered } from '../../../utils';
import Paginator from '../../Paginator';

export default function BlockWrapper ({ children, type }) {
    const { store, dispatch } = useContext(UserContext);
    const { [type]: { items, ...paginationProps } } = store;
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');
    
    const handlePageChange = useCallback((page) => setCurrentPage(page), []);
    const handleSetFilter = useCallback((f) => setFilter(f), []);

    const responseHandler = (response) => {
        if (response.error) {
            setError(response.error);
        } else {
            dispatch(setUserData(response.data, type));
        }
        setLoading(false);
    }

    // useEffect(() => {
    //     getUserData[type](currentPage)
    //         .then(responseHandler)
    //         .catch(() => setLoading(false))
    // }, [currentPage]);

    return <>
        {children({ items, filter, handleSetFilter, loading, error })}
        <Paginator 
            {...paginationProps} 
            currentPage={currentPage} 
            handlePageChange={handlePageChange}
        />
    </>
}