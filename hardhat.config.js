const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("accounts","Prints the list of the accounts",async(taskArgs, hre) =>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})
module.exports = {
  solidity: "0.8.9",
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{}
  }
};
