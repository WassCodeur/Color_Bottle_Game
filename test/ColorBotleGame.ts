import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";




describe("ColorBotleGame", function () {
    async function deployColorBotleGameFixture() {
        const [owner, user1, user2] = await hre.ethers.getSigners();


        const colorBotleGame = await hre.ethers.getContractFactory("ColorBotleGame");
        const game = await colorBotleGame.deploy();


     

        return { game, owner, user1, user2};
    }

    describe("Deployment", function () {
        it("should deploy the contract correctly", async function () {
            const { game } = await loadFixture(deployColorBotleGameFixture);
            expect(game.target).to.not.be.undefined;
        });
    });

    describe("Play the Game", function () {
        it("A player must invalid numbers", async function () {
            const { game, user1 } = await loadFixture(deployColorBotleGameFixture);
            await expect(game.connect(user1).play([1, 2, 5, 5])).to.be.revertedWith("Invalid number of colors");
    
        });

        it("a player must play the game", async function () {
            const { game, user1 } = await loadFixture(deployColorBotleGameFixture);
            const corret = await game.connect(user1).play([1, 2, 5, 2, 3])
            
            const attempt = await game.connect(user1).attempts(user1.address);
            expect(attempt).to.be.equal(1);
            
        });

        it("a player must play the game 5 time", async function () {
            const { game, user1 } = await loadFixture(deployColorBotleGameFixture);
            for (let i = 0; i < 5; i++) {
            
                await game.connect(user1).play([1, 2, 5, 2, 3])
            }
            const attempt = await game.connect(user1).attempts(user1.address);
            expect(attempt).to.be.equal(5);
            
        })
});
});
