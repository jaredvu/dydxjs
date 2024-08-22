import * as _251 from "./abci/v1/vote_extensions";
import * as _252 from "./alerts/module/v1/module";
import * as _253 from "./alerts/v1/alerts";
import * as _254 from "./alerts/v1/genesis";
import * as _255 from "./alerts/v1/query";
import * as _256 from "./alerts/v1/strategies";
import * as _257 from "./alerts/v1/tx";
import * as _258 from "./incentives/module/v1/module";
import * as _259 from "./incentives/v1/examples/badprice";
import * as _260 from "./incentives/v1/examples/goodprice";
import * as _261 from "./incentives/v1/genesis";
import * as _262 from "./incentives/v1/query";
import * as _263 from "./marketmap/module/v1/module";
import * as _264 from "./marketmap/v1/genesis";
import * as _265 from "./marketmap/v1/market";
import * as _266 from "./marketmap/v1/params";
import * as _267 from "./marketmap/v1/query";
import * as _268 from "./marketmap/v1/tx";
import * as _269 from "./oracle/module/v1/module";
import * as _270 from "./oracle/v1/genesis";
import * as _271 from "./oracle/v1/query";
import * as _272 from "./oracle/v1/tx";
import * as _273 from "./service/v1/oracle";
import * as _274 from "./sla/module/v1/module";
import * as _275 from "./sla/v1/genesis";
import * as _276 from "./sla/v1/query";
import * as _277 from "./sla/v1/tx";
import * as _278 from "./types/v1/currency_pair";
import * as _481 from "./alerts/v1/tx.amino";
import * as _482 from "./marketmap/v1/tx.amino";
import * as _483 from "./oracle/v1/tx.amino";
import * as _484 from "./sla/v1/tx.amino";
import * as _485 from "./alerts/v1/tx.registry";
import * as _486 from "./marketmap/v1/tx.registry";
import * as _487 from "./oracle/v1/tx.registry";
import * as _488 from "./sla/v1/tx.registry";
import * as _489 from "./alerts/v1/query.lcd";
import * as _490 from "./incentives/v1/query.lcd";
import * as _491 from "./marketmap/v1/query.lcd";
import * as _492 from "./oracle/v1/query.lcd";
import * as _493 from "./sla/v1/query.lcd";
import * as _494 from "./alerts/v1/query.rpc.Query";
import * as _495 from "./incentives/v1/query.rpc.Query";
import * as _496 from "./marketmap/v1/query.rpc.Query";
import * as _497 from "./oracle/v1/query.rpc.Query";
import * as _498 from "./sla/v1/query.rpc.Query";
import * as _499 from "./alerts/v1/tx.rpc.msg";
import * as _500 from "./marketmap/v1/tx.rpc.msg";
import * as _501 from "./oracle/v1/tx.rpc.msg";
import * as _502 from "./sla/v1/tx.rpc.msg";
import * as _515 from "./lcd";
import * as _516 from "./rpc.query";
import * as _517 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._251
    };
  }
  export namespace alerts {
    export namespace module {
      export const v1 = {
        ..._252
      };
    }
    export const v1 = {
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._481,
      ..._485,
      ..._489,
      ..._494,
      ..._499
    };
  }
  export namespace incentives {
    export namespace module {
      export const v1 = {
        ..._258
      };
    }
    export const v1 = {
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._490,
      ..._495
    };
  }
  export namespace marketmap {
    export namespace module {
      export const v1 = {
        ..._263
      };
    }
    export const v1 = {
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._482,
      ..._486,
      ..._491,
      ..._496,
      ..._500
    };
  }
  export namespace oracle {
    export namespace module {
      export const v1 = {
        ..._269
      };
    }
    export const v1 = {
      ..._270,
      ..._271,
      ..._272,
      ..._483,
      ..._487,
      ..._492,
      ..._497,
      ..._501
    };
  }
  export namespace service {
    export const v1 = {
      ..._273
    };
  }
  export namespace sla {
    export namespace module {
      export const v1 = {
        ..._274
      };
    }
    export const v1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._484,
      ..._488,
      ..._493,
      ..._498,
      ..._502
    };
  }
  export namespace types {
    export const v1 = {
      ..._278
    };
  }
  export const ClientFactory = {
    ..._515,
    ..._516,
    ..._517
  };
}