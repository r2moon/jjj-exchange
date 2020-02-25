import Bitcoin from "./bitcoin";
import { IWallet } from "../../types";

export default class WalletManager {
  private _wallets: Map<string, IWallet>;
  constructor(isTestnet?: boolean) {
    this._wallets = new Map<string, IWallet>();
    this._wallets.set(
      "bitcoin",
      new Bitcoin(
        // null,
        "cVZi5icYGEUFJTUyEakSb3RLCEAocqeornzH5YzRVJ9mLfkjJtCf",
        isTestnet
      )
    );
  }

  public async validateTxRecipientAmount(blockchain: string, txId: string, recipient: string, amount: string): Promise<boolean> {
    const wallet = this._wallets.get(blockchain);
    if (wallet) {
      const tx = await wallet.getTx(txId);
      const sentAmount = wallet.getSentAmountForRecipient(tx, recipient);
      return sentAmount === amount;
    }

    throw new Error(`${blockchain} Wallet is not initialized`);
  }
}
