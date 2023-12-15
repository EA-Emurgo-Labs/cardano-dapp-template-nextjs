import { getAddressDetails } from "lucid-cardano";
import BaseWallet from "./base.wallet";
import * as AccountActions from "@/actions/account.action";
import { EternlIcon } from "../components/icons/eternl.icon";

class EternlWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.eternl,
      name: "Eternl",
      extensionLink:
        "https://chromewebstore.google.com/detail/eternl/kmhcihpebfmpgmihbkipmjlmmioameka?pli=1",
      icon: EternlIcon
    });
  }

  async subscribeEvents() {
    return true;
  }

  async unsubscribeEvents() {
    return true;
  }
}

export default EternlWallet;
