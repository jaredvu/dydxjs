//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { AffiliateInfoRequest, AffiliateInfoResponse, ReferredByRequest, ReferredByResponse, AllAffiliateTiersRequest, AllAffiliateTiersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Query AffiliateInfo returns the affiliate info for a given address. */
  affiliateInfo(request: AffiliateInfoRequest): Promise<AffiliateInfoResponse>;
  /** Query ReferredBy returns the affiliate that referred a given address. */
  referredBy(request: ReferredByRequest): Promise<ReferredByResponse>;
  /** Query AllAffiliateTiers returns all affiliate tiers. */
  allAffiliateTiers(request?: AllAffiliateTiersRequest): Promise<AllAffiliateTiersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.affiliateInfo = this.affiliateInfo.bind(this);
    this.referredBy = this.referredBy.bind(this);
    this.allAffiliateTiers = this.allAffiliateTiers.bind(this);
  }
  affiliateInfo(request: AffiliateInfoRequest): Promise<AffiliateInfoResponse> {
    const data = AffiliateInfoRequest.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Query", "AffiliateInfo", data);
    return promise.then(data => AffiliateInfoResponse.decode(new BinaryReader(data)));
  }
  referredBy(request: ReferredByRequest): Promise<ReferredByResponse> {
    const data = ReferredByRequest.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Query", "ReferredBy", data);
    return promise.then(data => ReferredByResponse.decode(new BinaryReader(data)));
  }
  allAffiliateTiers(request: AllAffiliateTiersRequest = {}): Promise<AllAffiliateTiersResponse> {
    const data = AllAffiliateTiersRequest.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Query", "AllAffiliateTiers", data);
    return promise.then(data => AllAffiliateTiersResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    affiliateInfo(request: AffiliateInfoRequest): Promise<AffiliateInfoResponse> {
      return queryService.affiliateInfo(request);
    },
    referredBy(request: ReferredByRequest): Promise<ReferredByResponse> {
      return queryService.referredBy(request);
    },
    allAffiliateTiers(request?: AllAffiliateTiersRequest): Promise<AllAffiliateTiersResponse> {
      return queryService.allAffiliateTiers(request);
    }
  };
};