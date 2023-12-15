import BaseWallet from "./base.wallet";
import { YoroiIcon } from "../components/icons/yoroi.icon";

class YoroiWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.yoroi,
      name: "Yoroi",
      extensionLink:
        "https://chromewebstore.google.com/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb",
      icon: YoroiIcon
    });
  }

  async subscribeEvents() {
    return true;
  }

  async unsubscribeEvents() {
    return true;
  }
}

export default YoroiWallet;
