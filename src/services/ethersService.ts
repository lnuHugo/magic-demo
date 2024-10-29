import { ethers } from "ethers";
import Web3 from "web3";

export const connectMagic = async (magic: Web3) => {
  try {
    const rpcProviderUrl = (magic.rpcProvider as any).rpcUrl;
    const magicProvider: any = new ethers.JsonRpcProvider(rpcProviderUrl);
    magicProvider.magic = true;
    return magicProvider;
  } catch (error) {
    console.error("Magic connection failed", error);
  }
};

export const connectContract = async (
  address: string,
  abi: any,
  provider: any
) => {
  const contractor = await provider.getSigner();
  const contract = new ethers.Contract(address, abi, contractor);
  return contract;
};
