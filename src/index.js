import '@babel/polyfill'
import callOrionx from './helpers/callOrionx'

const Orionx = {
  credentials: {
    apiKey: '',
    secretApiKey: '',
    apiUrl: 'https://api2.orionx.io/graphql'
  },
  config({apiKey, secretApiKey, apiUrl}) {
    if (!apiKey) {
      throw new Error('Missing apiKey')
    }
    if (!secretApiKey) {
      throw new Error('Missing secretApiKey')
    }
    this.credentials.apiKey = apiKey
    this.credentials.secretApiKey = secretApiKey
    if (apiUrl) {
      this.apiUrl = apiUrl
    }
  },
  async send({query, variables}) {
    if (!query) throw new Error('Missing Query')
    if (!variables) throw new Error('Missing Variables')
    const body = {query, variables}
    return await callOrionx({body, credentials: this.credentials})
  }
}
export default Orionx
