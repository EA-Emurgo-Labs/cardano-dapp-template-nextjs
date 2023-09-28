import { FlintIcon } from "@/components/icons/flint.icon";
import BaseWallet from "./base.wallet";

class FlintWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.flint,
      icon: FlintIcon,
      name: 'Flint',
      extensionLink:
        "https://chrome.google.com/webstore/detail/flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj?hl=en",
    });
  }

  subscribeEvents() {
    return true;
  }

  unsubscribeEvents() {
    return true;
  }
}
export default FlintWallet;
