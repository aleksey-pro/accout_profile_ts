export const getItemsFiltered = (statusMap, products) => {
    return statusMap.reduce((acc, cur) => {
        if(cur.status === 0) return { 0: products };
            return Object.assign(acc, 
                { [cur.status]: products.filter(d => d.status === cur.status) }
            )
    }, {})
}