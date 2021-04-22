import React, { useState } from 'react';
import useStyles from './styles';
import * as Ui from '@material-ui/core';
import API from '../api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Home() {
	const classes = useStyles();
	const history = useHistory();

	//states
	const [ formLoader, setFormLoader ] = useState(false);
	const [ document, setDocument ] = useState('');

	//functions
	const sendForm = async () => {
		setFormLoader(true);

		if (document === '') {
			toast.error('Document input cannot be empty');
			setFormLoader(false);
			return;
		}

		try {
			let response = await API.payCo.getToken();
			setFormLoader(false);
			history.push({
				pathname: '/invoice',
				state: { token: response.data.token, document }
			});
		} catch (error) {
			console.log(error);
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
						<Ui.TextField
							label="Document"
							className={classes.inputText}
							value={document}
							onChange={(e) => setDocument(e.target.value)}
						/>
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
