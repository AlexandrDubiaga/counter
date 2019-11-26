import React from 'react';
class Controls extends React.Component {
    render() {
        return (
            <div>
               <button className={this.props.button.counter===5?'buttonColor':''} disabled={this.props.button.isDisabled?true:false} onClick={this.props.button.onFunc}>{this.props.button.title}</button>
            </div>
        )
    }
}
export default Controls;