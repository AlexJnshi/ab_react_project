import React from 'react'
import Details from '../view/details'
import Products from '../view/products'

//render(props) pass router info to each componment
const routesList = [
    {
        path: '/',
        exact: true,
        render(props) {
            return <Products {...props} />
        }

    },
    {
        path: '/details',
        exact: false,
        render(props) {
            return <Details {...props} />
        }

    },
]

export default routesList