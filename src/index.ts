const express = require("express");
const app = express();

import WalletManager from "./services/blockchain/wallet-manager";

// app.get('/', (req, res) => {
//     console.log("Welcome");
//     res.send("Welcome JJJ Exchange");
// });

console.log(process.env.NETWORK);
const walletManager = new WalletManager(process.env.NETWORK === "testnet");

app.listen(3000);

const main = async() => {
  const flag = await walletManager.validateTxRecipientAmount(
    "bitcoin",
    "436c2d2709746aa95bfa2b42795b97e54a1cc0c7c0cdb7a1f377058baffc8ba5",
    "mt36VPA1KRj4LxYTfyqyHc4NsgUievdgz6",
    "24500"
  );
  console.log(flag);
}

main();
