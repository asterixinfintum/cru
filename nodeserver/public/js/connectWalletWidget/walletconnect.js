import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';
import { BrowserProvider, Contract, formatUnits } from 'ethers'

const projectId = 'c538033242a5cb164b537b8828bf6deb';

const mainnet = {
    chainId: 1, // The unique identifier for the Sepolia testnet
    name: 'Ethereum Mainnet', // The name of the test network
    currency: 'ETH', // The currency used (same as Ethereum, but test ETH)
    explorerUrl: 'https://etherscan.io', // Block explorer URL for Sepolia
    rpcUrl: 'https://rpc.ankr.com/multichain/12e754014a0e9b254a9317ed71bd8e9d366f2732668a39a431763a0abcf2840b' // Public RPC URL for the Sepolia network
};

const metadata = {
    name: 'project 1',
    description: 'crudoprotocol.fi',
    url: 'https://crudoprotocol.fi', // url must match your domain & subdomain
    icons: ['https://crudoprotocol.fi//coin.png']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,
})

const modal = createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
});

export default modal;