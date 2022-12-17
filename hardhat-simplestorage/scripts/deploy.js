//imports
const { ethers, run, network } = require("hardhat");
const etherscan = require("@nomiclabs/hardhat-etherscan");
//async main
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("deployingg!")
  const SimpleStorage = await simpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(SimpleStorage.address);
  verify(SimpleStorage.address);
  const currentValue = await SimpleStorage.retrieve();
  console.log("current value is" + currentValue);

  //update the current walue
  const transResponse = await SimpleStorage.store(7);
  await transResponse.wait(1);
  const updatedValue = await SimpleStorage.retrieve();
  console.log("updated value" + updatedValue + "!!");
};

async function verify(contractAddress, args) {
  console.log("verifying contract....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
    console.log("contract has been verified!");
  }
  catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("already verified!!")
    }
    else {
      console.log(e);
    }
  }
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})