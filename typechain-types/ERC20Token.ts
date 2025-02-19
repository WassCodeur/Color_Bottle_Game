/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ERC20TokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "Allowaance"
      | "Approve"
      | "TotalSupply"
      | "Transfer"
      | "TransferFrom"
      | "_owner"
      | "balanceOf"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Approved" | "Transfered"): EventFragment;

  encodeFunctionData(
    functionFragment: "Allowaance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "Approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "TotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "TransferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "Allowaance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
}

export namespace ApprovedEvent {
  export type InputTuple = [spender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [spender: string, amount: bigint];
  export interface OutputObject {
    spender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferedEvent {
  export type InputTuple = [
    to: AddressLike,
    from: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [to: string, from: string, amount: bigint];
  export interface OutputObject {
    to: string;
    from: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ERC20Token extends BaseContract {
  connect(runner?: ContractRunner | null): ERC20Token;
  waitForDeployment(): Promise<this>;

  interface: ERC20TokenInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  Allowaance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  Approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  TotalSupply: TypedContractMethod<[], [bigint], "view">;

  Transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  TransferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  _owner: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "Allowaance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "Approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "TotalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "Transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "TransferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  getEvent(
    key: "Approved"
  ): TypedContractEvent<
    ApprovedEvent.InputTuple,
    ApprovedEvent.OutputTuple,
    ApprovedEvent.OutputObject
  >;
  getEvent(
    key: "Transfered"
  ): TypedContractEvent<
    TransferedEvent.InputTuple,
    TransferedEvent.OutputTuple,
    TransferedEvent.OutputObject
  >;

  filters: {
    "Approved(address,uint256)": TypedContractEvent<
      ApprovedEvent.InputTuple,
      ApprovedEvent.OutputTuple,
      ApprovedEvent.OutputObject
    >;
    Approved: TypedContractEvent<
      ApprovedEvent.InputTuple,
      ApprovedEvent.OutputTuple,
      ApprovedEvent.OutputObject
    >;

    "Transfered(address,address,uint256)": TypedContractEvent<
      TransferedEvent.InputTuple,
      TransferedEvent.OutputTuple,
      TransferedEvent.OutputObject
    >;
    Transfered: TypedContractEvent<
      TransferedEvent.InputTuple,
      TransferedEvent.OutputTuple,
      TransferedEvent.OutputObject
    >;
  };
}
