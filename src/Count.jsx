import React from 'react';

class Count extends React.Component {
	state= {
		count: 0
	}

	inc = ()=> {
		this.setState({count: this.state.count + 1});
	}
	render(){
		return (
		
		<div>
				<p>Count : {this.state.count}</p>
				<button onClick={this.inc}>ГО</button>
		</div>
	)}
}
export default Count;