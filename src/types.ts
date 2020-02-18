
export interface ExchangeRequestParams {
  pair: string; // exchange coin. ex. btc_eth
  amount: number; // exchange amount
  withdrawal: string; // the address for coin to be sent to
}

export abstract class IWallet {
  /**
   * send tokens to receiver
   * @param recipientId receiver address
   * @param amount amount
   */
  abstract async send(
    recipientId: string,
    amount: string | number
  ): Promise<string>;

  /**
   * resync network
   */
  abstract async resync(): Promise<void>;

  /**
   * get address
   */
  abstract get address(): string;

  /**
   * get balance in string
   */
  abstract get balance(): string | number;
}
