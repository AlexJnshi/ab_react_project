import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexRoute from './router/index'

function App() {
    return (
        <BrowserRouter>
            <IndexRoute/>
        </BrowserRouter>
    );
}

export default App;
