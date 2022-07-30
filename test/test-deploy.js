const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

//yarn hardhat test para hacer todos los tests
//yarn hardhat test --grep "texto de referencia" para ejecutar solo ciertos tests
//si en vez de it pones it.only solo pasa ese test

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favourite number of 0", async function () {
        const currentValue = await simpleStorage.retrive()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue) esta es otra forma de hacer la comparacion
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrive()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
