import '@babel/polyfill'
import callOrionx from './helpers/callOrionx'

const Orionx = {
  setCredentials: function({apiKey, secret, secretUri}) {
    if (!secretUri) secretUri = 'https://api2.orionx.io/graphql'
    if (!apiKey) throw new Error('Missing apiKey')
    if (!secret) throw new Error('Missing secretApiKey')
    this.credentials = {apiKey, secret, secretUri}
  },
  getCredentials() {
    return this.credentials
  },
  async graphql({query, variables}) {
    if (!query) throw new Error('Missing Query')
    if (!variables) throw new Error('Missing Variables')
    const body = {query, variables}
    return await callOrionx({body, credentials: this.credentials})
  },
  async query({schema, params}) {
    const query = gql`query ${schema}`
    const variables = params
    await this.graphql({query, variables})
  },
  async mutation({schema, params}) {
    const query = gql`mutation ${schema}`
    const variables = params
    await this.graphql({query, variables})
  },
  // Asi lo haría yo
  ...queries(params),
  ...mutations(params)
}

export default Orionx
