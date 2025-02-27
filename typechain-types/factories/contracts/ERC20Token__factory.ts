/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ERC20Token,
  ERC20TokenInterface,
} from "../../contracts/ERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c9e38038062000c9e8339810160408190526200003491620002ba565b82826003620000448382620003bc565b506004620000538282620003bc565b5050600580546001600160a01b031916339081179091556200007791508262000080565b505050620004b0565b6001600160a01b038216620000b05760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000be60008383620000c2565b5050565b6001600160a01b038316620000f1578060026000828254620000e5919062000488565b90915550620001659050565b6001600160a01b03831660009081526020819052604090205481811015620001465760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000a7565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200018357600280548290039055620001a2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e891815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021d57600080fd5b81516001600160401b03808211156200023a576200023a620001f5565b604051601f8301601f19908116603f01168101908282118183101715620002655762000265620001f5565b816040528381526020925086838588010111156200028257600080fd5b600091505b83821015620002a6578582018301518183018401529082019062000287565b600093810190920192909252949350505050565b600080600060608486031215620002d057600080fd5b83516001600160401b0380821115620002e857600080fd5b620002f6878388016200020b565b945060208601519150808211156200030d57600080fd5b506200031c868287016200020b565b925050604084015190509250925092565b600181811c908216806200034257607f821691505b6020821081036200036357634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003b757600081815260208120601f850160051c81016020861015620003925750805b601f850160051c820191505b81811015620003b3578281556001016200039e565b5050505b505050565b81516001600160401b03811115620003d857620003d8620001f5565b620003f081620003e984546200032d565b8462000369565b602080601f8311600181146200042857600084156200040f5750858301515b600019600386901b1c1916600185901b178555620003b3565b600085815260208120601f198616915b82811015620004595788860151825594840194600190910190840162000438565b5085821015620004785787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004aa57634e487b7160e01b600052601160045260246000fd5b92915050565b6107de80620004c06000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461012357806370a08231146101385780638da5cb5b1461016157806395d89b411461018c578063a9059cbb14610194578063dd62ed3e146101a757600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101e0565b6040516100c39190610628565b60405180910390f35b6100df6100da366004610692565b610272565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f3660046106bc565b61028c565b604051601281526020016100c3565b610136610131366004610692565b6102b0565b005b6100f36101463660046106f8565b6001600160a01b031660009081526020819052604090205490565b600554610174906001600160a01b031681565b6040516001600160a01b0390911681526020016100c3565b6100b6610321565b6100df6101a2366004610692565b610330565b6100f36101b536600461071a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101ef9061074d565b80601f016020809104026020016040519081016040528092919081815260200182805461021b9061074d565b80156102685780601f1061023d57610100808354040283529160200191610268565b820191906000526020600020905b81548152906001019060200180831161024b57829003601f168201915b5050505050905090565b60003361028081858561033e565b60019150505b92915050565b60003361029a85828561034b565b6102a58585856103ca565b506001949350505050565b6005546001600160a01b031633146103055760405162461bcd60e51b815260206004820152601360248201527213db9b1e481bdddb995c8818d85b881b5a5b9d606a1b60448201526064015b60405180910390fd5b60055461031c906001600160a01b0316838361028c565b505050565b6060600480546101ef9061074d565b6000336102808185856103ca565b61031c8383836001610429565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156103c457818110156103b557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016102fc565b6103c484848484036000610429565b50505050565b6001600160a01b0383166103f457604051634b637e8f60e11b8152600060048201526024016102fc565b6001600160a01b03821661041e5760405163ec442f0560e01b8152600060048201526024016102fc565b61031c8383836104fe565b6001600160a01b0384166104535760405163e602df0560e01b8152600060048201526024016102fc565b6001600160a01b03831661047d57604051634a1406b160e11b8152600060048201526024016102fc565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156103c457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104f091815260200190565b60405180910390a350505050565b6001600160a01b03831661052957806002600082825461051e9190610787565b9091555061059b9050565b6001600160a01b0383166000908152602081905260409020548181101561057c5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102fc565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105b7576002805482900390556105d6565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161061b91815260200190565b60405180910390a3505050565b600060208083528351808285015260005b8181101561065557858101830151858201604001528201610639565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461068d57600080fd5b919050565b600080604083850312156106a557600080fd5b6106ae83610676565b946020939093013593505050565b6000806000606084860312156106d157600080fd5b6106da84610676565b92506106e860208501610676565b9150604084013590509250925092565b60006020828403121561070a57600080fd5b61071382610676565b9392505050565b6000806040838503121561072d57600080fd5b61073683610676565b915061074460208401610676565b90509250929050565b600181811c9082168061076157607f821691505b60208210810361078157634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561028657634e487b7160e01b600052601160045260246000fdfea2646970667358221220b9c21804097ccb62d1d6df070867c160a021d36a3ff4959a5bb0a01bc5f5350664736f6c63430008140033";

type ERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Token__factory extends ContractFactory {
  constructor(...args: ERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  override deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<
      ERC20Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20Token__factory {
    return super.connect(runner) as ERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TokenInterface {
    return new Interface(_abi) as ERC20TokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20Token {
    return new Contract(address, _abi, runner) as unknown as ERC20Token;
  }
}
