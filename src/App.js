import React, { Component, Fragment } from "react";
import './App.scss';


import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';

class App extends Component {


	constructor() {
		super();

		this.data = [
		{
			name: "Peter",
			age: 33
		},
		{
			name: "Mark",
			age: 32
		},
		{
			name: "John",
			age: 22
		}
		];
	}

	printSomething (text) {
		console.log(text)
	}


  render() {
    return (

    	<Fragment>	

    		<Header black search  onPrint = { (text) => {this.printSomething(text)}}>
				<Cards data={this.data} />
    		</Header>


    		
    	</Fragment>
    	)
  }
}

export default App;
