export default class Network {
  static isTestnet(): boolean {
    return process.env.NETWORK === "testnet";
  }

  static get current(): string {
    if (Network.isTestnet()) {
      return "testnet";
    } else {
      return "mainnet";
    }
  }
};
