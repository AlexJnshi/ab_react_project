const categories = (state = {
    isLoading: false,
    categories: [],
    detailCates: [],
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
        case "CATEGORES_DETAILCATES":
            return {
                ...state,
                detailCates: action.data
            }
    }
    return state
}

export default categories