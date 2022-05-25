import generateSignature from './generateSignature'
import fetch from 'node-fetch'

export default async function ({body, credentials}) {
  const timestamp = new Date().getTime() / 1000
  const signature = generateSignature({body, timestamp, secretKey: credentials.secretKey})

  try {
    const response = await fetch(credentials.apiUri, {
      method: 'POST',
      headers: {
        'X-ORIONX-TIMESTAMP': timestamp,
        'X-ORIONX-APIKEY': credentials.apiKey,
        'X-ORIONX-SIGNATURE': signature,
        'Content-Type': 'application/json'
      },
      body
    })
    const {data, errors} = await response.json()

    if (errors) throw Error(errors[0].message)

    return data
  } catch (error) {
    throw Error(error.message)
  }
}
