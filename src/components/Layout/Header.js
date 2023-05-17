import React, { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../UI/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="a table full of delicious food!" />
			</div>
		</Fragment>
	);
}

export default Header;