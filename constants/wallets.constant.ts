import NamiIcon from '@/components/icons/nami.icon'

export enum WalletState {
  NOT_CONNECTED,
  CONNECTING,
  CONNECTED,
}

export const Nami = {
  id: 'Nami',
  getConnector: () => window.cardano?.nami,
  name: 'Nami',
  extensionLink:
    'https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo?hl=en',
  icon: NamiIcon
});

export default [
  Nami
];
