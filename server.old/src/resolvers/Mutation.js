const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Axios = require('axios');
const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { APP_SECRET, getUserId } = require('../utils/utils');


async function vmlogin(parent, args, { response }, info) {
  // At Req Level
  const agent = new https.Agent({      
    rejectUnauthorized: false
  });
  var session_url = 'https://carpvc01.ca.com/rest/com/vmware/cis/session';
  var uname = 'sprje02.adm@carydev.ca.com';
  var pass = 'ViviP4nts)';
  const res = await Axios.post(session_url, {}, {
    httpsAgent: agent,
    auth: {
      username: uname,
      password: pass
    }
  });

  const { date, expires, connection } = res.headers;
  const cookie = res.headers['set-cookie'][0];
  const cookiePieces = cookie.split(';');
  const cookie_name = cookiePieces[0].split('=',2)[0];
  const cookie_value = cookiePieces[0].split('=', 2)[1];

  console.log(date);
  console.log(expires);
  console.log(connection);
  console.log(cookie);
  console.log(cookie_name);
  console.log(cookie_value);


  response.cookie(cookie_name, cookie_value, { domain: ".carpvc01.ca.com", path: "/rest", httpOnly: true })  




  return res.data.value;
}
  
  // Axios.post(session_url, {}, {
  //   httpsAgent: agent,
  //   auth: {
  //     username: uname,
  //     password: pass
  //   }
  // }).then(function (response) {
  //   console.log('Authenticated');
  //   console.log(response.data);
  //   const value = response.data.value;
  //   console.log(`Value: ${value}`)
  //   return value;
  // }).catch(function (error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //     // http.ClientRequest in node.js
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
  // });




const createTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  console.log(args);

  const tenant = await context.db.mutation.createTenant(
    {
      data: {
        ...args
        }
    },
    info,
  );

  return tenant;
};

const addUserToTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  const tenant = await context.db.mutation.updateTenant(
    {
      data: {
        users: {
          connect: {
            id: args.userId
          }
        }
      },
      where: {
        id: args.tenantId
      }
    },
    info,
  );

  return tenant;
};

const removeUserFromTenant = async (parent, args, context, info) => {
  const userId = getUserId(context)
  const tenant = await context.db.mutation.updateTenant(
    {
      data: {
        users: {
          disconnect: {
            id: args.userId
          }
        }
      },
      where: {
        id: args.tenantId
      }
    },
    info,
  );

  return tenant;
};


async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  // 3
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

  // 3
  return {
    token,
    user,
  }
}

// async function vote(parent, args, context, info) {
//   // 1
//   const userId = getUserId(context)

//   // 2
//   const linkExists = await context.db.exists.Vote({
//     user: { id: userId },
//     link: { id: args.linkId },
//   })
//   if (linkExists) {
//     throw new Error(`Already voted for link: ${args.linkId}`)
//   }

//   // 3
//   return context.db.mutation.createVote(
//     {
//       data: {
//         user: { connect: { id: userId } },
//         link: { connect: { id: args.linkId } },
//       },
//     },
//     info,
//   )
// }

module.exports = {
    signup,
    login,
    createTenant,
    addUserToTenant,
    removeUserFromTenant, 
    vmlogin
}
