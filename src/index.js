import callOrionx from './helpers/callOrionx'
import setCredentials from './setCredentials'
import checkCredentials from './checkCredentials'
import queries from './queries'
import mutations from './mutations'
import gql from 'graphql-tag'

const Orionx = {
  setCredentials,
  getCredentials() {
    return this.credentials
  },
  checkCredentials,
  async graphql({query, variables}) {
    this.checkCredentials()
    if (!query) throw new Error('Missing Query')
    if (!variables) throw new Error('Missing Variables')
    const body = JSON.stringify({query, variables})
    return await callOrionx({body, credentials: this.credentials})
  },
  ...queries,
  ...mutations
}
export default Orionx
