import { DydxClient } from '../src';

const dydxClient = new DydxClient('https://validator.v4staging.dydx.exchange');

describe('Markets', () => {
  it('should get market map', async () => {
    const marketMap = await dydxClient.markets.getMarketMap();
    console.log(marketMap);
    expect(marketMap).toBeDefined();
  });
});
