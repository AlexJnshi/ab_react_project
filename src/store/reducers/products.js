const products = (state = {
    data: [],
    isLoading: false,
    page: 1,
    limit: 100,
    id: [],
    categories: 0
}, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "PRODUCTS_RELOAD":
            return {
                ...state,
                categories: action.categories
            }
        case "PRODUCTS_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "PRODUCTS_LOADOVER":
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
    }
    return state
}

export default products