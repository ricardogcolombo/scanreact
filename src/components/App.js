import React, {
    Component
} from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './button/Button';

class App extends Component {

    scanBarCode() {
        debugger;

    }
    render() {
        return (
            <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
        <Button onClick={this.scanBarCode} text='scan code'/>

        </p>
      </div>
        );
    }
}

export default App;
