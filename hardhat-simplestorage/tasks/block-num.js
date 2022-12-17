const { task } = require("hardhat/config");

task("block-number", "prints the block number current").setAction(
    async (taskArgs, hre) => {
        const blockNum = await hre.ethers.provider.getBlockNumber();
        console.log("current block numeber: " + blockNum);

    }
)

module.exports = {};