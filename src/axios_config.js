let config =
{
	method: 'get', 
	baseURL: 'http://localhost:17499/',
	validateStatus: function (status) {
	return status >= 200 && status < 600; // default
	},
};

module.exports = config;