import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import * as Ui from '@material-ui/core';
import API from '../api';
import { toast } from 'react-toastify';

export default function Home(props) {
	const classes = useStyles();

	//states

	//component did mount
	useEffect(() => {
		console.log(props.location.state.token);
		console.log(props.location.state.document);
	});

	//functions

	return <div className={classes.homeWrapper}>invoice</div>;
}
