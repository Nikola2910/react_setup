import React, {Component, Fragment} from 'react';
import {Search} from './components/Search/Search';

class App extends Component {

	render(){
		return(
			<Fragment>
			<div className='some-class'> This is some React app </div>
			<span>Some other text</span>
			<Search />
			</Fragment>
			)
	}

}

export default App;