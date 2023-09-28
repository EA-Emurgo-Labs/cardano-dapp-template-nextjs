import { LaceIcon } from "@/components/icons/lace.icon";
import BaseWallet from "./base.wallet";

let events = [];

class LaceWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.lace,
      name: 'Lace',
      extensionLink:
        "https://chrome.google.com/webstore/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk",
      icon: LaceIcon,
    });
  }

  async subscribeEvents() {
    return true;
  }
  async unsubscribeEvents() {
    return true;
  }
}

export default LaceWallet;
