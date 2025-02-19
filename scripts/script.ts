import { ethers } from "hardhat";



async function main() {
    const [owner, user1] =  await ethers.getSigners()
    

    const game = await ethers.deployContract("ColorBotleGame");

    await game.waitForDeployment();



    console.log("Game deployed to:", game.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});