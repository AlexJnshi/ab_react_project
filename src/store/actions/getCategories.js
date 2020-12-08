import http from './http'

const getCategories = (cateArr) => {
    return async function (dispatch, getState) {
        try {
            //loading state control -start
            dispatch({
                type: "CATEGORIES_LOADING"
            })
            //fetch data
            let { limit } = getState().categories
            let idStr = cateArr.join(",")
            return (await http.get(`/categories?${idStr ? "id:in=" + idStr : ""}${limit > 0 ? ("&limit=" + limit) : ""}`)
                .then(res => {
                    //return result and loading state control -end
                    if (res.data.data.length > 0) {
                        dispatch({
                            type: "CATEGORIES_LOADINGOVER",
                            data: res.data.data
                        })
                    }
                })
            )
        } catch (e) {
            console.log(e)
        }
    }
}
export default getCategories