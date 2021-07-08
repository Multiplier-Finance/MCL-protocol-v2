/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VariableDebtToken } from "../VariableDebtToken";

export class VariableDebtToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pool: string,
    underlyingAsset: string,
    name: string,
    symbol: string,
    incentivesController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VariableDebtToken> {
    return super.deploy(
      pool,
      underlyingAsset,
      name,
      symbol,
      incentivesController,
      overrides || {}
    ) as Promise<VariableDebtToken>;
  }
  getDeployTransaction(
    pool: string,
    underlyingAsset: string,
    name: string,
    symbol: string,
    incentivesController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pool,
      underlyingAsset,
      name,
      symbol,
      incentivesController,
      overrides || {}
    );
  }
  attach(address: string): VariableDebtToken {
    return super.attach(address) as VariableDebtToken;
  }
  connect(signer: Signer): VariableDebtToken__factory {
    return super.connect(signer) as VariableDebtToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VariableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as VariableDebtToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
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
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "fromUser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BorrowAllowanceDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "debtTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "debtTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
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
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
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
    inputs: [],
    name: "DEBT_TOKEN_REVISION",
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
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
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
        name: "amount",
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
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
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
    inputs: [
      {
        internalType: "address",
        name: "fromUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "toUser",
        type: "address",
      },
    ],
    name: "borrowAllowance",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "getIncentivesController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
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
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    name: "scaledTotalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
];

