const timeout = ms => new Promise(res => setTimeout(res, ms))

export default async function delay() {
  await timeout(1000)
}
