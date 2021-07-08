/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IATokenDetailed } from "../IATokenDetailed";

export class IATokenDetailed__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IATokenDetailed {
    return new Contract(address, _abi, signerOrProvider) as IATokenDetailed;
  }
}

const _abi = [
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
];
