import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Wireframes from "../../common/components/Wireframes"
import getCateName from "../../store/actions/getCateName"
import '../../common/css/details.css'

const Details = (props) => {
    const { data } = props.location
    const { detailCates } = props.categories
    const { history } = props
    console.log(props)
    
    const getCateNamesData=()=>{
        return props.dispatch(getCateName(data.categories))
    }
    useEffect(() => {
        getCateNamesData()
        window.scrollTo(0, 0);
    },[])

    const goBack = (history) => {
        return () => {
            if (history.length > 1) {
                history.goBack();
            } else {
                history.push("/")
            }
        }
    }
    return (
        <Wireframes>
            <div className="details">
                <div className="back-list" onClick={goBack(history)}>&lt; Back to list</div>
                <h1>{data.name}</h1>
                <h5>Categories:
                {detailCates.map((item, index) => (
                    <span key={index}> {item.name}, </span>
                ))}
                </h5>
                <h5>SKU:<span> {data.sku}</span></h5>
                <h5>Price:<span> ${data.price.toFixed(2)}</span></h5>
                <h5>Description:</h5><div dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
        </Wireframes >
    )
}

export default connect(res => res)(Details) 