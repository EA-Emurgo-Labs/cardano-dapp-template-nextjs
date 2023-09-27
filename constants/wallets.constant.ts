import { NamiIcon } from "@/components/icons/nami.icon";
import { LaceIcon } from "@/components/icons/lace.icon";
import { FlintIcon } from "@/components/icons/flint.icon";

export enum WalletState {
  NOT_CONNECTED,
  CONNECTING,
  CONNECTED,
}

export const Nami = {
  id: "Nami",
  getConnector: () => window.cardano?.nami,
  name: "Nami",
  extensionLink:
    "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo?hl=en",
  icon: NamiIcon,
};

export const Lace = {
  id: "Lace",
  getConnector: () => window.cardano?.lace,
  name: "Lace",
  extensionLink:
    "https://chrome.google.com/webstore/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk",
  icon: LaceIcon,
};

export const Flint = {
  id: "Flint",
  getConnector: () => window.cardano?.flint,
  name: "Flint",
  icon: FlintIcon,
  extensionLink:
    "https://chrome.google.com/webstore/detail/flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj?hl=en",
};
export const Wallets = [Nami, Lace, Flint];
