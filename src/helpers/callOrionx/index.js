import generateSignature from './generateSignature'
import rp from 'request-promise'

export default async function({body, credentials}) {
  const timestamp = new Date().getTime() / 1000
  const signature = generateSignature({body, timestamp, secretKey: credentials.secretKey})

  try {
    const response = await rp({
      uri: credentials.apiUri,
      method: 'POST',
      headers: {
        'X-ORIONX-TIMESTAMP': timestamp,
        'X-ORIONX-APIKEY': credentials.apiKey,
        'X-ORIONX-SIGNATURE': signature
      },
      body
    })
    const {data, errors} = JSON.parse(response)

    if (errors) throw Error(errors[0].message)

    return data
  } catch (error) {
    throw Error(error.message)
  }
}
