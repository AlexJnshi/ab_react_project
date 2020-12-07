const categories = (state = {
    isLoading: false,
    categories: [],
    limit: 0,
}, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "CATEGORIES_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "CATEGORIES_LOADINGOVER":
            return {
                ...state,
                isLoading: false,
                categories: action.data
            }
    }
    return state
}

export default categories