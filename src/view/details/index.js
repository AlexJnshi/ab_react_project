import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Wireframes from "../../common/components/Wireframes"
import '../../common/css/details.css'

const Details = (props) => {
    const { data } = props.location
    const { categories } = props.categories
    const { history } = props
    console.log(props)

    useEffect(() => {
        //had problems here...
        //the api /products?categories:in=... looks not return the correct results..
        //may be I was wrong
        const findeCateNames = () => {
            let names = []
            for (let item of data.categories) {
                for (let cateName of categories) {
                    if (item === cateName.id) {
                        names.push(cateName.name)
                    }
                }
            }
            return names
        }
    })

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
                {data.categories.map((item, index) => (
                    <span key={index}> {item}, </span>
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