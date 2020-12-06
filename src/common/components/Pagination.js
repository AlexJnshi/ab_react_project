import React from 'react';
import '../css/pagination.css'

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    const pageNumbers = []
    const totalPage = Math.ceil(totalData / dataPerPage)
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" onClick={() => paginate(number)}>
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