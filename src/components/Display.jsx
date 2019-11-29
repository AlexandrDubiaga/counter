import React from 'react';
class Display extends React.Component {
    state = {
        error: '',
        errorCheckMax: false,
        errorCheckMin: false
    }
    changeValuesInputs = (e) => {

        let obj = {
            maxVal: e.currentTarget[0].value.trim(),
            minVal: e.currentTarget[1].value.trim()
        }
        if (obj.maxVal > 10) {
            this.setState({error: 'Max 10', errorCheckMax: true})
            this.props.disableSetIfError(true, false)
        } else if (obj.maxVal < 0) {
            this.setState({error: 'Min 0', errorCheckMax: true})
            this.props.disableSetIfError(true, false)
        } else if (obj.minVal < 0) {
            this.setState({error: 'Min 0', errorCheckMin: true})
            this.props.disableSetIfError(false, true)
        } else if (obj.minVal > 10) {
            this.setState({error: 'Max 10', errorCheckMin: true})
            this.props.disableSetIfError(false, true)
        } else if (obj.minVal == obj.maxVal) {
            this.setState({error: 'Min != Max', errorCheckMax: true})
            this.props.disableSetIfError(true, false)
        } else {

            this.setState({errorCheckMax: false})
            this.setState({errorCheckMin: false})
            this.props.disableSetIfError(false, false)
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
                                Max value: <input className={this.state.errorCheckMax ? 'errorInput' : ''} type="number"
                                                  value={this.props.maxVal}/>
                                Start value: <input className={this.state.errorCheckMin ? 'errorInput' : ''}
                                                    type="number" value={this.props.minVal}/>
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