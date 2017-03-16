import React, {
    Component
} from 'react';
import logo from '../logo.svg';
import './App.css';
import ScannerContainer from '../containers/ScannerContainer';

const App = () =>{ 
    return (
        <div className="App">
            <ScannerContainer />
        </div>
    );
}

export default App;
