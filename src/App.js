import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			name: ""
		}
	}
	handleNameChnage(oEvent){
		this.setState({name: oEvent.target.value});
	}
	handleEmailChnage(oEvent){
		this.setState({email: oEvent.target.value});
	}
  render() {
    return (
    	<div>
	      	<p className="App-intro">
	        	To get started, edit <code>src/App.js</code> and save to reload.
	        	<br/>
	        	<Link to="/custom">custom</Link>
	      	</p>
	      	<form>
			 	<fieldset>
			 		 <legend>Two Way Binding React:</legend>
			  		Name: <input type="text" value={this.state.name} onChange={this.handleNameChnage.bind(this)}/><br/>
			 		Email: <input type="text" value={this.state.email} onChange={this.handleEmailChnage.bind(this)}/>
			 	</fieldset>
			</form>
			<form>
			 	<fieldset>
			  		<legend>Two Way Display values:</legend>
			  		Name: <span>{this.state.name}</span><br/>
			  		Email: <span>{this.state.email}</span>
			 	</fieldset>
		 	</form>
		 </div>
    )
  }
}
