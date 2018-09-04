import JSSHA from 'jssha'

export default ({body, timestamp, apiSecretKey}) => {
  const shaObj = new JSSHA('SHA-512', 'TEXT')
  shaObj.setHMACKey(apiSecretKey, 'TEXT')
  shaObj.update(timestamp + body)
  return shaObj.getHMAC('HEX')
}
