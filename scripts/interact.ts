import { ethers } from "hardhat";
import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

async function main() {
    const [owner] = await ethers.getSigners();

    const first = "0xb6364550499baca567Ae0fb361b20AA5b908de2a";
    const Ifirst = await  ethers.getContractAt("Ifirst", first);

    const second = "0x080c23415Bd7f11fd8CAea9D132a89E866028AF3";
    const Isecond = await  ethers.getContractAt("Isecond", second);

    const third = "0xFF7D5c7dA613A91f31915c7bf6F4ab07a2B37EE9";
    const Ithird = await  ethers.getContractAt("Ithird", third);

    const fourth = "0xfb56F5F6D8D0A712778D82127B25b8533426D785";
    const Ifourth = await  ethers.getContractAt("Ifourth", fourth);

    const fifth= "0x7e897a5FDc03F0E2Cf24b5A7e28B6439F3194de7";
    const Ififth = await  ethers.getContractAt("Ififth", fifth);

    const user = "0x8cE2269478D7c8c88cB59D26825Eb3b11702f506";

    //@ts-ignore
    const web3 = new Web3(process.env.MAINETURL);



    const readstorage1 = await web3.eth.getStorageAt(first, 1);
    console.log("Contract storage at position 1:", readstorage1);

    const readstorage2 = await web3.eth.getStorageAt(second, 0);
    console.log("Contract storage at position 1:", readstorage2);

    const readstorage3 = await web3.eth.getStorageAt(third, 0);
    console.log("Contract storage at position 1:", readstorage3);

    const readstorage4 = await web3.eth.getStorageAt(fourth, 2);
    console.log("Contract storage at position 1:", readstorage4);

    const readstorage5 = await web3.eth.getStorageAt(fifth, 1);
    console.log("Contract storage at position 1:", readstorage5);


    // const firstint = await Ifirst.getTokenInfo(2);
    // console.log(`token with index 2 is ${firstint}`);

    // const secondint = await Isecond.getFreeMints(user);
    // console.log(`freeminted ${secondint}`);

    // const thirdint = await Ithird.getMintLimitInfo();
    // console.log(`mintlimit is ${thirdint}`);

    // const fourthint = await Ifourth.hasMinted(user);
    // console.log(`user minted ${fourthint}`);

    // const fifthint = await Ififth.totalSupply();
    // console.log(`totalsupply is ${fifthint}`);



}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  