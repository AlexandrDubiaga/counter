import React from 'react';
import './App.css';
import Display from "./components/Display";
import Controls from "./components/Controls";

class App extends React.Component {
    state = {
        counter: 0,
        isDisabled: false,
        maxVal: 5,
        minVal: 0,
        setVisibleSettings:false
    }

    incrementCounter = () => {
        if(this.state.counter===this.state.maxVal-1){
            this.setState({
                isDisabled: true,
            })
        }

        this.setState({
            counter:++this.state.counter
        })
    }
    changeStartMaxValue=(obj)=>{
        this.setState({
            maxVal: parseInt(obj.maxVal),
            minVal: parseInt(obj.minVal)
        })
    }
    resetCounter = () => {
        this.setState({
            counter: 0,
            isDisabled: false,
            minVal:0
        })
    }
   setFunc = (val) => {
        this.setState({
            setVisibleSettings:val,
            counter:this.state.minVal
        })
    }


    render() {
        return (
            <div className="App">
                <div className="Wrapper">
                    <div className="Display">
                        <Display changeStartMaxValue={this.changeStartMaxValue} setVisibleSettings={this.state.setVisibleSettings} counter={this.state.counter} maxVal={this.state.maxVal} minVal={this.state.minVal}/>
                    </div>
                    <div>
                        <Controls className="Controls" setVisibleSettings={this.state.setVisibleSettings} setFunc={this.setFunc} counter={this.state.counter} maxVal={this.state.maxVal} minVal={this.state.minVal}
                                  isDisabled={this.state.isDisabled} incrementCounter={this.incrementCounter}
                                  resetCounter={this.resetCounter}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
