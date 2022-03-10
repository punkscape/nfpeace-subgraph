// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionExtended extends ethereum.Event {
  get params(): AuctionExtended__Params {
    return new AuctionExtended__Params(this);
  }
}

export class AuctionExtended__Params {
  _event: AuctionExtended;

  constructor(event: AuctionExtended) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get endTimestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AuctionInitialised extends ethereum.Event {
  get params(): AuctionInitialised__Params {
    return new AuctionInitialised__Params(this);
  }
}

export class AuctionInitialised__Params {
  _event: AuctionInitialised;

  constructor(event: AuctionInitialised) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class AuctionSettled extends ethereum.Event {
  get params(): AuctionSettled__Params {
    return new AuctionSettled__Params(this);
  }
}

export class AuctionSettled__Params {
  _event: AuctionSettled;

  constructor(event: AuctionSettled) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Bid extends ethereum.Event {
  get params(): Bid__Params {
    return new Bid__Params(this);
  }
}

export class Bid__Params {
  _event: Bid;

  constructor(event: Bid) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NFPeaceV2__getAuctionResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: i32;
  value7: i32;
  value8: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: i32,
    value7: i32,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set(
      "value6",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value6))
    );
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    return map;
  }
}

export class NFPeaceV2 extends ethereum.SmartContract {
  static bind(address: Address): NFPeaceV2 {
    return new NFPeaceV2("NFPeaceV2", address);
  }

  BIDDING_GRACE_PERIOD(): BigInt {
    let result = super.call(
      "BIDDING_GRACE_PERIOD",
      "BIDDING_GRACE_PERIOD():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_BIDDING_GRACE_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BIDDING_GRACE_PERIOD",
      "BIDDING_GRACE_PERIOD():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BID_PERCENTAGE_INCREASE(): BigInt {
    let result = super.call(
      "BID_PERCENTAGE_INCREASE",
      "BID_PERCENTAGE_INCREASE():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_BID_PERCENTAGE_INCREASE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BID_PERCENTAGE_INCREASE",
      "BID_PERCENTAGE_INCREASE():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CHARITY_ADDRESS(): Address {
    let result = super.call(
      "CHARITY_ADDRESS",
      "CHARITY_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_CHARITY_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "CHARITY_ADDRESS",
      "CHARITY_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DEFAULT_STARTING_PRICE(): BigInt {
    let result = super.call(
      "DEFAULT_STARTING_PRICE",
      "DEFAULT_STARTING_PRICE():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_DEFAULT_STARTING_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DEFAULT_STARTING_PRICE",
      "DEFAULT_STARTING_PRICE():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NFPEACE_V1(): Address {
    let result = super.call("NFPEACE_V1", "NFPEACE_V1():(address)", []);

    return result[0].toAddress();
  }

  try_NFPEACE_V1(): ethereum.CallResult<Address> {
    let result = super.tryCall("NFPEACE_V1", "NFPEACE_V1():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  currentBidPrice(auctionId: BigInt): BigInt {
    let result = super.call(
      "currentBidPrice",
      "currentBidPrice(uint64):(uint128)",
      [ethereum.Value.fromUnsignedBigInt(auctionId)]
    );

    return result[0].toBigInt();
  }

  try_currentBidPrice(auctionId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentBidPrice",
      "currentBidPrice(uint64):(uint128)",
      [ethereum.Value.fromUnsignedBigInt(auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAuction(auctionId: BigInt): NFPeaceV2__getAuctionResult {
    let result = super.call(
      "getAuction",
      "getAuction(uint64):(address,uint256,address,uint128,uint64,uint32,uint16,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(auctionId)]
    );

    return new NFPeaceV2__getAuctionResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toI32(),
      result[7].toI32(),
      result[8].toBoolean()
    );
  }

  try_getAuction(
    auctionId: BigInt
  ): ethereum.CallResult<NFPeaceV2__getAuctionResult> {
    let result = super.tryCall(
      "getAuction",
      "getAuction(uint64):(address,uint256,address,uint128,uint64,uint32,uint16,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFPeaceV2__getAuctionResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toI32(),
        value[7].toI32(),
        value[8].toBoolean()
      )
    );
  }

  getBalance(_address: Address): BigInt {
    let result = super.call("getBalance", "getBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBigInt();
  }

  try_getBalance(_address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialAuctionId(): BigInt {
    let result = super.call(
      "initialAuctionId",
      "initialAuctionId():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_initialAuctionId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialAuctionId",
      "initialAuctionId():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextAuctionId(): BigInt {
    let result = super.call("nextAuctionId", "nextAuctionId():(uint64)", []);

    return result[0].toBigInt();
  }

  try_nextAuctionId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextAuctionId", "nextAuctionId():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    from: Address,
    tokenId: BigInt,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    from: Address,
    tokenId: BigInt,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SettleCall extends ethereum.Call {
  get inputs(): SettleCall__Inputs {
    return new SettleCall__Inputs(this);
  }

  get outputs(): SettleCall__Outputs {
    return new SettleCall__Outputs(this);
  }
}

export class SettleCall__Inputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SettleCall__Outputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
