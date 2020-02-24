import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';

import {Search} from '../Search/Search';


const Header = (props) => {

	return(

		<header className={props.background}> 
		<img src={logo} className='logo' />
		<Search />
		 </header>

		)
}

export { Header };