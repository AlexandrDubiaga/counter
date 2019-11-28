import React from 'react';
class Controls extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.button.counter === this.props.maxVal ? 'buttonColor' : ''}
                        disabled={this.props.button.isDisabled ? true : false}
                        onClick={()=>this.props.button.onFunc(true)}>{this.props.button.isDisabled?this.props.button.disabled:this.props.button.title}</button>
            </div>
        )
    }
}
export default Controls;