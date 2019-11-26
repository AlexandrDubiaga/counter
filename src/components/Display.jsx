import React from 'react';
class Display extends React.Component{
    render(){
        let display = this.props.counter===5?'Max(5)':this.props.counter
        return(
            <div className="ShowCounter">
                {display}
            </div>
        )
    }
}
export default Display;