import { NamiIcon } from "@/components/icons/nami.icon";
import { getAddressDetails, Lucid } from "lucid-cardano";
import BaseWallet from "./base.wallet";
import * as AccountActions from "@/actions/account.action";
import { forEach } from "lodash";

let events = [];

class NamiWallet extends BaseWallet {
  constructor() {
    super({
      provider: window.cardano?.nami,
      name: "Nami",
      extensionLink:
        "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo?hl=en",
      icon: NamiIcon,
    });
  }

  async subscribeEvents({ dispatch }) {
    const api = await this.getApi();

    events.push({
      name: "accountChange",
      callback: (addresses: any) => {
        console.log(
          "[events] accountChange of Nami wallet -> addresses",
          addresses
        );
        const result = getAddressDetails(addresses[0]);
        dispatch(
          AccountActions.updateWallet({
            wallet: {
              address: result.address.bech32,
            },
          })
        );
      },
    });

    events.push({
      name: "networkChange",
      callback: (network) => {
        console.log(
          "[events] networkChange of Nami wallet -> network",
          network
        );
        dispatch(
          AccountActions.updateWallet({
            wallet: {
              networkId: network,
            },
          })
        );
      },
    });

    events.forEach((event) => {
      api.experimental.on(event.name, event.callback);
    });
  }
  async unsubscribeEvents() {
    const api = await this.getApi();
    events.forEach((event) => {
      api.experimental.off(event.name, event.callback);
    });
    events = [];
  }
}

export default NamiWallet;
