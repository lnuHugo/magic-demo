import { ethers } from "ethers";
import { Magic } from "magic-sdk";

export const connectMagic = async (magic: Magic) => {
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
