const { getUserId } = require('../utils/utils');
const Axios = require('axios');
const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const info = () => `This is an info return.`;

async function vmhosts(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/host`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });

  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

async function vmnetworks(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/network`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });

  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

async function vmdatastores(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/datastore`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });


  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

async function vmfolders(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/folder`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });


  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

////////

async function vms(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/vm`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });

  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

async function vmdatacenters(parent, args, context, info) {

  // At Req Level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
  var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/datacenter`;
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(auth_uri, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });

  const cookiePieces = res.headers['set-cookie'][0].split(';');
  const cookie_name = cookiePieces[0].split('=', 2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];
  const getHosts = await Axios.get(hosts_uri, {
    httpsAgent: agent,
    headers: {
      Cookie: `${cookie_name}=${cookie_value};`
    }
  });

  return getHosts.data["value"];
}

const users = async ( parent, args, context, info) => {
  const userId = getUserId(context)
  return context.db.query.users({}, info)
};

const user = async ( parent, args, context, info ) => {
  const userId = getUserId(context)
  return context.db.query.user({ where: {
    id: args.id
  }}, info)
};

const tenants = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.db.query.tenants({}, info)
};

const tenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.db.query.tenant({
    where: {
      id: args.id
    }
  }, info)
};

const services = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.db.query.services({}, info)
};

const service = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.db.query.service({
    where: {
      id: args.id
    }
  }, info)
};

  
  // const where = args.filter
  // ? {
  //     OR: [
  //       { url_contains: args.filter },
  //       { description_contains: args.filter },
  //     ],
  //   }
  // : {}

/*
//   const queriedLinks = await context.db.query.links(
//     { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
//     `{ id }`,
//   )


//   // 2
//   const countSelectionSet = `
//     {
//       aggregate {
//         count
//       }
//     }
//   `

//   const linksConnection = await context.db.query.linksConnection({}, countSelectionSet)

//   // 3
//   return {
//     count: linksConnection.aggregate.count,
//     linkIds: queriedLinks.map(link => link.id),
//   }*/
// }

module.exports = {
  users,
  user,
  services,
  service,
  tenants,
  tenant,
  vmhosts,
  vms, 
  vmnetworks,
  vmdatacenters, 
  vmdatastores,
  vmfolders

}



// Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   }).then(function (response) {
//     console.log(response.data);
//     const value = response.data
//     console.log(`Value: ${value}`)
//     return value;
//   }).catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
//   });