import React from 'react';
import Btn from "./Btn";
class Controls extends React.Component {
    render() {
        let buttons = [
            {
                title: 'INC',
                isDisabled: this.props.isDisabled,
                onFunc: this.props.incrementCounter,
                disabled: 'DISABLED',
                counter: this.props.counter
            },
            {
                title: 'RESET',
                isDisabled: this.props.counter === this.props.minVal ? true : false,
                onFunc: this.props.resetCounter,
                disabled: 'DISABLED'
            },
            {
                title: 'SET',
                onFunc: this.props.setFunc,
                isDisabled: this.props.counter > this.props.minVal ? true : false,
                disabled: 'DISABLED'

            }
        ]
        return (
            <div >
                {this.props.setVisibleSettings ?
                    <div>
                        <button disabled={this.props.isVisibleSetInDisplay} className="SET" onClick={() => buttons[2].onFunc(false)}>SET</button>
                    </div> :
                    <div className="Buttons"><Btn {...this.props} button={buttons[0]}/>
                        <Btn {...this.props} button={buttons[1]}/>
                        <Btn {...this.props} button={buttons[2]}/></div>
                }
            </div>
        )
    }
}
export default Controls;