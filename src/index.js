import '@babel/polyfill'
import callOrionx from './helpers/callOrionx'
import gql from 'graphql-tag'
import queries from './queries'

const Orionx = {
  setCredentials: function({apiKey, secretKey, apiUri}) {
    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql'
    if (!apiKey) throw new Error('Missing apiKey')
    if (!secretKey) throw new Error('Missing secretKey')
    this.credentials = {apiKey, secretKey, apiUri}
  },
  getCredentials() {
    return this.credentials
  },
  async graphql({query, variables}) {
    if (!query) throw new Error('Missing Query')
    if (!variables) throw new Error('Missing Variables')
    const body = JSON.stringify({query, variables})
    return await callOrionx({body, credentials: this.credentials})
  },
  async query({schema, variables}) {
    const query = gql`query ${schema}`
    return await this.graphql({query: query, variables})
  },
  async mutation({schema, params}) {
    const query = gql`mutation ${schema}`
    await this.graphql({query, variables})
  },
  ...queries
}
export default Orionx
