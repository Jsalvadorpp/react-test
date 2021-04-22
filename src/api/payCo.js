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

const payCo = {
	getToken
};
export default payCo;
