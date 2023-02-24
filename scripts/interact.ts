import { ethers } from "hardhat";

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


    const firstint = await Ifirst.getTokenInfo(2);
    console.log(firstint);

    const secondint = await Isecond.connect(owner).getFreeMints(owner);
    console.log(secondint);

    const thirdint = await Ithird.getMintLimitInfo();
    console.log(thirdint);

    const fourthint = await Ifourth.hasMinted(owner);
    console.log(fourthint);

    const fifthint = await Ififth.totalSupply();
    console.log(fifthint);



}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  