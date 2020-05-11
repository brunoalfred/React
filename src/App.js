import React from 'react';
import { render } from 'react-dom';
import State from '../src/components/State'

const App = () => {
    return (
        <div className="App">

            <State />
        </div>
    );
}

const rootElement = document.getElementById = "root";
render(<App />, rootElement);