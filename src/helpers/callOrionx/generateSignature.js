import JSSHA from 'jssha'

export default ({body, timestamp, secretKey}) => {
  const shaObj = new JSSHA('SHA-512', 'TEXT')
  shaObj.setHMACKey(secretKey, 'TEXT')
  shaObj.update(timestamp + body)
  return shaObj.getHMAC('HEX')
}
