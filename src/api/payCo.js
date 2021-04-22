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

const payCo = {
	getToken,
	getConfig
};
export default payCo;