const _bytecode =
  "0x60e060405260006006553480156200001657600080fd5b5060405162001bf238038062001bf2833981810160405260a08110156200003c57600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006857600080fd5b9083019060208201858111156200007e57600080fd5b82516401000000008111828201881017156200009957600080fd5b82525081516020918201929091019080838360005b83811015620000c8578181015183820152602001620000ae565b50505050905090810190601f168015620000f65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011a57600080fd5b9083019060208201858111156200013057600080fd5b82516401000000008111828201881017156200014b57600080fd5b82525081516020918201929091019080838360005b838110156200017a57818101518382015260200162000160565b50505050905090810190601f168015620001a85780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190505050848484848482826012838360039080519060200190620001de92919062000241565b508251620001f490600490602086019062000241565b506005805460ff90931660ff19909316929092179091556001600160601b0319606091821b811660805297811b881660c0529590951b90951660a05250620002dd98505050505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028457805160ff1916838001178555620002b4565b82800160010185558215620002b4579182015b82811115620002b457825182559160200191906001019062000297565b50620002c2929150620002c6565b5090565b5b80821115620002c25760008155600101620002c7565b60805160601c60a05160601c60c05160601c61189e62000354600039806106dd52806108a75280610b035280610bca5280610ca35280610f9252508061070c52806108d15280610b325280610c735280610f4752806112e452508061091c5280610bee5280611508528061152f525061189e6000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80637535d246116100c3578063b1bf962d1161007c578063b1bf962d14610503578063b3f1c93d1461050b578063b9a7b62214610547578063c04a8a101461054f578063dd62ed3e1461057b578063f5298aca146105a95761014d565b80637535d2461461049b57806375d26413146104bf57806395d89b41146104c7578063a457c2d71461041b578063a9059cbb146104cf578063b16a19de146104fb5761014d565b806323b872dd1161011557806323b872dd1461028e5780633118724e146102c4578063313ce567146103fd578063395093511461041b5780636bd76d241461044757806370a08231146104755761014d565b806306fdde0314610152578063095ea7b3146101cf5780630afbcdc91461020f57806318160ddd1461024e5780631da24f3e14610268575b600080fd5b61015a6105db565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fb600480360360408110156101e557600080fd5b506001600160a01b038135169060200135610671565b604080519115158252519081900360200190f35b6102356004803603602081101561022557600080fd5b50356001600160a01b03166106b9565b6040805192835260208301919091528051918290030190f35b6102566106d6565b60408051918252519081900360200190f35b6102566004803603602081101561027e57600080fd5b50356001600160a01b03166107a7565b6101fb600480360360608110156102a457600080fd5b506001600160a01b038135811691602081013590911690604001356107ba565b6103fb600480360360608110156102da57600080fd5b60ff82351691908101906040810160208201356401000000008111156102ff57600080fd5b82018360208201111561031157600080fd5b8035906020019184600183028401116401000000008311171561033357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561038657600080fd5b82018360208201111561039857600080fd5b803590602001918460018302840111640100000000831117156103ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610802945050505050565b005b610405610a5c565b6040805160ff9092168252519081900360200190f35b6101fb6004803603604081101561043157600080fd5b506001600160a01b038135169060200135610a65565b6102566004803603604081101561045d57600080fd5b506001600160a01b0381358116916020013516610ab4565b6102566004803603602081101561048b57600080fd5b50356001600160a01b0316610ae1565b6104a3610bc8565b604080516001600160a01b039092168252519081900360200190f35b6104a3610bec565b61015a610c10565b6101fb600480360360408110156104e557600080fd5b506001600160a01b0381351690602001356107ba565b6104a3610c71565b610256610c95565b6101fb6004803603608081101561052157600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610c9f565b610256610ed1565b6103fb6004803603604081101561056557600080fd5b506001600160a01b038135169060200135610ed6565b6102566004803603604081101561059157600080fd5b506001600160a01b0381358116916020013516610a65565b6103fb600480360360608110156105bf57600080fd5b506001600160a01b038135169060208101359060400135610f90565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106675780601f1061063c57610100808354040283529160200191610667565b820191906000526020600020905b81548152906001019060200180831161064a57829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6000806106c58361113d565b6106cd611158565b91509150915091565b60006107a27f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561076857600080fd5b505afa15801561077c573d6000803e3d6000fd5b505050506040513d602081101561079257600080fd5b505161079c611158565b9061115e565b905090565b60006107b28261113d565b90505b919050565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b600061080c61121c565b60075490915060ff16806108235750610823611221565b8061082f575060065481115b61086a5760405162461bcd60e51b815260040180806020018281038252602e81526020018061181a602e913960400191505060405180910390fd5b60075460ff1615801561088a576007805460ff1916600117905560068290555b61089384611227565b61089c8361123e565b6108a585611251565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c7f000000000000000000000000000000000000000000000000000000000000000088888860405180856001600160a01b031681526020018460ff168152602001806020018060200180602001848103845286818151815260200191508051906020019080838360005b8381101561099b578181015183820152602001610983565b50505050905090810190601f1680156109c85780820380516001836020036101000a031916815260200191505b50848103835285518152855160209182019187019080838360005b838110156109fb5781810151838201526020016109e3565b50505050905090810190601f168015610a285780820380516001836020036101000a031916815260200191505b509384039052505060008152604080519182900301945092505050a38015610a55576007805460ff191690555b5050505050565b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b600080610aed8361113d565b905080610afe5760009150506107b5565b610bc17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610b8e57600080fd5b505afa158015610ba2573d6000803e3d6000fd5b505050506040513d6020811015610bb857600080fd5b5051829061115e565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106675780601f1061063c57610100808354040283529160200191610667565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006107a2611158565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610cd3611267565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610d815760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d46578181015183820152602001610d2e565b50505050905090810190601f168015610d735780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50836001600160a01b0316856001600160a01b031614610da657610da684868561126b565b6000610db18561113d565b90506000610dbf8585611348565b6040805180820190915260028152611a9b60f11b602082015290915081610e275760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b50610e32868261144f565b6040805186815290516001600160a01b038816916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3856001600160a01b0316876001600160a01b03167f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee8787604051808381526020018281526020019250505060405180910390a3501595945050505050565b600281565b80603a6000610ee3611267565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912091909155610f1b611267565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e17f00000000000000000000000000000000000000000000000000000000000000008460405180836001600160a01b031681526020018281526020019250505060405180910390a35050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610fc2611267565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906110335760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b5060006110408383611348565b60408051808201909152600281526106a760f31b6020820152909150816110a85760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b506110b384826115cb565b6040805184815290516000916001600160a01b038716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3604080518481526020810184905281516001600160a01b038716927f49995e5dd6158cf69ad3e9777c46755a1a826a446c6416992167462dad033b2a928290030190a250505050565b6001600160a01b031660009081526020819052604090205490565b60025490565b600082158061116b575081155b1561117857506000610adb565b816b019d971e4fe8401e74000000198161118e57fe5b0483111560405180604001604052806002815260200161068760f31b815250906111f95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600290565b303b1590565b805161123a906003906020840190611764565b5050565b805161123a906004906020840190611764565b6005805460ff191660ff92909216919091179055565b3390565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a835284812091871681529152918220546112b4918490611669565b6001600160a01b038086166000818152603a602090815260408083208986168085529083529281902086905580517f000000000000000000000000000000000000000000000000000000000000000090951685529084018590528051949550909391927fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1929081900390910190a350505050565b604080518082019091526002815261035360f41b6020820152600090826113b05760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce800000082190485111561142c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b5082816b033b2e3c9fd0803ce80000008602018161144657fe5b04949350505050565b6001600160a01b0382166114aa576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6114b6600083836116c3565b6002546114c381836116c8565b6002556001600160a01b0383166000908152602081905260409020546114e981846116c8565b6001600160a01b038086166000908152602081905260409020919091557f000000000000000000000000000000000000000000000000000000000000000016156115c5577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156115ac57600080fd5b505af11580156115c0573d6000803e3d6000fd5b505050505b50505050565b6001600160a01b0382166116105760405162461bcd60e51b81526004018080602001828103825260218152602001806118486021913960400191505060405180910390fd5b61161c826000836116c3565b6002546116298183611722565b6002556001600160a01b0383166000908152602081815260409182902054825160608101909352602280845290926114e9928692906117f8908301398391905b600081848411156116bb5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d46578181015183820152602001610d2e565b505050900390565b505050565b600082820183811015610bc1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000610bc183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611669565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106117a557805160ff19168380011785556117d2565b828001600101855582156117d2579182015b828111156117d25782518255916020019190600101906117b7565b506117de9291506117e2565b5090565b5b808211156117de57600081556001016117e356fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e2066726f6d20746865207a65726f2061646472657373a26469706673582212209d387f14fb84aa1a74f609c828c06828575a6d5d9ed258b84b1cb5aa1beec23f64736f6c634300060c0033";
