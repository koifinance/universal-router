/*
import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import '@nomicfoundation/hardhat-foundry'
import dotenv from 'dotenv'
dotenv.config()
*/
/*

export default {
  paths: {
    sources: './contracts',
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 10,
      forking: {
        url: `${process.env.RPC_URL}`,
        blockNumber: 111000000,
      },
    },
    mainnet: {
      url: `${process.env.RPC_URL}`,
    },
    ropsten: {
      url: `${process.env.RPC_URL}`,
    },
    rinkeby: {
      url: `${process.env.RPC_URL}`,
    },
    goerli: {
      url: `${process.env.RPC_URL}`,
    },
    kovan: {
      url: `${process.env.RPC_URL}`,
    },
    arbitrumRinkeby: {
      url: `https://rinkeby.arbitrum.io/rpc`,
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
    },
    optimismKovan: {
      url: `https://kovan.optimism.io`,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
    },
    polygon: {
      url: `${process.env.RPC_URL}`,
    },
    base: {
      url: `${process.env.RPC_URL}`,
    },
    baseGoerli: {
      url: `https://goerli.base.org`,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  mocha: {
    timeout: 60000,
  },
}

*/


import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";


export default {
    paths: {
      sources: './contracts',
    },
    zksolc: {
      version: 'latest',
      compilerSource: 'binary',
      settings: {
      }
    },
    defaultNetwork: "zkSyncLocal",
    solidity: {
      version: '0.8.17'
    },
    mocha: {
      timeout: 100000000
    },
    etherscan: {
      apiKey: {
        zkSyncMainnet: "PYFN3Y9TU8KTDSWEX9Q16FQVB2RBXNRVQH",
      },
      customChains: [
        {
          network: "zkSyncMainnet",
          chainId: 324,
          urls: {
            apiURL: "https://api-era.zksync.network/api",
            browserURL: "https://era.zksync.network"
          }
        }
      ]
    },
    networks: {
      zkSyncTestnet: {
        url: "https://testnet.era.zksync.dev",
        ethNetwork: "goerli",
        zksync: true,
        allowUnlimitedContractSize: true
      },
      zkSyncLocal: {
        // Using 127.0.0.1 instead of localhost is necessary for CI builds
        url: "http://127.0.0.1:8011",
        // ethNetwork isn't necessary, but leaving for posterity
        ethNetwork: "http://127.0.0.1:8545",
        zksync: true,
      },
      zkSyncMainnet: {
        url: "https://zksync2-mainnet.zksync.io",
        ethNetwork: "mainnet",
        zksync: true,
        verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification' //'https://api-era.zksync.network/api' //'
      },
      hardhat: {
        zksync: true,
        allowUnlimitedContractSize: true
      },
    },

  };
