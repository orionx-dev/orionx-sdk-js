import throwCredentialsError from './throwCredentialsError'

export default function() {
  if (!this.credentials) throwCredentialsError('credentials')
  const { apiUri, secretKey, apiKey } = this.credentials
  if (!apiUri) throwCredentialsError('apiUri')
  if (!apiKey) throwCredentialsError('apiKey')
  if (!secretKey) throwCredentialsError('secretKey')
}
