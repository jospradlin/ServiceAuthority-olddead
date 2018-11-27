const Axios = require('axios');

function vmlogin(parent, args, context, info) {
  const session_url = 'https://carpvc01.ca.com/rest/com/vmware/cis/session';
  const uname = 'sprje02.adm@carydev.ca.com';
  const pass = 'ViviP4nts)';
 
 
  return 'Test Value';
 
  // Axios.post(session_url, {}, {
  //   auth: {
  //     username: uname,
  //     password: pass
  //   }
  // }).then(function (response) {
  //   console.log('Authenticated');
  //   console.log(response.data);
  //   return response.data.value;
  // }).catch(function (error) {
  //   console.log(`Error: ${error}`);
  // });


  
}

module.exports = {
  vmlogin,
}
