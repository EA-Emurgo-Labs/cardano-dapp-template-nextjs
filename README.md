# cardano-dapp-template-nextjs

## 1. Install dependencies

```bash
cd cardano-dapp-template-nextjs
npm install
```

## 2. Setup environment variables

Create your own .env file and fill out all the variables

```sh
cp .env.default .env
```

All the variables:

```sh
NEXT_PUBLIC_TESTNET_BLOCKFROST_PROVIDER_URL=https://cardano-preprod.blockfrost.io/api/v0
NEXT_PUBLIC_TESTNET_BLOCKFROST_PROVIDER_ID=<YOUR_API_KEY>
NEXT_PUBLIC_PROVIDER=blockfrost
NEXT_PUBLIC_NETWORK_ID=0
```

Please go to website https://blockfrost.io/ and create your own API key

## 3. Run application

```bash
npm run dev
```
