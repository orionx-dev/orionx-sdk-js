import callOrionx from './helpers/callOrionx'
import gql from 'graphql-tag'
import queries from './queries'
import mutations from './mutations'

const throwCredentialsError = param => {
  throw new Error(
    `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`
  )
}
const Orionx = {
  setCredentials: function({apiKey, secretKey, apiUri}) {
    if (!apiKey) throwCredentialsError('apiKey')
    if (!secretKey) throwCredentialsError('secretKey')
    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql/'
    this.credentials = {apiKey, secretKey, apiUri}
  },
  getCredentials() {
    return this.credentials
  },
  checkCredentials() {
    if (!this.credentials) throwCredentialsError('credentials')
    const {apiKey, secretKey, apiUri} = this.credentials
    if (!apiKey) throwCredentialsError('apiKey')
    if (!secretKey) throwCredentialsError('secretKey')
    if (!apiUri) throwCredentialsError('apiUri')
  },
  async graphql({query, variables}) {
    this.checkCredentials()
    if (!query) throw new Error('Missing Query')
    if (!variables) throw new Error('Missing Variables')
    const body = JSON.stringify({query, variables})
    return await callOrionx({body, credentials: this.credentials})
  },
  query({schema, variables}) {
    const query = gql`query ${schema}`
    return this.graphql({query: query, variables})
  },
  mutation({schema, params}) {
    const query = gql`mutation ${schema}`
    return this.graphql({query, variables})
  },
  ...queries,
  ...mutations
}
export default Orionx
