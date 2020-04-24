import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
	return (
		<header style = {headerStyle}>
			<h1> ToDoList </h1>
			<Link to="/">Home</Link>|<Link to="Link"> About</Link>
		</header>
	)
}


const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center'
}

export default Header;