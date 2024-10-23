import { Magic } from "magic-sdk";


const magic = new Magic("pk_live_4BBAF9A24C63E31A", {
  network: "sepolia",
}) as Magic;


// const magicWeb3: Web3 = new Web3(magic.rpcProvider as any);

export { magic };