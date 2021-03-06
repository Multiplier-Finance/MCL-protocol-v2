/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IaTokenInterface extends ethers.utils.Interface {
  functions: {
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export class IaToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IaTokenInterface;

  functions: {
    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getScaledUserBalanceAndSupply(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  callStatic: {
    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
