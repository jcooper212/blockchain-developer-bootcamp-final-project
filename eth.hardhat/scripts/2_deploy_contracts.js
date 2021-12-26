const hre = require("hardhat");

var fs = require('fs');




async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DaoPayTreasury = await hre.ethers.getContractFactory("DaoPayTreasury");
  const dpt = await DaoPayTreasury.deploy(1000000000); //total supply

  await dpt.deployed();

  let fileLoc = process.env.DAOPAYTREASURY_ROOT;
  fileLoc += '/DAOPAYTREASURY_ContractAddress.json';
  let jsonStr = '{"DAOPAYTREASURY_ContractAddress": "';
  jsonStr += dpt.address;
  jsonStr += '"}'

  console.log("DaoPayTreasury deployed to:", jsonStr);


  fs.writeFileSync(fileLoc, Buffer(jsonStr), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  console.log("DaoPayTreasury written to:", fileLoc);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //DaoPayTreasury deployed to: 0x077EfF2928905fb1D312A4fF32da84D06B42A5d4
