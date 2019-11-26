import React from 'react';
import './App.css';
import Display from "./components/Display";
import Controls from "./components/Controls";

class App extends React.Component {
    state = {
        counter: 0,
        isDisabled: false,
        maxVal: 5,
        minVal: 0
    }

    incrementCounter = () => {
        if(this.state.counter===4){
            this.setState({
                isDisabled: true,
            })
        }

        this.setState({
            counter:++this.state.counter
        })
    }
    resetCounter = () => {
        this.setState({
            counter: 0,
            isDisabled: false
        })
    }

    render() {
        return (
            <div className="App">
                <div className="Wrapper">
                    <div className="Display">
                        <Display counter={this.state.counter}/>
                    </div>
                    <div>
                        <Controls className="Controls" counter={this.state.counter} maxVal={this.state.maxVal} minVal={this.state.minVal}
                                  isDisabled={this.state.isDisabled} incrementCounter={this.incrementCounter}
                                  resetCounter={this.resetCounter}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
