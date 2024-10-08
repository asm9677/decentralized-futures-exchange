const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const USDT = await hre.ethers.getContractFactory("USDT");
  const WETH = "0x7b79995e5f793a07bc00c21412e50ecae098e7f9";

  const Vault = await hre.ethers.getContractFactory("Vault");
  const ClearingHouse = await hre.ethers.getContractFactory("ClearingHouse");
  const MarketRegistry = await hre.ethers.getContractFactory("MarketRegistry");
  const AccountBalance = await hre.ethers.getContractFactory("AccountBalance");
  const UniswapV2Factory = await hre.ethers.getContractFactory(
    "UniswapV2Factory"
  );
  const UniswapV2Router = await hre.ethers.getContractFactory(
    "UniswapV2Router02"
  );
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const OpenOrder = await hre.ethers.getContractFactory("OpenOrder");

  // const usdt = USDT.attach("0xD7DBa4C3296477E3a97cEeE7D937D95f8aDD458E");
  // const factory = UniswapV2Factory.attach(
  //   "0x246EC513dFB505977161eBE4e81b025aF47A96DE"
  // );
  // const router = UniswapV2Router.attach(
  //   "0x921C79fa5E725a8851501540fD0F73FD303173b3"
  // );
  // const vault = Vault.attach("0xbb6e5C64473ff98D7f2F98AA5E482D7c90E25c80");

  // vault.depositFor(
  //   "0x000000c2028C057617891ECB15B8159F4249F0E3",
  //   1000000000n * 10n ** 6n
  // );

  const clearingHouse = ClearingHouse.attach(
    "0xB184ddE3e21a3c7e7e142264a7E558836CeaCdD2"
  );
  // const marketRegistry = MarketRegistry.attach(
  //   "0x9a37A60c1CaA20081E5543dF598Ac5a3CcA815C9"
  // );
  // const accountBalance = AccountBalance.attach(
  //   "0x1dDCac4613623824b1fbc944217bC5764bdD74e8"
  // );
  // const faucet = Faucet.attach("0xCD298eb44046e3007DE3F6851F2e2a4cfDcc2942");
  const openOrder = OpenOrder.attach(
    "0xAC13Ede9977D7FCEe289cD013Ee399d90Fa7Ef0f"
  );

  // const usdt = await USDT.deploy(2n ** 256n - 1n, "Tether USD", "USDT", 6);
  // console.log(`usdt: ${usdt.target}`);
  // const factory = await UniswapV2Factory.deploy(deployer);
  // console.log(`factory: ${factory.target}`);
  // const router = await UniswapV2Router.deploy(factory.target, WETH);
  // console.log(`router: ${router.target}`);
  // const vault = await Vault.deploy();
  // console.log(`vault: ${vault.target}`);
  // const clearingHouse = await ClearingHouse.deploy();
  // console.log(`clearingHouse: ${clearingHouse.target}`);
  // const marketRegistry = await MarketRegistry.deploy(factory.target);
  // console.log(`marketRegistry: ${marketRegistry.target}`);
  // const accountBalance = await AccountBalance.deploy(
  //   clearingHouse.target,
  //   marketRegistry.target,
  //   vault.target
  // );
  // console.log(`accountBalance: ${accountBalance.target}`);
  // const faucet = await Faucet.deploy();
  // console.log(`faucet: ${faucet.target}`);

  // const openOrder = await OpenOrder.deploy();
  // console.log(`order: ${openOrder.target}`);

  // await openOrder.setClearingHouse(clearingHouse);
  // await openOrder.setMarketRegistry(marketRegistry);
  // await openOrder.setAccountBalance(accountBalance);
  // await openOrder.setUniswapRouter(router);

  // await usdt.transfer(faucet, 20000n * 10n ** 6n);

  // await faucet.setUSDTAddress(usdt, { gasLimit: "300000" });
  // await clearingHouse.setMarketRegistry(marketRegistry, { gasLimit: "300000" });

  // await clearingHouse.setRouter(router, { gasLimit: "300000" });
  // await clearingHouse.setAccountBalance(accountBalance, { gasLimit: "300000" });
  // await clearingHouse.setVault(vault, { gasLimit: "300000" });
  await clearingHouse.setOrderBook(openOrder, { gasLimit: "300000" });

  // await marketRegistry.setClearingHouse(clearingHouse, { gasLimit: "300000" });

  // let tx = await marketRegistry.createPool("Bitcoin", "BTC", 8, {
  //   gasLimit: "5000000",
  // });
  // let txResult = await tx.wait();

  // const poolAddress = txResult.logs[5].args[0];
  // const baseTokenAddress = txResult.logs[5].args[1];
  // const quoteTokenAddress = txResult.logs[5].args[2];

  // console.log(`poolAddress: ${poolAddress}`);
  // console.log(`baseTokenAddress: ${baseTokenAddress}`);
  // console.log(`quoteTokenAddress: ${quoteTokenAddress}`);

  // await vault.setSettlementToken(usdt, { gasLimit: "300000" });
  // await vault.setClearingHouse(clearingHouse, { gasLimit: "300000" });

  // await clearingHouse.setQuoteToken(quoteTokenAddress, { gasLimit: "300000" });
  // await clearingHouse.approve(quoteTokenAddress, { gasLimit: "300000" });
  // await clearingHouse.approve(baseTokenAddress, { gasLimit: "300000" });
  // await clearingHouse.approve(poolAddress, { gasLimit: "300000" });

  // await accountBalance.setKeeper(deployer, { gasLimit: "300000" });

  // await clearingHouse.initializePool(
  //   baseTokenAddress,
  //   1000n * 10n ** 8n,
  //   63715000n * 10n ** 6n,
  //   { gasLimit: "3000000" }
  // );

  // let balance = await usdt.balanceOf(deployer);
  // await usdt.approve(vault, balance, { gasLimit: "300000" });
  // await vault.deposit(100000000n * 10n ** 6n, { gasLimit: "3000000" });
  // await vault.deposit(100000000n * 10n ** 6n, { gasLimit: "3000000" });
  // await vault.depositFor("0x000000c2028C057617891ECB15B8159F4249F0E3", 1000000000n * 10n ** 6n, { gasLimit: "3000000" });
}

main();

// npx hardhat run ./scripts/perp.js --network sepolia
