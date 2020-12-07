import http from './http'

const getProducts = (itemId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: "PRODUCTS_LOADING"
            })
            if (itemId) {
                console.log(itemId)
                dispatch({
                    type: "PRODUCTS_RELOAD",
                    categories: itemId
                })
            }
        
            let { page, limit, categories } = getState().products
            return await http.get(`/products?page=${page}&limit=${limit}${categories?("&categories:in="+categories):""}`)
                .then(res => {
                    console.log(res)
                    if (res.data.data.length > 0) {
                        dispatch({
                            type: "PRODUCTS_LOADOVER",
                            data: res.data.data
                        })
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }
}


export default getProducts