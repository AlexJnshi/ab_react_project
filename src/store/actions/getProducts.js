import http from './http'

const getProducts = (itemId) => {
    return async (dispatch, getState) => {
        try {
            //loading state control -start
            dispatch({
                type: "PRODUCTS_LOADING"
            })
            //click filter to check product with certain category
            if (itemId) {
                dispatch({
                    type: "PRODUCTS_RELOAD",
                    categories: itemId
                })
            }
            //fetch data
            let { page, limit, categories } = getState().products
            return await http.get(`/products?page=${page}&limit=${limit}${categories ? ("&categories:in=" + categories) : ""}`)
                .then(res => {
                    if (res.data.data.length > 0) {
                        //return data and loading state control -end
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