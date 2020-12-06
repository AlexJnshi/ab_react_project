import React, { useEffect, useState } from 'react';
import '../css/pagination.css'

const Pagination = (props) => {
    const { dataPerPage, totalData, paginate } = props
    const pageNumbers = []
    const [activeIndex, setActiveIndex] = useState(1)
    const totalPage = Math.ceil(totalData / dataPerPage)
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        const pageN = localStorage.getItem("pageNumber")
        if (pageN) {
            setActiveIndex(pageN)
        }
    }, [])

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`${(number == activeIndex ? "page-active" : "")} page-item`} onClick={() => {
                        setActiveIndex(number)
                        paginate(number)
                    }}>
                        <a href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;