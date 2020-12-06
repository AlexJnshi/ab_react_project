import React from 'react'
import '../../common/css/table.css'

const Table = (props) => {
    let { data } = props
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Sku</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} onClick={() => {
                            props.history.push({
                                pathname: '/details',
                                data: item
                            })
                        }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.sku}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table