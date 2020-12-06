import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Wireframes from '../../common/components/Wireframes'
import getProducts from '../../store/actions/getProducts'
import Table from './table'
import Pagination from '../../common/components/Pagination'
import Filters from './filters'
import "../../common/css/products.css"

const Products = (props) => {
    const { data } = props.products;
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 10;
    //set pagination
    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    const currentData = data.slice(indexOfFirstData, indexOfLastData)

    //change page
    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
        //Persistence pageNumber state
        localStorage.setItem('pageNumber',pageNumber)
    }

    let { isLoading } = props.products;
    function getProductsData() {
        return props.dispatch(getProducts())
    }

    useEffect(() => {
        //check pageNumber, if exist go that page
        let pageN = localStorage.getItem('pageNumber')
        if(pageN){
            paginate(pageN)
        }else{
        getProductsData()}
    }, [])

    return (
        <Wireframes>
            <Filters {...props} />
            {isLoading ? (
                <div className="loading-icon" >
                    <div className="spinner-border " role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                    <div className="table">
                        <Table {...props} data={currentData} />
                        <Pagination
                            dataPerPage={dataPerPage}
                            totalData={data.length}
                            paginate={paginate} />
                    </div>
                )}

        </Wireframes>
    )
}

export default connect(res => ({ ...res }))(Products) 