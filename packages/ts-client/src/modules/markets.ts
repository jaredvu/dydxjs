import { slinky } from 'dydxjs';
import { Tendermint37Client } from '@cosmjs/tendermint-rpc';
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

export default class Markets {
  readonly host: string;

  constructor(
    host: string,
  ) {
    this.host = host;
  }

  /**
   * @description get market map entries
   */
  async getMarketMap() {
    const tmClient = await Tendermint37Client.connect(this.host)
    const QueryClientImpl = slinky.marketmap.v1.QueryClientImpl;
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    const queryService = new QueryClientImpl(rpc);

    return queryService.marketMap({});
  }
}
