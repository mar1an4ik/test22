export const GRAPHQL_API = "https://test-task.expane.pro/api/graphql";

export const GET_CLIENTS_QUERY = `
      query {
        getClients {
       id
       firstName
       lastName
       phone
       avatarUrl
       }
        }
`;

export const ADD_USER = `
mutation addClient($firstName: String!,$lastName: String!,$phone: String,$avatarUrl: String) {
    addClient(firstName: $firstName,lastName: $lastName,phone: $phone,avatarUrl: $avatarUrl ) {
        firstName
        lastName
        phone
        avatarUrl
    }
}
`
export const UPDATE_USER = `
mutation updateClient($id: ID!,$firstName: String,$lastName: String,$phone: String,$avatarUrl: String) {
    updateClient(id: $id,firstName: $firstName,lastName: $lastName,phone: $phone,avatarUrl: $avatarUrl ) {
        id
        firstName
        lastName
        phone
        avatarUrl
    }
}
`

