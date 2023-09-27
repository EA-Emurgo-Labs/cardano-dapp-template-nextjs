import { LaceIcon } from "@/components/icons/lace.icon";
import BaseWallet from "./base.wallet";

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

  subscribeEvents() {
    return true;
  }
}

export default LaceWallet;
