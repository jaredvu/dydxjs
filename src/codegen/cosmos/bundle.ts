import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _68 from "./msg/v1/msg";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _290 from "./authz/v1beta1/tx.amino";
import * as _291 from "./bank/v1beta1/tx.amino";
import * as _292 from "./crisis/v1beta1/tx.amino";
import * as _293 from "./distribution/v1beta1/tx.amino";
import * as _294 from "./evidence/v1beta1/tx.amino";
import * as _295 from "./feegrant/v1beta1/tx.amino";
import * as _296 from "./gov/v1/tx.amino";
import * as _297 from "./gov/v1beta1/tx.amino";
import * as _298 from "./group/v1/tx.amino";
import * as _299 from "./nft/v1beta1/tx.amino";
import * as _300 from "./slashing/v1beta1/tx.amino";
import * as _301 from "./staking/v1beta1/tx.amino";
import * as _302 from "./upgrade/v1beta1/tx.amino";
import * as _303 from "./vesting/v1beta1/tx.amino";
import * as _304 from "./authz/v1beta1/tx.registry";
import * as _305 from "./bank/v1beta1/tx.registry";
import * as _306 from "./crisis/v1beta1/tx.registry";
import * as _307 from "./distribution/v1beta1/tx.registry";
import * as _308 from "./evidence/v1beta1/tx.registry";
import * as _309 from "./feegrant/v1beta1/tx.registry";
import * as _310 from "./gov/v1/tx.registry";
import * as _311 from "./gov/v1beta1/tx.registry";
import * as _312 from "./group/v1/tx.registry";
import * as _313 from "./nft/v1beta1/tx.registry";
import * as _314 from "./slashing/v1beta1/tx.registry";
import * as _315 from "./staking/v1beta1/tx.registry";
import * as _316 from "./upgrade/v1beta1/tx.registry";
import * as _317 from "./vesting/v1beta1/tx.registry";
import * as _318 from "./auth/v1beta1/query.lcd";
import * as _319 from "./authz/v1beta1/query.lcd";
import * as _320 from "./bank/v1beta1/query.lcd";
import * as _321 from "./base/tendermint/v1beta1/query.lcd";
import * as _322 from "./distribution/v1beta1/query.lcd";
import * as _323 from "./evidence/v1beta1/query.lcd";
import * as _324 from "./feegrant/v1beta1/query.lcd";
import * as _325 from "./gov/v1/query.lcd";
import * as _326 from "./gov/v1beta1/query.lcd";
import * as _327 from "./group/v1/query.lcd";
import * as _328 from "./mint/v1beta1/query.lcd";
import * as _329 from "./nft/v1beta1/query.lcd";
import * as _330 from "./params/v1beta1/query.lcd";
import * as _331 from "./slashing/v1beta1/query.lcd";
import * as _332 from "./staking/v1beta1/query.lcd";
import * as _333 from "./tx/v1beta1/service.lcd";
import * as _334 from "./upgrade/v1beta1/query.lcd";
import * as _335 from "./app/v1alpha1/query.rpc.Query";
import * as _336 from "./auth/v1beta1/query.rpc.Query";
import * as _337 from "./authz/v1beta1/query.rpc.Query";
import * as _338 from "./bank/v1beta1/query.rpc.Query";
import * as _339 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _340 from "./distribution/v1beta1/query.rpc.Query";
import * as _341 from "./evidence/v1beta1/query.rpc.Query";
import * as _342 from "./feegrant/v1beta1/query.rpc.Query";
import * as _343 from "./gov/v1/query.rpc.Query";
import * as _344 from "./gov/v1beta1/query.rpc.Query";
import * as _345 from "./group/v1/query.rpc.Query";
import * as _346 from "./mint/v1beta1/query.rpc.Query";
import * as _347 from "./nft/v1beta1/query.rpc.Query";
import * as _348 from "./params/v1beta1/query.rpc.Query";
import * as _349 from "./slashing/v1beta1/query.rpc.Query";
import * as _350 from "./staking/v1beta1/query.rpc.Query";
import * as _351 from "./tx/v1beta1/service.rpc.Service";
import * as _352 from "./upgrade/v1beta1/query.rpc.Query";
import * as _353 from "./authz/v1beta1/tx.rpc.msg";
import * as _354 from "./bank/v1beta1/tx.rpc.msg";
import * as _355 from "./crisis/v1beta1/tx.rpc.msg";
import * as _356 from "./distribution/v1beta1/tx.rpc.msg";
import * as _357 from "./evidence/v1beta1/tx.rpc.msg";
import * as _358 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _359 from "./gov/v1/tx.rpc.msg";
import * as _360 from "./gov/v1beta1/tx.rpc.msg";
import * as _361 from "./group/v1/tx.rpc.msg";
import * as _362 from "./nft/v1beta1/tx.rpc.msg";
import * as _363 from "./slashing/v1beta1/tx.rpc.msg";
import * as _364 from "./staking/v1beta1/tx.rpc.msg";
import * as _365 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _366 from "./vesting/v1beta1/tx.rpc.msg";
import * as _503 from "./lcd";
import * as _504 from "./rpc.query";
import * as _505 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._335
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._318,
      ..._336
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._290,
      ..._304,
      ..._319,
      ..._337,
      ..._353
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._291,
      ..._305,
      ..._320,
      ..._338,
      ..._354
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._22
      };
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._25,
        ..._26
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._27,
        ..._321,
        ..._339
      };
    }
    export const v1beta1 = {
      ..._28
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._292,
      ..._306,
      ..._355
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._293,
      ..._307,
      ..._322,
      ..._340,
      ..._356
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._294,
      ..._308,
      ..._323,
      ..._341,
      ..._357
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._295,
      ..._309,
      ..._324,
      ..._342,
      ..._358
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace gov {
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._296,
      ..._310,
      ..._325,
      ..._343,
      ..._359
    };
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._297,
      ..._311,
      ..._326,
      ..._344,
      ..._360
    };
  }
  export namespace group {
    export const v1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._298,
      ..._312,
      ..._327,
      ..._345,
      ..._361
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._328,
      ..._346
    };
  }
  export namespace msg {
    export const v1 = {
      ..._68
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._299,
      ..._313,
      ..._329,
      ..._347,
      ..._362
    };
  }
  export namespace orm {
    export const v1 = {
      ..._74
    };
    export const v1alpha1 = {
      ..._75
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._330,
      ..._348
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._300,
      ..._314,
      ..._331,
      ..._349,
      ..._363
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._301,
      ..._315,
      ..._332,
      ..._350,
      ..._364
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._333,
      ..._351
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._302,
      ..._316,
      ..._334,
      ..._352,
      ..._365
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._303,
      ..._317,
      ..._366
    };
  }
  export const ClientFactory = {
    ..._503,
    ..._504,
    ..._505
  };
}