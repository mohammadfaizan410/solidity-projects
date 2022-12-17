const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("should start with an initial value of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";

    assert.equal(currentValue.toString(), expectedValue)
  })

  it("should update when we call store func", async function () {
    const updateby = "10";
    await simpleStorage.store(10);
    const updatedValue = await simpleStorage.retrieve();
    assert.equal(updateby, updatedValue.toString());
  })
});