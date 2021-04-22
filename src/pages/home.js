import React, { useState } from 'react';
import useStyles from './styles';
import * as Ui from '@material-ui/core';
import API from '../api';
import { toast } from 'react-toastify';

export default function Home() {
	const classes = useStyles();

	//states
	const [ formLoader, setFormLoader ] = useState(false);

	//functions
	const sendForm = async () => {
		setFormLoader(true);

		try {
			let response = await API.payCo.getToken();
			setFormLoader(false);
			console.log(response.data);
		} catch (error) {
			toast.error('Something bad happend');
		}
	};

	return (
		<div className={classes.homeWrapper}>
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<form className={classes.form}>
						<h3 className="text-center">Consult Form</h3>
						<Ui.TextField label="Document" className={classes.inputText} />
						<Ui.Button variant="contained" color="primary" className="w-100 mt-4" onClick={sendForm}>
							{formLoader ? <Ui.CircularProgress className={classes.loader} size="1.5rem" /> : 'Send'}
						</Ui.Button>
					</form>
				</div>
				<div className="col-md-3" />
			</div>
		</div>
	);
}
