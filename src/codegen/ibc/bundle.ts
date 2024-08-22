import * as _227 from "./applications/transfer/v1/genesis";
import * as _228 from "./applications/transfer/v1/query";
import * as _229 from "./applications/transfer/v1/transfer";
import * as _230 from "./applications/transfer/v1/tx";
import * as _231 from "./applications/transfer/v2/packet";
import * as _232 from "./core/channel/v1/channel";
import * as _233 from "./core/channel/v1/genesis";
import * as _234 from "./core/channel/v1/query";
import * as _235 from "./core/channel/v1/tx";
import * as _236 from "./core/client/v1/client";
import * as _237 from "./core/client/v1/genesis";
import * as _238 from "./core/client/v1/query";
import * as _239 from "./core/client/v1/tx";
import * as _240 from "./core/commitment/v1/commitment";
import * as _241 from "./core/connection/v1/connection";
import * as _242 from "./core/connection/v1/genesis";
import * as _243 from "./core/connection/v1/query";
import * as _244 from "./core/connection/v1/tx";
import * as _245 from "./core/port/v1/query";
import * as _246 from "./core/types/v1/genesis";
import * as _247 from "./lightclients/localhost/v1/localhost";
import * as _248 from "./lightclients/solomachine/v1/solomachine";
import * as _249 from "./lightclients/solomachine/v2/solomachine";
import * as _250 from "./lightclients/tendermint/v1/tendermint";
import * as _460 from "./applications/transfer/v1/tx.amino";
import * as _461 from "./core/channel/v1/tx.amino";
import * as _462 from "./core/client/v1/tx.amino";
import * as _463 from "./core/connection/v1/tx.amino";
import * as _464 from "./applications/transfer/v1/tx.registry";
import * as _465 from "./core/channel/v1/tx.registry";
import * as _466 from "./core/client/v1/tx.registry";
import * as _467 from "./core/connection/v1/tx.registry";
import * as _468 from "./applications/transfer/v1/query.lcd";
import * as _469 from "./core/channel/v1/query.lcd";
import * as _470 from "./core/client/v1/query.lcd";
import * as _471 from "./core/connection/v1/query.lcd";
import * as _472 from "./applications/transfer/v1/query.rpc.Query";
import * as _473 from "./core/channel/v1/query.rpc.Query";
import * as _474 from "./core/client/v1/query.rpc.Query";
import * as _475 from "./core/connection/v1/query.rpc.Query";
import * as _476 from "./core/port/v1/query.rpc.Query";
import * as _477 from "./applications/transfer/v1/tx.rpc.msg";
import * as _478 from "./core/channel/v1/tx.rpc.msg";
import * as _479 from "./core/client/v1/tx.rpc.msg";
import * as _480 from "./core/connection/v1/tx.rpc.msg";
import * as _512 from "./lcd";
import * as _513 from "./rpc.query";
import * as _514 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._227,
        ..._228,
        ..._229,
        ..._230,
        ..._460,
        ..._464,
        ..._468,
        ..._472,
        ..._477
      };
      export const v2 = {
        ..._231
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._232,
        ..._233,
        ..._234,
        ..._235,
        ..._461,
        ..._465,
        ..._469,
        ..._473,
        ..._478
      };
    }
    export namespace client {
      export const v1 = {
        ..._236,
        ..._237,
        ..._238,
        ..._239,
        ..._462,
        ..._466,
        ..._470,
        ..._474,
        ..._479
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._240
      };
    }
    export namespace connection {
      export const v1 = {
        ..._241,
        ..._242,
        ..._243,
        ..._244,
        ..._463,
        ..._467,
        ..._471,
        ..._475,
        ..._480
      };
    }
    export namespace port {
      export const v1 = {
        ..._245,
        ..._476
      };
    }
    export namespace types {
      export const v1 = {
        ..._246
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._247
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._248
      };
      export const v2 = {
        ..._249
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._250
      };
    }
  }
  export const ClientFactory = {
    ..._512,
    ..._513,
    ..._514
  };
}