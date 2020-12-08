import http from './http'

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