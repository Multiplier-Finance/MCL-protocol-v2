/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AaveIncentivesController } from "../AaveIncentivesController";

export class AaveIncentivesController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    rewardToken: string,
    rewardsVault: string,
    psm: string,
    extraPsmReward: BigNumberish,
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides
  ): Promise<AaveIncentivesController> {
    return super.deploy(
      rewardToken,
      rewardsVault,
      psm,
      extraPsmReward,
      emissionManager,
      distributionDuration,
      overrides || {}
    ) as Promise<AaveIncentivesController>;
  }
  getDeployTransaction(
    rewardToken: string,
    rewardsVault: string,
    psm: string,
    extraPsmReward: BigNumberish,
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      rewardToken,
      rewardsVault,
      psm,
      extraPsmReward,
      emissionManager,
      distributionDuration,
      overrides || {}
    );
  }
  attach(address: string): AaveIncentivesController {
    return super.attach(address) as AaveIncentivesController;
  }
  connect(signer: Signer): AaveIncentivesController__factory {
    return super.connect(signer) as AaveIncentivesController__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveIncentivesController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveIncentivesController;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardsVault",
        type: "address",
      },
      {
        internalType: "contract IStakedAave",
        name: "psm",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "extraPsmReward",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "emissionManager",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "distributionDuration",
        type: "uint128",
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
    ],
    name: "RewardsAccrued",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
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
    name: "EXTRA_PSM_REWARD",
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
    inputs: [],
    name: "PSM",
    outputs: [
      {
        internalType: "contract IStakedAave",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REVISION",
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
    name: "REWARDS_VAULT",
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
    name: "REWARD_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
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
    name: "assets",
    outputs: [
      {
        internalType: "uint128",
        name: "emissionPerSecond",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastUpdateTimestamp",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "stake",
        type: "bool",
      },
    ],
    name: "claimRewards",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
        ],
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]",
      },
    ],
    name: "configureAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getRewardsBalance",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserUnclaimedRewards",
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
        name: "userBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "handleAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610140604052600080553480156200001657600080fd5b50604051620019fb380380620019fb8339810160408190526200003991620000fc565b81816001600160801b03166200005e81426200009a60201b62000d8f1790919060201c565b608052506001600160601b0319606091821b811660a05296811b871660e05294851b8616610100525050911b90911660c05261012052620001a6565b600082820183811015620000f5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008060008060008060c0878903121562000115578182fd5b865162000122816200018d565b602088015190965062000135816200018d565b604088015190955062000148816200018d565b60608801516080890151919550935062000162816200018d565b60a08801519092506001600160801b03811681146200017f578182fd5b809150509295509295509295565b6001600160a01b0381168114620001a357600080fd5b50565b60805160a05160601c60c05160601c60e05160601c6101005160601c610120516117c362000238600039806102fa528061059752508061060f52806107575280610b285250806105e2528061072a528061089a5280610b4c52508061031e52806106a552806108c7525080610b7e5280610d3a525080610b045280611250528061128c52806112b952506117c36000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063919cd40f11610097578063b2a5dbfa11610066578063b2a5dbfa146101ce578063cbcbb507146101e1578063dde43cba146101e9578063f11b8188146101f157610100565b8063919cd40f146101a1578063946776cd146101a957806399248ea7146101b1578063aaf5eb68146101b957610100565b80635dac9ed7116100d35780635dac9ed71461015e5780638116c484146101735780638129fc1c146101865780638b599f261461018e57610100565b8063198fa81e1461010557806331873e2e1461012e5780633373ee4c146101435780633ec3126d14610156575b600080fd5b610118610113366004611448565b610213565b6040516101259190611716565b60405180910390f35b61014161013c366004611494565b610232565b005b610118610151366004611462565b6102c7565b6101186102f8565b61016661031c565b604051610125919061165e565b610118610181366004611518565b610340565b610141610832565b61011861019c3660046114c6565b610949565b610118610b02565b610166610b26565b610166610b4a565b6101c1610b6e565b604051610125919061171f565b6101416101dc366004611588565b610b73565b610166610d38565b610118610d5c565b6102046101ff366004611448565b610d61565b604051610125939291906116f2565b6001600160a01b0381166000908152603460205260409020545b919050565b600061024084338585610de9565b905080156102c1576001600160a01b03841660009081526034602052604090205461026b9082610d8f565b6001600160a01b038516600081815260346020526040908190209290925590517f2468f9268c60ad90e2d49edb0032c8a001e733ae888b3ab8e982edf535be1a76906102b8908490611716565b60405180910390a25b50505050565b6001600160a01b03808216600090815260336020908152604080832093861683526002909301905220545b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008361034f57506000610829565b3360008181526034602052604090205460608767ffffffffffffffff8111801561037857600080fd5b506040519080825280602002602001820160405280156103b257816020015b61039f6113be565b8152602001906001900390816103975790505b50905060005b888110156104de578989828181106103cc57fe5b90506020020160208101906103e19190611448565b8282815181106103ed57fe5b60209081029190910101516001600160a01b03909116905289898281811061041157fe5b90506020020160208101906104269190611448565b6001600160a01b0316630afbcdc9856040518263ffffffff1660e01b8152600401610451919061165e565b604080518083038186803b15801561046857600080fd5b505afa15801561047c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a0919061163b565b8383815181106104ac57fe5b60200260200101516020018484815181106104c357fe5b602090810291909101015160400191909152526001016103b8565b5060006104eb8483610eaa565b90508015610541576104fd8382610d8f565b9250836001600160a01b03167f2468f9268c60ad90e2d49edb0032c8a001e733ae888b3ab8e982edf535be1a76826040516105389190611716565b60405180910390a25b82610553576000945050505050610829565b60008389116105625788610564565b835b6001600160a01b0386166000908152603460205260409020818603905590508615610713576105c86105c160646105bb847f0000000000000000000000000000000000000000000000000000000000000000610f1e565b90610f77565b8290610d8f565b6040516323b872dd60e01b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061063b907f00000000000000000000000000000000000000000000000000000000000000009030908690600401611672565b602060405180830381600087803b15801561065557600080fd5b505af1158015610669573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068d91906115f8565b506040516356e4bb9760e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063adc9772e906106dc908b908590600401611696565b600060405180830381600087803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b505050506107d7565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90610783907f0000000000000000000000000000000000000000000000000000000000000000908c908690600401611672565b602060405180830381600087803b15801561079d57600080fd5b505af11580156107b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d591906115f8565b505b876001600160a01b0316336001600160a01b03167f9310ccfcb8de723f578a9e4282ea9f521f05ae40dc08f3068dfad528a65ee3c78360405161081a9190611716565b60405180910390a39450505050505b95945050505050565b600061083c610fb9565b9050600054811161087e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611760602e913960400191505060405180910390fd5b600081905560405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906108f3907f00000000000000000000000000000000000000000000000000000000000000009060001990600401611696565b602060405180830381600087803b15801561090d57600080fd5b505af1158015610921573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094591906115f8565b5050565b6001600160a01b03811660009081526034602052604081205460608467ffffffffffffffff8111801561097b57600080fd5b506040519080825280602002602001820160405280156109b557816020015b6109a26113be565b81526020019060019003908161099a5790505b50905060005b85811015610ae1578686828181106109cf57fe5b90506020020160208101906109e49190611448565b8282815181106109f057fe5b60209081029190910101516001600160a01b039091169052868682818110610a1457fe5b9050602002016020810190610a299190611448565b6001600160a01b0316630afbcdc9866040518263ffffffff1660e01b8152600401610a54919061165e565b604080518083038186803b158015610a6b57600080fd5b505afa158015610a7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa3919061163b565b838381518110610aaf57fe5b6020026020010151602001848481518110610ac657fe5b602090810291909101015160400191909152526001016109bb565b50610af6610aef8583610fbe565b8390610d8f565b925050505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b601281565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bc45760405162461bcd60e51b8152600401610bbb906116af565b60405180910390fd5b60005b81811015610d3357600060336000858585818110610be157fe5b9050606002016040016020810190610bf99190611448565b6001600160a01b03166001600160a01b031681526020019081526020016000209050610c5e848484818110610c2a57fe5b9050606002016040016020810190610c429190611448565b82868686818110610c4f57fe5b905060600201602001356110a7565b50838383818110610c6b57fe5b610c819260206060909202019081019150611614565b81546fffffffffffffffffffffffffffffffff19166001600160801b0391909116178155838383818110610cb157fe5b9050606002016040016020810190610cc99190611448565b6001600160a01b03167f87fa03892a0556cb6b8f97e6d533a150d4d55fcbf275fff5fa003fa636bcc7fa858585818110610cff57fe5b610d159260206060909202019081019150611614565b604051610d2291906116de565b60405180910390a250600101610bc7565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600181565b603360205260009081526040902080546001909101546001600160801b0380831692600160801b9004169083565b600082820183811015610afb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b0380841660009081526033602090815260408083209388168352600284019091528120549091908280610e248885886110a7565b9050808314610e9c578615610e4157610e3e878285611164565b91505b6001600160a01b03808a1660008181526002870160205260409081902084905551918a16917fbb123b5c06d5408bbea3c4fef481578175cfb432e3b482c6186f02ed9086585b90610e93908590611716565b60405180910390a35b50925050505b949350505050565b600080805b8351811015610f1657610f0c610aef86868481518110610ecb57fe5b602002602001015160000151878581518110610ee357fe5b602002602001015160200151888681518110610efb57fe5b602002602001015160400151610de9565b9150600101610eaf565b509392505050565b600082610f2d575060006102f2565b82820282848281610f3a57fe5b0414610afb5760405162461bcd60e51b815260040180806020018281038252602181526020018061173f6021913960400191505060405180910390fd5b6000610afb83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611186565b600190565b600080805b8351811015610f1657600060336000868481518110610fde57fe5b602090810291909101810151516001600160a01b031682528101919091526040016000908120600181015481548851929450611046926001600160801b0380831692600160801b900416908a908890811061103557fe5b602002602001015160400151611228565b905061109b61109487858151811061105a57fe5b602002602001015160200151838560020160008c6001600160a01b03166001600160a01b0316815260200190815260200160002054611164565b8590610d8f565b93505050600101610fc3565b6001820154825460009190600160801b90046001600160801b0316428114156110d257509050610afb565b84546000906110ed9084906001600160801b03168488611228565b905082811461114157808660010181905550866001600160a01b03167f5777ca300dfe5bead41006fbce4389794dbc0ed8d6cccebfaf94630aa04184bc826040516111389190611716565b60405180910390a25b85546001600160801b03428116600160801b029116178655925050509392505050565b6000610ea2670de0b6b3a76400006105bb61117f8686611327565b8790610f1e565b600081836112125760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156111d75781810151838201526020016111bf565b50505050905090810190601f1680156112045780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161121e57fe5b0495945050505050565b6000831580611235575081155b80611248575042836001600160801b0316145b8061127c57507f0000000000000000000000000000000000000000000000000000000000000000836001600160801b031610155b15611288575083610ea2565b60007f000000000000000000000000000000000000000000000000000000000000000042116112b757426112d9565b7f00000000000000000000000000000000000000000000000000000000000000005b905060006112f0826001600160801b038716611327565b905061131c87611316866105bb670de0b6b3a76400006113108c88610f1e565b90610f1e565b90610d8f565b979650505050505050565b6000610afb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250600081848411156113b65760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156111d75781810151838201526020016111bf565b505050900390565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b038116811461022d57600080fd5b60008083601f840112611410578182fd5b50813567ffffffffffffffff811115611427578182fd5b602083019150836020808302850101111561144157600080fd5b9250929050565b600060208284031215611459578081fd5b610afb826113e8565b60008060408385031215611474578081fd5b61147d836113e8565b915061148b602084016113e8565b90509250929050565b6000806000606084860312156114a8578081fd5b6114b1846113e8565b95602085013595506040909401359392505050565b6000806000604084860312156114da578283fd5b833567ffffffffffffffff8111156114f0578384fd5b6114fc868287016113ff565b909450925061150f9050602085016113e8565b90509250925092565b60008060008060006080868803121561152f578081fd5b853567ffffffffffffffff811115611545578182fd5b611551888289016113ff565b9096509450506020860135925061156a604087016113e8565b9150606086013561157a8161172d565b809150509295509295909350565b6000806020838503121561159a578182fd5b823567ffffffffffffffff808211156115b1578384fd5b818501915085601f8301126115c4578384fd5b8135818111156115d2578485fd5b8660206060830285010111156115e6578485fd5b60209290920196919550909350505050565b600060208284031215611609578081fd5b8151610afb8161172d565b600060208284031215611625578081fd5b81356001600160801b0381168114610afb578182fd5b6000806040838503121561164d578182fd5b505080516020909101519092909150565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160801b0391909116815260200190565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b60ff91909116815260200190565b801515811461173b57600080fd5b5056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a2646970667358221220c514abac92b4ca120d5420b25e72accaa9c26b72f354cd58760b11755efb71a864736f6c63430007050033";
