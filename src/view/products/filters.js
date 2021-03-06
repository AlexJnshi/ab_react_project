import React, { useEffect } from 'react';
import getCategories from '../../store/actions/getCategories';
import getProducts from '../../store/actions/getProducts';
import '../../common/css/filters.css'

const Filters = (props) => {
    const { data } = props.products
    const { isLoading } = props.categories
    const { categories } = props.categories

    const getCategoriesData = (cateArr) => {
        return props.dispatch(getCategories(cateArr))
    }

    const reloadProduct = (itemId) => {
        return props.dispatch(getProducts(itemId))
    }

    useEffect(() => {
        //get all categories in current data
        let cateArr = []
        data.map(item => {
            if (item.categories.length > 0) {
                cateArr = cateArr.concat(item.categories)
            }
        })
        //Deduplication
        cateArr = Array.from(new Set(cateArr))
        //fetch data
        getCategoriesData(cateArr)
    }, [])

    return (
        <div className="categories-block">
            {isLoading ? (
                <span></span>
            ) : (   //show first 6 categories using to filte
                    categories.slice(0, 6).map(item => (
                        <span className="categories-order" onClick={() => {
                            //request from server for exact catefory products
                            reloadProduct(item.id)
                            //setPageNumber = 1, when new data coming
                            sessionStorage.setItem("pageNumber", 1)
                        }
                        } key={item.id}>{item.name}</span>
                    ))
                )}
        </div>
    );
}

export default Filters;