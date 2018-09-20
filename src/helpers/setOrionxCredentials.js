require('dotenv').config()
import Orionx from '../index'

export default () => {
  Orionx.setCredentials({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY
  })
}
