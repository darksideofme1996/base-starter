const hre = require("hardhat");
async function main() {
  const C = await hre.ethers.getContractFactory("MyToken");
  const c = await C.deploy("MyToken", "MTK");
  await c.waitForDeployment();
  console.log("Deployed:", await c.getAddress());
}
main().catch((e) => { console.error(e); process.exit(1); });
