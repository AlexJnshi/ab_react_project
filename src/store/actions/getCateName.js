import http from './http'

//this action is used to detail page to get categories' names
const getCateName = (cateArr) => {
    return async function (dispatch) {
        let idStr = cateArr.join(",")
        return (await http.get(`/categories?${idStr ? "id:in=" + idStr : ""}`)
            .then(res => {
                if (res.data.data.length > 0) {
                    dispatch({
                        type: "CATEGORES_DETAILCATES",
                        data: res.data.data
                    })
                }
            })
        )
    }
}

export default getCateName