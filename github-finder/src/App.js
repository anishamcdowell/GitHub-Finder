import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Navbar title='GitHub Finder' icon='fab fa-github p-1' />
			</div>
		);
	}
}

export default App;
