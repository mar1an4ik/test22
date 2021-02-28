import * as Constants from "./constants"
import {GraphQLClient, request} from "graphql-request";


export const getClients = async () => {
    try {
        const users = await request(
            Constants.GRAPHQL_API,
            Constants.GET_CLIENTS_QUERY,
        )
        return users;
    } catch (error) {
        alert(error)
    }
}

export const addClient = async (firstName: string, lastName: string, phone: string | null = null, avatarUrl: string | null = null) => {
    try {
        const graphQLClient = new GraphQLClient(Constants.GRAPHQL_API)
        const variables = {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            avatarUrl: avatarUrl,
        }
        await graphQLClient.request(Constants.ADD_USER, variables)
        console.log("Succes")
    } catch (error) {
        alert(error)
    }
}


export const updateClient = async (id: number, firstName: string, lastName: string, phone: string | null = null, avatarUrl: string | null = null) => {
    try {
        const graphQLClient = new GraphQLClient(Constants.GRAPHQL_API)
        const variables = {
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "avatarUrl": avatarUrl,
        }
        await graphQLClient.request(Constants.UPDATE_USER, variables)
        console.log("Succes")
    } catch (error) {
        alert(error)
    }
}









