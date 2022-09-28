// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const validToken = "0xbbac3008ae312a01ae3806590f1fe49030ad8f6b";
  const validEthLP = "0x05b8a5d1f8dbbc34443f20935705fb06e883e80d";
  const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  // We get the contract to deploy
  const Rewards = await hre.ethers.getContractFactory("VALIDRewards");
  //Parameters - Reward Token Address, Staking Token Address
  const rewards = await Rewards.deploy(validToken, validEthLP);

  await rewards.deployed();

  console.log("Validator deployed to: ", rewards.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
