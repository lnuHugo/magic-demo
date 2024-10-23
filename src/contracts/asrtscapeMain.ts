import ArtscapeCollection from './data/ArtscapeCollection.json';
import { settings } from './data/settings.ts';
import { connectContract } from '../services/ethersService.ts';

const ABI = ArtscapeCollection.abi
const address = settings.artscapeMainContract

export const getTotalNfts = async (provider: any ) => {
    const contract: any = await connectContract(address, ABI, provider)
    const total = Number( await contract.getTotalMinted() )

    return total
}

export const getOwnedNfts = async (provider: any, minter: any) => {
    const contract: any = connectContract(address, ABI, provider)
    const owned = await contract.getMintedTokens(minter)

    return owned;
}

export const mintNft = async (signer: any, uri: any) => {
    const contract: any = await connectContract(address, ABI, signer)
    const result = await contract.mintNft(uri)
    // console.log("Minted token", result)
    return result
}