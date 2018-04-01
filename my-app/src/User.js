import React, {Component} from 'react';


class User extends Component
{
	constructor(props)
	{
		super(props)
		this.state={
			fullname:props.firstName+' '+props.lastName ,
			UserName: 'UserName'
		};

	}


	render()
	{
		return(
			<div>
				<h1 onClick={() =>this.handleClick(this.state.name)}>
					This is {this.props.firstName+' '+ this.props.lastName}
				</h1>
				<p> {this.state.UserName}</p>
				<input name ='UserName' type= 'text'value = {this.state.UserName} onChange = {(event)=> this.handleChange(event)}/>
			 
			</div>
		);
	}

	handleClick = function(name)
	{
		alert(this.state.fullname+ 'Clicked')
	}

	handleChange = function(event)
	{
		this.setState({
			UserName:event.target.value
	
		})
	}
		
}


export default User;