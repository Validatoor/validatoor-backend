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

//   constructor(
// 	address _factory,
// 	address _router,
// 	address payable _devTaxRecipient,
// 	address payable _rewardsTaxRecipient
// ) ERC20("Validatoor Money", "VALID") Ownable() {
// 	taxExcluded[owner()] = true;
// 	taxExcluded[address(0)] = true;
// 	taxExcluded[_devTaxRecipient] = true;
// 	taxExcluded[_rewardsTaxRecipient] = true;
// 	taxExcluded[address(this)] = true;

// 	devTaxRecipient = _devTaxRecipient;
// 	rewardsTaxRecipient = _rewardsTaxRecipient;

// 	router = IUniswapV2Router02(_router);
// 	IUniswapV2Factory factory = IUniswapV2Factory(_factory);
// 	pair = factory.createPair(address(this), router.WETH());

// 	_mint(msg.sender, MAX_SUPPLY);
// }

  // We get the contract to deploy
  const Timelock = await hre.ethers.getContractFactory("Timelock");
  const timelock = await Timelock.deploy("0x42d3990868cd022FBCDaE55482461603753b0676", "172800");

  await timelock.deployed();

  console.log("Timelock deployed to:", timelock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
