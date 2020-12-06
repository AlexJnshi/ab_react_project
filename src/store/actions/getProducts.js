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
            let params = {
                categories,
                page,
                limit
            }
            return await http.get(`/products`, { params })
                .then(res => {
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