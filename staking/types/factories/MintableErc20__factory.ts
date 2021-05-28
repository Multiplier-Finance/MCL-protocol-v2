/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MintableErc20 } from "../MintableErc20";

export class MintableErc20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<MintableErc20> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<MintableErc20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  attach(address: string): MintableErc20 {
    return super.attach(address) as MintableErc20;
  }
  connect(signer: Signer): MintableErc20__factory {
    return super.connect(signer) as MintableErc20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableErc20 {
    return new Contract(address, _abi, signerOrProvider) as MintableErc20;
  }
}

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
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
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
        internalType: "uint256",
        name: "value",
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
  "0x60806040523480156200001157600080fd5b5060405162000dd138038062000dd1833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491620001c09160039190860190620001f7565b508151620001d6906004906020850190620001f7565b506005805460ff191660ff9290921691909117905550620002a39350505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200022f57600085556200027a565b82601f106200024a57805160ff19168380011785556200027a565b828001600101855582156200027a579182015b828111156200027a5782518255916020019190600101906200025d565b50620002889291506200028c565b5090565b5b808211156200028857600081556001016200028d565b610b1e80620002b36000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461021057806395d89b4114610236578063a0712d681461023e578063a457c2d71461025b578063a9059cbb14610287578063dd62ed3e146102b3576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c657806339509351146101e4575b600080fd5b6100c16102e1565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b038135169060200135610377565b604080519115158252519081900360200190f35b61017e610394565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b0381358116916020810135909116906040013561039a565b6101ce610421565b6040805160ff9092168252519081900360200190f35b610162600480360360408110156101fa57600080fd5b506001600160a01b03813516906020013561042a565b61017e6004803603602081101561022657600080fd5b50356001600160a01b0316610478565b6100c1610493565b6101626004803603602081101561025457600080fd5b50356104f4565b6101626004803603604081101561027157600080fd5b506001600160a01b038135169060200135610508565b6101626004803603604081101561029d57600080fd5b506001600160a01b038135169060200135610570565b61017e600480360360408110156102c957600080fd5b506001600160a01b0381358116916020013516610584565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050905090565b600061038b6103846105af565b84846105b3565b50600192915050565b60025490565b60006103a784848461069f565b610417846103b36105af565b61041285604051806060016040528060288152602001610a53602891396001600160a01b038a166000908152600160205260408120906103f16105af565b6001600160a01b0316815260208101919091526040016000205491906107fa565b6105b3565b5060019392505050565b60055460ff1690565b600061038b6104376105af565b8461041285600160006104486105af565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610891565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561036d5780601f106103425761010080835404028352916020019161036d565b600061050033836108f2565b506001919050565b600061038b6105156105af565b8461041285604051806060016040528060258152602001610ac4602591396001600061053f6105af565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906107fa565b600061038b61057d6105af565b848461069f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105f85760405162461bcd60e51b8152600401808060200182810382526024815260200180610aa06024913960400191505060405180910390fd5b6001600160a01b03821661063d5760405162461bcd60e51b8152600401808060200182810382526022815260200180610a0b6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106e45760405162461bcd60e51b8152600401808060200182810382526025815260200180610a7b6025913960400191505060405180910390fd5b6001600160a01b0382166107295760405162461bcd60e51b81526004018080602001828103825260238152602001806109e86023913960400191505060405180910390fd5b6107348383836109e2565b61077181604051806060016040528060268152602001610a2d602691396001600160a01b03861660009081526020819052604090205491906107fa565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107a09082610891565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108895760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084e578181015183820152602001610836565b50505050905090810190601f16801561087b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108eb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b03821661094d576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610959600083836109e2565b6002546109669082610891565b6002556001600160a01b03821660009081526020819052604090205461098c9082610891565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d1c7b38ffea7ef9e753b49118ed35aa750604cd5f1584bf01fd3bb38630034f764736f6c63430007050033";
