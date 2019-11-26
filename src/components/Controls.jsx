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
                counter:this.props.counter
            },
            {
                title: 'RESET',
                isDisabled: this.props.counter === this.props.minVal ? true : false,
                onFunc: this.props.resetCounter,
                disabled: 'DISABLED'
            }
        ]
        return (
            <div className="Buttons">
                <Btn {...this.props} button={buttons[0]}/>
                <Btn {...this.props} button={buttons[1]}/>
            </div>
        )
    }
}
export default Controls;