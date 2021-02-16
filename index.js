var axios = require('axios');
var data = JSON.stringify({"user":"BankinUser","password":"12345678"});
var qs = require('qs');
const { strict } = require('yargs');

var config = {
  method: 'post',
  url: 'http://localhost:3000/login',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic QmFua2luQ2xpZW50SWQ6c2VjcmV0'
  },
  data : data
};

var config_token = {
	method: 'post',
	url: 'http://localhost:3000/token',
	headers: { 
	  'Content-Type': 'application/x-www-form-urlencoded'
	},
	data : data
  };

function axiosToken(){
	axios(config)
    .then(function (response) {
       console.log(JSON.stringify(response.data.refresh_token));
       return(refresh_token = JSON.stringify(response.data))
})
.catch(function (error) {
    console.log(error);
});
}

function axiosBearer(data){
	var config_token = {
		method: 'post',
		url: 'http://localhost:3000/token',
		headers: { 
		  'Content-Type': 'application/x-www-form-urlencoded'
		},
		data : data
	  };
	axios(config_token)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}




var refresh_tok = axiosToken()

var data_token =({
	'grant_type': 'refresh_token',
	'refresh_token':refresh_tok,
});
console.log(data_token)
// axiosBearer(JSON.stringify(data_token))

