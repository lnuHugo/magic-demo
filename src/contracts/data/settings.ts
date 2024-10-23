
export const settings = {
    infuraSepolia: 'https://sepolia.infura.io/v3/d5fd8992e2eb410992c4324f20fa3895',
    infuraMainnet: 'https://mainnet.infura.io/v3/d5fd8992e2eb410992c4324f20fa3895',
    raribleTestNetKey: '04cf2ccb-c8fd-41a8-99f7-610acdae10f6',
    pinataGateway: "https://gateway.pinata.cloud/ipfs/",
    pinataGateway2: "brown-fashionable-aardvark-7.mypinata.cloud",
    pinataKey: "d46a53077e07b3b1149e",
    pinataSecret: "9f620b0cff4d66f75b5df3e57bf68e9674c894e1b9f58ddc68b3805fc267f1e2",
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTRmMTg5YS0yMWYzLTQ1OGQtYjRhOS0yNjNkMGI4OWE2MjYiLCJlbWFpbCI6ImRldkBhcnRzY2FwZWRpZ2l0YWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQ0NmE1MzA3N2UwN2IzYjExNDllIiwic2NvcGVkS2V5U2VjcmV0IjoiOWY2MjBiMGNmZjRkNjZmNzViNWRmM2U1N2JmNjhlOTY3NGM4OTRlMWI5ZjU4ZGRjNjhiMzgwNWZjMjY3ZjFlMiIsImV4cCI6MTc2MTA0NjQ5MH0.Szf4aGQiX8xtBbnfS78pjmV54BgOZKpM4YCy0rgcZJQ",
    artscapeMainContract: "0xa9Ec3b554FF33aAC490EF12ee7C62222e8eFb7ce",
    magicKey: "pk_live_4BBAF9A24C63E31A"
}

export const NETWORK = {
    ethereum_mainnet: {
        name: "infura_main",
        rpcUrl: settings.infuraMainnet,
        chainId: 1,
    },
    ethereum_sepolia: {
        name: "sepolia",
        rpcUrl: settings.infuraSepolia,
        chainId: 11155111,              
    },
    hardhat_local: {
        namr: "hardhat",
        rpcUrl: 'http://localhost:8545',  
        chainId: 31337,                   
    }
}

export const ETHERS_NETWORK = {
    mainnet: {
        name: 'mainnet',  // Replace with your local RPC URL
        chainId: BigInt(1),                   // Default Hardhat chain ID
    },
    sepolia: {
        name: 'sepolia',  // Replace with your local RPC URL
        chainId: BigInt(11155111),                   // Default Hardhat chain ID
    },
    hardhat: {
        name: 'http://localhost:8545',  // Replace with your local RPC URL
        chainId: BigInt(31337),                   // Default Hardhat chain ID
    }
}