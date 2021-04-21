import React from 'react';
import useStyles from './styles';

export default function Home() {
	const classes = useStyles();

	//states

	return (
		<div className={classes.homeWrapper}>
			<div className={classes.textWrapper}>
				<h1 className={classes.primaryTitle}>Home</h1>
			</div>
		</div>
	);
}
