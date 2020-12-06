import React from 'react';
import { HashRouter } from 'react-router-dom';
import IndexRoute from './router/index'

function App() {
    return (
        <HashRouter>
            <IndexRoute/>
        </HashRouter>
    );
}

export default App;
