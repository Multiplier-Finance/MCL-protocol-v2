/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { AToken } from "../AToken";

export class AToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pool: string,
    underlyingAssetAddress: string,
    reserveTreasuryAddress: string,
    tokenName: string,
    tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AToken> {
    return super.deploy(
      pool,
      underlyingAssetAddress,
      reserveTreasuryAddress,
      tokenName,
      tokenSymbol,
      incentivesController,
      overrides || {}
    ) as Promise<AToken>;
  }
  getDeployTransaction(
    pool: string,
    underlyingAssetAddress: string,
    reserveTreasuryAddress: string,
    tokenName: string,
    tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pool,
      underlyingAssetAddress,
      reserveTreasuryAddress,
      tokenName,
      tokenSymbol,
      incentivesController,
      overrides || {}
    );
  }
  attach(address: string): AToken {
    return super.attach(address) as AToken;
  }
  connect(signer: Signer): AToken__factory {
    return super.connect(signer) as AToken__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AToken {
    return new Contract(address, _abi, signerOrProvider) as AToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAssetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveTreasuryAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
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
        name: "target",
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
        name: "treasury",
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
        name: "aTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenSymbol",
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
    name: "ATOKEN_REVISION",
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
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EIP712_REVISION",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "RESERVE_TREASURY_ADDRESS",
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
    name: "UINT_MAX_VALUE",
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
        name: "",
        type: "address",
      },
    ],
    name: "_nonces",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverOfUnderlying",
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
        name: "underlyingAssetDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
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
    inputs: [
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
    name: "mintToTreasury",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
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
    name: "transferOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052600080553480156200001657600080fd5b5060405162002d3138038062002d31833981810160405260c08110156200003c57600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200007057600080fd5b9083019060208201858111156200008657600080fd5b8251640100000000811182820188101715620000a157600080fd5b82525081516020918201929091019080838360005b83811015620000d0578181015183820152602001620000b6565b50505050905090810190601f168015620000fe5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012257600080fd5b9083019060208201858111156200013857600080fd5b82516401000000008111828201881017156200015357600080fd5b82525081516020918201929091019080838360005b838110156200018257818101518382015260200162000168565b50505050905090810190601f168015620001b05780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084916012918591620001da916037918701906200023b565b508251620001f09060389060208601906200023b565b506039805460ff90931660ff19909316929092179091556001600160601b0319606091821b811660805298811b891660e05296871b881660a0525050505050901b1660c052620002d7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200027e57805160ff1916838001178555620002ae565b82800160010185558215620002ae579182015b82811115620002ae57825182559160200191906001019062000291565b50620002bc929150620002c0565b5090565b5b80821115620002bc5760008155600101620002c1565b60805160601c60a05160601c60c05160601c60e05160601c612991620003a0600039806107d952806109e15280610d595280610f30528061101352806110db528061114052806116b452806118bf528061200c5280612168525080610dce52806111f15280611232528061128852806113fe525080610a105280610d835280610fdf5280611042528061142252806117e2528061203b5280612119525080610def52806110ff5280611c7d5280611ca452806125535280612581528061263152506129916000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637535d2461161010f578063b16a19de116100a2578063d505accf11610071578063d505accf1461060d578063d7020d0a1461065e578063dd62ed3e1461069a578063f866c319146106c8576101e5565b8063b16a19de146105cf578063b1bf962d146105d7578063b9844d8d146105df578063d0fc81d214610605576101e5565b806395d89b41116100de57806395d89b4114610567578063a457c2d71461056f578063a9059cbb1461059b578063ae167335146105c7576101e5565b80637535d2461461051057806375d2641314610534578063781603761461053c5780637df5bd3b14610544576101e5565b806323b872dd116101875780633644e515116101565780633644e5151461048a57806339509351146104925780634efecaa5146104be57806370a08231146104ea576101e5565b806323b872dd1461036057806330adf81f146103965780633118724e1461039e578063313ce5671461046c576101e5565b80630bd7ad3b116101c35780630bd7ad3b146102e6578063156e29f61461030057806318160ddd146103325780631da24f3e1461033a576101e5565b806306fdde03146101ea578063095ea7b3146102675780630afbcdc9146102a7575b600080fd5b6101f26106fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102936004803603604081101561027d57600080fd5b506001600160a01b038135169060200135610795565b604080519115158252519081900360200190f35b6102cd600480360360208110156102bd57600080fd5b50356001600160a01b03166107b3565b6040805192835260208301919091528051918290030190f35b6102ee6107d0565b60408051918252519081900360200190f35b6102936004803603606081101561031657600080fd5b506001600160a01b0381351690602081013590604001356107d5565b6102ee6109c0565b6102ee6004803603602081101561035057600080fd5b50356001600160a01b0316610aa5565b6102936004803603606081101561037657600080fd5b506001600160a01b03813581169160208101359091169060400135610ab0565b6102ee610b70565b61046a600480360360608110156103b457600080fd5b60ff82351691908101906040810160208201356401000000008111156103d957600080fd5b8201836020820111156103eb57600080fd5b8035906020019184600183028401116401000000008311171561040d57600080fd5b91939092909160208101903564010000000081111561042b57600080fd5b82018360208201111561043d57600080fd5b8035906020019184600183028401116401000000008311171561045f57600080fd5b509092509050610b94565b005b610474610ecf565b6040805160ff9092168252519081900360200190f35b6102ee610ed8565b610293600480360360408110156104a857600080fd5b506001600160a01b038135169060200135610ede565b6102ee600480360360408110156104d457600080fd5b506001600160a01b038135169060200135610f2c565b6102ee6004803603602081101561050057600080fd5b50356001600160a01b031661100c565b6105186110d9565b604080516001600160a01b039092168252519081900360200190f35b6105186110fd565b6101f2611121565b61046a6004803603604081101561055a57600080fd5b508035906020013561113e565b6101f26112d6565b6102936004803603604081101561058557600080fd5b506001600160a01b038135169060200135611337565b610293600480360360408110156105b157600080fd5b506001600160a01b03813516906020013561139f565b6105186113fc565b610518611420565b6102ee611444565b6102ee600480360360208110156105f557600080fd5b50356001600160a01b0316611453565b6102ee611465565b61046a600480360360e081101561062357600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561146b565b61046a6004803603608081101561067457600080fd5b506001600160a01b038135811691602081013590911690604081013590606001356116b2565b6102ee600480360360408110156106b057600080fd5b506001600160a01b0381358116916020013516611892565b61046a600480360360608110156106de57600080fd5b506001600160a01b038135811691602081013590911690604001356118bd565b60378054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b820191906000526020600020905b81548152906001019060200180831161076d57829003601f168201915b505050505090505b90565b60006107a96107a26119ac565b84846119b0565b5060015b92915050565b6000806107bf83611a9c565b6107c7611ab7565b91509150915091565b600281565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108096119ac565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906108b75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561087c578181015183820152602001610864565b50505050905090810190601f1680156108a95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006108c385611a9c565b905060006108d18585611abd565b6040805180820190915260028152611a9b60f11b6020820152909150816109395760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b506109448682611bc4565b6040805186815290516001600160a01b038816916000916000805160206128838339815191529181900360200190a3604080518681526020810186905281516001600160a01b038916927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25015949350505050565b6000806109cb611ab7565b9050806109dc576000915050610792565b610a9f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a6c57600080fd5b505afa158015610a80573d6000803e3d6000fd5b505050506040513d6020811015610a9657600080fd5b50518290611d40565b91505090565b60006107ad82611a9c565b6000610abd848484611dfe565b610b2d84610ac96119ac565b610b288560405180606001604052806028815260200161282d602891396001600160a01b038a16600090815260356020526040812090610b076119ac565b6001600160a01b031681526020810191909152604001600020549190611e10565b6119b0565b826001600160a01b0316846001600160a01b0316600080516020612883833981519152846040518082815260200191505060405180910390a35060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6000610b9e611e6a565b60015490915060ff1680610bb55750610bb5611e6f565b80610bc1575060005481115b610bfc5760405162461bcd60e51b815260040180806020018281038252602e815260200180612855602e913960400191505060405180910390fd5b60015460ff16158015610c1b576001805460ff19168117905560008290555b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f87876040518083838082843760408051939091018390038320838201825260018452603160f81b602094850152815180850198909852878201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060880152608087018890523060a0808901919091528151808903909101815260c08801808352815191850191909120603b5560e0601f8f01859004909402880184019091528c8152610d0f969095508d94508c93508392019050838280828437600092019190915250611e7592505050565b610d4e85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e8892505050565b610d5788611e9b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fb19e051f8af41150ccccb3fc2c2d8d15f4a4cf434f32a559ba75fe73d6eea20b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008c8c8c8c8c60405180886001600160a01b03168152602001876001600160a01b031681526020018660ff1681526020018060200180602001806020018481038452888882818152602001925080828437600083820152601f01601f1916909101858103845286815260200190508686808284376000838201819052601f909101601f1916909201958603909252845250506040805192839003019850909650505050505050a3508015610ec6576001805460ff191690555b50505050505050565b60395460ff1690565b603b5481565b60006107a9610eeb6119ac565b84610b288560356000610efc6119ac565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611eb1565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610f606119ac565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610fd15760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b506110066001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484611f12565b50919050565b60006107ad7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561109e57600080fd5b505afa1580156110b2573d6000803e3d6000fd5b505050506040513d60208110156110c857600080fd5b50516110d384611a9c565b90611d40565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b604051806040016040528060018152602001603160f81b81525081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111706119ac565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906111e15760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b50816111ec576112d2565b61121f7f000000000000000000000000000000000000000000000000000000000000000061121a8484611abd565b611bc4565b6040805183815290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916000916000805160206128838339815191529181900360200190a3604080518381526020810183905281516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25b5050565b60388054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b60006107a96113446119ac565b84610b2885604051806060016040528060258152602001612937602591396035600061136e6119ac565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611e10565b60006113b36113ac6119ac565b8484611dfe565b826001600160a01b03166113c56119ac565b6001600160a01b0316600080516020612883833981519152846040518082815260200191505060405180910390a350600192915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061144e611ab7565b905090565b603a6020526000908152604090205481565b60001981565b6001600160a01b0387166114b6576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b83421115611500576040805162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604482015290519081900360640190fd5b6001600160a01b038088166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e08601835280519084012061190160f01b6101008701526101028601969096526101228086019690965281518086039096018652610142850180835286519684019690962093909552610162840180825283905260ff88166101828501526101a284018790526101c284018690525191926001926101e28083019392601f198301929081900390910190855afa158015611615573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614611678576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b611683826001611eb1565b6001600160a01b038a166000908152603a60205260409020556116a78989896119b0565b505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166116e46119ac565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906117555760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b5060006117628383611abd565b60408051808201909152600281526106a760f31b6020820152909150816117ca5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b506117d58582611f64565b6118096001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585611f12565b6040805184815290516000916001600160a01b038816916000805160206128838339815191529181900360200190a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051808381526020018281526020019250505060405180910390a35050505050565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166118ef6119ac565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906119605760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b5061196e8383836000612008565b816001600160a01b0316836001600160a01b0316600080516020612883833981519152836040518082815260200191505060405180910390a3505050565b3390565b6001600160a01b0383166119f55760405162461bcd60e51b81526004018080602001828103825260248152602001806128e96024913960400191505060405180910390fd5b6001600160a01b038216611a3a5760405162461bcd60e51b81526004018080602001828103825260228152602001806127e56022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b031660009081526034602052604090205490565b60365490565b604080518082019091526002815261035360f41b602082015260009082611b255760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115611ba15760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b5082816b033b2e3c9fd0803ce800000086020181611bbb57fe5b04949350505050565b6001600160a01b038216611c1f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611c2b60008383611e0b565b603654611c388183611eb1565b6036556001600160a01b038316600090815260346020526040902054611c5e8184611eb1565b6001600160a01b038086166000908152603460205260409020919091557f00000000000000000000000000000000000000000000000000000000000000001615611d3a577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b158015611d2157600080fd5b505af1158015611d35573d6000803e3d6000fd5b505050505b50505050565b6000821580611d4d575081155b15611d5a575060006107ad565b816b019d971e4fe8401e740000001981611d7057fe5b0483111560405180604001604052806002815260200161068760f31b81525090611ddb5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b611e0b8383836001612008565b505050565b60008184841115611e625760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561087c578181015183820152602001610864565b505050900390565b600290565b303b1590565b80516112d290603790602084019061270c565b80516112d290603890602084019061270c565b6039805460ff191660ff92909216919091179055565b600082820183811015611f0b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611e0b908490612227565b6001600160a01b038216611fa95760405162461bcd60e51b81526004018080602001828103825260218152602001806128a36021913960400191505060405180910390fd5b611fb582600083611e0b565b603654611fc281836123df565b6036556001600160a01b0383166000908152603460209081526040918290205482516060810190935260228084529092611c5e928692906127c390830139839190611e10565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561209757600080fd5b505afa1580156120ab573d6000803e3d6000fd5b505050506040513d60208110156120c157600080fd5b5051905060006120d4826110d388611a9c565b905060006120e5836110d388611a9c565b90506120fb87876120f68887611abd565b612421565b83156121cb576040805163d5ed393360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015289811660248301528881166044830152606482018890526084820185905260a4820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163d5ed39339160c48082019260009290919082900301818387803b1580156121b257600080fd5b505af11580156121c6573d6000803e3d6000fd5b505050505b856001600160a01b0316876001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668786604051808381526020018281526020019250505060405180910390a350505050505050565b612239826001600160a01b03166126d0565b61228a576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106122c85780518252601f1990920191602091820191016122a9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461232a576040519150601f19603f3d011682016040523d82523d6000602084013e61232f565b606091505b509150915081612386576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611d3a578080602001905160208110156123a257600080fd5b5051611d3a5760405162461bcd60e51b815260040180806020018281038252602a81526020018061290d602a913960400191505060405180910390fd5b6000611f0b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611e10565b6001600160a01b0383166124665760405162461bcd60e51b81526004018080602001828103825260258152602001806128c46025913960400191505060405180910390fd5b6001600160a01b0382166124ab5760405162461bcd60e51b81526004018080602001828103825260238152602001806127a06023913960400191505060405180910390fd5b6124b6838383611e0b565b600060346000856001600160a01b03166001600160a01b031681526020019081526020016000205490506125058260405180606001604052806026815260200161280760269139839190611e10565b6001600160a01b0380861660009081526034602052604080822093909355908516815220546125348184611eb1565b6001600160a01b038086166000908152603460205260409020919091557f000000000000000000000000000000000000000000000000000000000000000016156126c957600060365490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8783866040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156125fe57600080fd5b505af1158015612612573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b0316146126c7577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8683856040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156126ae57600080fd5b505af11580156126c2573d6000803e3d6000fd5b505050505b505b5050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061270457508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061274d57805160ff191683800117855561277a565b8280016001018555821561277a579182015b8281111561277a57825182559160200191906001019061275f565b5061278692915061278a565b5090565b5b80821115612786576000815560010161278b56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122082ee73f8ef50977af6c4fd7bba5603725469e291a9a6f2bf3a0309bff001560264736f6c634300060c0033";
