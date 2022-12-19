
// function deployFunc() {

//     console.log("hello");
// };


// module.exports.default = deployFunc;

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = getNamedAccounts();
}