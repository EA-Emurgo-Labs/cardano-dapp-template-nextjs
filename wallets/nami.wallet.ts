import { NamiIcon } from "@/components/icons/nami.icon";
import BaseWallet from "./base.wallet";

class NamiWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.nami,
      name: 'Nami',
      extensionLink:
        "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo?hl=en",
      icon: NamiIcon,
    });
  }

  subscribeEvents() {
    return true;
  }
}

export default NamiWallet;
