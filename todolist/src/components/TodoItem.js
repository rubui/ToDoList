import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

	getStyle = () => {
		return {
			textDecoration : this.props.todo.completed? 'line-through' : 'none'
		}
	}
	

	render(){
		const {id, title } = this.props.todo;
		return (
			<div style = {this.getStyle()}>
				<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
				<p>{title}</p>
				<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

// const itemStyle = {
// 	backgroundColor: '#f4f4f4'
// }

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	borderRadius: '50%',
	border : 'none',
	padding: '5px, 9px',
	cursor:'pointer',
	float: 'right'
}

export default TodoItem;