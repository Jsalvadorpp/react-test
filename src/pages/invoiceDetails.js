import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import API from '../api';
import { toast } from 'react-toastify';

export default function Home(props) {
	const classes = useStyles();

	//states
	const [ bills, setBills ] = useState([]);

	//component did mount
	useEffect(async () => {
		const token = props.location.state.token;
		const document = props.location.state.document;

		try {
			let config = (await API.payCo.getConfig(token)).data;
			let queryBills = (await API.payCo.getBills(token, document)).data;

			console.log(queryBills);
			if (queryBills.success === true) {
				setBills(queryBills.data.bills);
			}
		} catch (error) {
			console.log(error);
			toast.error('Something bad happend');
		}
	});

	//functions

	return (
		<div className={classes.homeWrapper}>
			<h3 className="text-center">Bills List</h3>

			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Value</th>
						<th scope="col">Bill Number</th>
						<th scope="col">Expiration Date</th>
					</tr>
				</thead>
				<tbody>
					{bills.map((bill) => (
						<tr>
							<td>{bill.amountFirst}</td>
							<td>{bill.billId}</td>
							<td>{bill.expirationDateFirst}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
