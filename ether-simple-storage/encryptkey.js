const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();
async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJSONkey = await wallet.encrypt(
        process.env.PASSWORD,
        process.env.PRIVATE_KEY
    );
    fs.writeFileSync("./encryptedkey.json", encryptedJSONkey);
}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })