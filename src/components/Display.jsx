import React from 'react';
class Display extends React.Component {
    state = {
        error: '',
        errorCheck: false
    }
    changeValuesInputs = (e) => {

        let obj = {
            maxVal: e.currentTarget[0].value.trim(),
            minVal: e.currentTarget[1].value.trim()
        }
        if (obj.maxVal > 10) {
            this.setState({error: 'Max 10', errorCheck: true})
        } else if (obj.maxVal < 0) {
            this.setState({error: 'Min 0', errorCheck: true})
        } else if (obj.minVal < 0) {
            this.setState({error: 'Min 0', errorCheck: true})
        } else if (obj.minVal > 10) {
            this.setState({error: 'Max 10', errorCheck: true})
        } else if (obj.minVal == obj.maxVal) {
            this.setState({error: 'Min != Max', errorCheck: true})
        } else {
            this.setState({errorCheck: false})
            this.props.changeStartMaxValue(obj);
        }

    }

    render() {
        let display = this.props.counter === this.props.maxVal ? 'Max: ' + this.props.maxVal : this.props.counter
        return (
            <div>
                    <div>
                        {this.props.setVisibleSettings ?
                            <div>
                                <form onChange={this.changeValuesInputs}>
                                    Max value: <input className={this.state.errorCheck?'errorInput':''} type="number" value={this.props.maxVal}/>
                                    Start value: <input className={this.state.errorCheck?'errorInput':''} type="number" value={this.props.minVal}/>
                                </form>
                            </div> :
                            display
                        }
                    </div>


            </div>
        )
    }
}
export default Display;