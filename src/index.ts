import Orionx from './orionx';

export default Orionx;

async function main() {
  const orionx = new Orionx(
    process.env.ORIONX_API_KEY,
    process.env.ORIONX_SECRET_KEY,
    process.env.ORIONX_API_ENDPOINT
  );

  const me = await orionx.user.getMe();
  console.log(me);

  let totalOrders = 10;
  while (totalOrders > 0) {
    const order = await orionx.placeLimitOrder();
    console.log(order);
    totalOrders -= 1;
    if (totalOrders == 0) {
      break;
    }
  }
}

main();
