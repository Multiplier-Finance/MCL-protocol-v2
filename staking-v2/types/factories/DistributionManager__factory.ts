/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DistributionManager } from "../DistributionManager";

export class DistributionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    emissionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DistributionManager> {
    return super.deploy(
      emissionManager,
      overrides || {}
    ) as Promise<DistributionManager>;
  }
  getDeployTransaction(
    emissionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(emissionManager, overrides || {});
  }
  attach(address: string): DistributionManager {
    return super.attach(address) as DistributionManager;
  }
  connect(signer: Signer): DistributionManager__factory {
    return super.connect(signer) as DistributionManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DistributionManager {
    return new Contract(address, _abi, signerOrProvider) as DistributionManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "emissionManager",
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
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "emission",
        type: "uint256",
      },
    ],
    name: "AssetConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "AssetIndexUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDistributionEnd",
        type: "uint256",
      },
    ],
    name: "DistributionEndUpdated",
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
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UserIndexUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DISTRIBUTION_END",
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
    name: "EMISSION_MANAGER",
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
    name: "PRECISION",
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
        name: "",
        type: "address",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "uint104",
        name: "emissionPerSecond",
        type: "uint104",
      },
      {
        internalType: "uint104",
        name: "index",
        type: "uint104",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetData",
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
    name: "getDistributionEnd",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "getUserAssetData",
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
        internalType: "uint256",
        name: "distributionEnd",
        type: "uint256",
      },
    ],
    name: "setDistributionEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161049138038061049183398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6103fd610094600039806101ba528061024d52506103fd6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063aaf5eb681161005b578063aaf5eb68146100f5578063cbcbb5071461010a578063cc69afec146100ed578063f11b81881461011f57610088565b80631652e7b71461008d5780633373ee4c146100b857806339ccbdd3146100d8578063919cd40f146100ed575b600080fd5b6100a061009b3660046102c2565b610141565b6040516100af939291906103a3565b60405180910390f35b6100cb6100c63660046102e3565b610181565b6040516100af919061039a565b6100eb6100e6366004610315565b6101af565b005b6100cb610240565b6100fd610246565b6040516100af91906103b9565b61011261024b565b6040516100af919061032d565b61013261012d3660046102c2565b61026f565b6040516100af93929190610370565b6001600160a01b0316600090815260208190526040902054600160681b81046001600160681b039081169290821691600160d01b900464ffffffffff1690565b6001600160a01b03808216600090815260208181526040808320938616835260019093019052205492915050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102005760405162461bcd60e51b81526004016101f790610341565b60405180910390fd5b60018190556040517f1cc1849a6602c3e91f2088cadea4381cc5717f2f28584197060ed2ebb434c16f9061023590839061039a565b60405180910390a150565b60015490565b601281565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000602081905290815260409020546001600160681b0380821691600160681b810490911690600160d01b900464ffffffffff1683565b80356001600160a01b03811681146102bd57600080fd5b919050565b6000602082840312156102d3578081fd5b6102dc826102a6565b9392505050565b600080604083850312156102f5578081fd5b6102fe836102a6565b915061030c602084016102a6565b90509250929050565b600060208284031215610326578081fd5b5035919050565b6001600160a01b0391909116815260200190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160681b03938416815291909216602082015264ffffffffff909116604082015260600190565b90815260200190565b9283526020830191909152604082015260600190565b60ff9190911681526020019056fea2646970667358221220611e4e324105c3c5bb480be2415b14df1c57e9413a53cac0d31112a4257ba9ad64736f6c63430007050033";
