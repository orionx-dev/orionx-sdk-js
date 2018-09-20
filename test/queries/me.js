import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'

test.beforeEach(t => {
  setOrionxCredentials()
})

test('Me method returns my _id', async t => {
  try {
    const me = await Orionx.me()
    t.is(me._id, 'wnsTKzpCiTgrdLYkT')
  } catch (e) {
    t.fail(e.message)
  }
})
