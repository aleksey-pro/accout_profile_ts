import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from '../../../store';
import { getUserData } from '../../../api';
import { setProducts } from '../../../reducer';
import Paginator from '../../Paginator';

export default function BlockWrapper ({ children, type }) {
    const { store, dispatch } = useContext(UserContext);
    const { [type]: { items, ...paginationProps } } = store;
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');

    const handlePageChange = useCallback((page) => setCurrentPage(page), []);

    const responseHandler = (response) => {
        if (response.error) {
            setError(response.error);
        } else {
            dispatch(setProducts(response.data));
        }
        setLoading(false);
    }

    // useEffect(() => {
    //     getUserData[type](currentPage)
    //         .then(responseHandler)
    //         .catch(() => setLoading(false))
    // }, [currentPage]);

    return <>
        {children({ handlePageChange, store, loading, error })}
        <Paginator 
            {...paginationProps} 
            currentPage={currentPage} 
            handlePageChange={handlePageChange}
        />
    </>
}