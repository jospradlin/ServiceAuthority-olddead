// mutation {
//   login(
//     email: "sarah@graph.cool"
//     password: "graphql"
//   ) {
//     token
//     user {
//       id
//       name
//       links {
//         url
//         description
//       }
//     }
//   }
// }

function memory_size(root, args, context, info) {
  return root.memory_size_MiB;
}

module.exports = { memory_size }
