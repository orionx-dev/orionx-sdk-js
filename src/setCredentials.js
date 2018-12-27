import throwCredentialsError from './throwCredentialsError'

export default function({ apiKey, secretKey, apiUri }) {
	if (!apiKey) throwCredentialsError('apiKey')
	if (!secretKey) throwCredentialsError('secretKey')
	if (!apiUri) apiUri = 'https://api2.orionx.io/graphql/'
	this.credentials = { apiKey, secretKey, apiUri }
}
