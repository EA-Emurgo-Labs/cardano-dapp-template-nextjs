import Lace from "./lace.wallet";
import Nami from "./nami.wallet";
import Flint from "./flint.wallet";
import Eternl from "./eternl.wallet";

export const Wallets = {
  Eternl,
  Nami,
  Lace,
  Flint,
};

export const getWalletsMetadata = () => {
  return Object.keys(Wallets).map((key) => {
    const wallet = new Wallets[key]();
    const metadata = wallet.getMetadata();

    return Object.assign({ id: key }, metadata);
  });
};
