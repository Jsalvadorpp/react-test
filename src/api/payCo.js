import axios from 'axios';

const getToken = async () => {
	return await axios.post(
		'https://apify.epayco.co/login/mail',
		{},
		{
			auth: {
				username: 'pruebafront@payco.co',
				password: 'pruebafront$2020'
			}
		}
	);
};

const getConfig = async (token) => {
	return await axios.post(
		'https://apify.epayco.co//billcollect/proyect/config/consult',
		{
			projectId: 29
		},
		{
			headers: { Authorization: `Bearer ${token}` }
		}
	);
};

const getBills = async (token, document) => {
	return await axios.post(
		'https://apify.epayco.co/billcollect/invoices/consult',
		{
			projectId: 29,
			document
		},
		{
			headers: { Authorization: `Bearer ${token}` }
		}
	);
};

const payCo = {
	getToken,
	getConfig,
	getBills
};
export default payCo;
