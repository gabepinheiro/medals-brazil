import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''
;('https://api-us-east-1.graphcms.com/v2/cks4qyqmb05c201yx80qze8gd/master')

const client = new GraphQLClient(endpoint, {
  headers: {
    authorrization: `Bearer ${process.env.GRAPGQL_TOKEN}`
  }
})

export default client
