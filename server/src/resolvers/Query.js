const { getUserId } = require('../utils/utils');
const Axios = require('axios');
const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const info = () => `This is an info return.`;

// async function vmhosts(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/host`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });

//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

// async function vmnetworks(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/network`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });

//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

// async function vmdatastores(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/datastore`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });


//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

// async function vmfolders(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/folder`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });


//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

// ////////

// async function vms(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/vm`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });

//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

// async function vmdatacenters(parent, args, context, info) {

//   // At Req Level
//   const agent = new https.Agent({
//     rejectUnauthorized: false
//   });

//   var auth_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/com/vmware/cis/session`;
//   var hosts_uri = `${process.env.VMWARE_CARYLAB_URI}/rest/vcenter/datacenter`;
//   // var uname = 'xxx';
//   // var pass = 'xxx';
//   const res = await Axios.post(auth_uri, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });

//   const cookiePieces = res.headers['set-cookie'][0].split(';');
//   const cookie_name = cookiePieces[0].split('=', 2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];
//   const getHosts = await Axios.get(hosts_uri, {
//     httpsAgent: agent,
//     headers: {
//       Cookie: `${cookie_name}=${cookie_value};`
//     }
//   });

//   return getHosts.data["value"];
// }

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
  //const userId = getUserId(context)
  return context.db.query.services({}, info)
};

const service = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.service({
    where: {
      id: args.id
    }
  }, info)
};

const environments = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.environments({}, info)
};

const environment = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.environment({
    where: {
      id: args.id
    }
  }, info)
};

const environmentTenants = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.environmentTenants({}, info)
};

const environmentTenant = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.environmentTenant({
    where: {
      id: args.id
    }
  }, info)
};

const customers = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.customers({}, info)
};

const customer = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.customer({
    where: {
      id: args.id
    }
  }, info)
};

const customerContacts = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.customerContacts({}, info)
};

const customerContact = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.customerContact({
    where: {
      id: args.id
    }
  }, info)
};

const architectureTiers = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureTiers({}, info)
};

const architectureTier = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureTier({
    where: {
      id: args.id
    }
  }, info)
};

const componentTemplates = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentTemplates({}, info)
};

const componentTemplate = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentTemplate({
    where: {
      id: args.id
    }
  }, info)
};

const componentInstances = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentInstances({}, info)
};

const componentInstance = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentInstance({
    where: {
      id: args.id
    }
  }, info)
};

const componentAttributes = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentAttributes({}, info)
};

const componentAttributeById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentAttribute({
    where: {
      id: args.id
    }
  }, info)
};

const componentAttributeByParameter = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.componentAttribute({
    where: {
      parameter: args.parameter
    }
  }, info)
};

const tenantAttributes = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.tenantAttributes({}, info)
};

const tenantAttributeById = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.tenantAttribute({
    where: {
      id: args.id
    }
  }, info)
};

const tenantAttributeByParameter = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.tenantAttribute({
    where: {
      parameter: args.parameter
    }
  }, info)
};

const architectureTypes = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureTypes({}, info)
};

const architectureType = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureType({
    where: {
      id: args.id
    }
  }, info)
};

const architectureDefinitions = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureDefinitions({}, info)
};

const architectureDefinition = async (parent, args, context, info) => {
  //const userId = getUserId(context)
  return context.db.query.architectureDefinition({
    where: {
      id: args.id
    }
  }, info)
};




module.exports = {
  users,
  user,
  tenants,
  tenant,
  services,
  service,
  environments,
  environment,
  environmentTenants,
  environmentTenant,
  customers,
  customer,
  customerContacts,
  customerContact,
  architectureTiers,
  architectureTier,
  componentTemplates,
  componentTemplate,
  componentInstances,
  componentInstance,
  componentAttributes,
  componentAttributeById,
  componentAttributeByParameter,
  tenantAttributes,
  tenantAttributeById,
  tenantAttributeByParameter,
  architectureTypes,
  architectureType,
  architectureDefinitions,
  architectureDefinition
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