import http from './http'

const getCategories = (cateArr) => {
    return async function (dispatch, getState) {
        try {
            dispatch({
                type: "CATEGORIES_LOADING"
            })
            let { limit } = getState().categories
            let idStr = cateArr.join(",")
            return (await http.get(`/categories?${idStr?"id:in="+idStr:""}${limit>0?("&limit="+limit):""}`)
                .then(res => {
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