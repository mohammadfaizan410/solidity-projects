require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-num");
require("hardhat-gas-reporter");
require("solidity-coverage");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "local",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/yeREcg-MeCphO4o_7TOX9UkexR8gQwTW",
      accounts: ["287213fbeed3cb9dc84416546c9031c3850ea96c81709491974049425d8ec09b"],
      chainId: 5
    },
    local: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    }
  },
  etherscan: {
    apiKey: "SB54Q78W3MW8M1C7TCPANRFQEXUZCYKMEW",
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: "0e86a131-5718-4d5e-a662-b3dc8ef64927",
    token: "MATIC"
  }
};
