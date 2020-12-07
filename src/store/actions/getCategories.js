import http from './http'

const getCategories = (cateArr) => {
    return async function (dispatch, getState) {
        try {
            dispatch({
                type: "CATEGORIES_LOADING"
            })
            //  limit is not really working in this task,
            //  I was trying to set limit in state and get it in here, 
            //  the reason I set this is because when I make a request with certain id,
            //  the return JSON shows "too many data".  
            //  but it seems still return "too many data", when I add limit params.
            let { limit } = getState().categories
            let idStr = cateArr.join(",")
            return (await http.get(`/categories?${idStr?"id:in="+idStr:""}${limit>0?("&limit="+limit):""}`)
                .then(res => {
                    console.log(res)
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